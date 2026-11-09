import { DemoRequestError } from '../app/academias/demo-service';
import { field } from '../app/partners/service';
import type { Referral } from '../app/partners/referral';
const stamp=()=>Math.floor(Date.now()/1000);
export type Application={id:string;name:string;organization:string;email:string;website:string;country:string;audience:string;message:string;status:string;code:string|null;agreement_reference:string|null;created_at:number};
export type Commission={payment_id:number;user_id:string;provider:string;occurred_at:number;status:string;paid_month:number;earned_cents:number;settled_cents:number;due_cents:number};
export type Settlement={id:string;partner_id:string;external_reference:string;reconciliation_reference:string;amount_cents:number;snapshot_json:string;created_at:number};
export async function applications(db:D1Database) {return (await db.prepare('SELECT * FROM partner_applications ORDER BY created_at DESC LIMIT 200').all<Application>()).results;}
export async function approvedPartner(db:D1Database,code:string) {return db.prepare("SELECT id,email FROM partner_applications WHERE code=? AND status='approved'").bind(code).first<{id:string;email:string}>();}
export async function reviewApplication(db:D1Database,id:string,status:string,agreementReference:string) {
 if(!['approved','rejected','paused'].includes(status))throw new DemoRequestError('Estado no válido.');
 const reference=field(agreementReference,300);
 const code=`sc_${crypto.randomUUID().replaceAll('-','').slice(0,24)}`;
 const at=stamp();
 const result=await db.batch([
 db.prepare(`INSERT INTO partner_audit(id,partner_id,action,detail,created_at) SELECT ?,id,'review',?,? FROM partner_applications WHERE id=?`).bind(crypto.randomUUID(),JSON.stringify({status,reference}),at,id),
 db.prepare(`UPDATE partner_applications SET status=?,code=CASE WHEN ?='approved' THEN COALESCE(code,?) ELSE code END,
 agreement_reference=CASE WHEN ?='approved' THEN ? ELSE agreement_reference END,
 approved_at=CASE WHEN ?='approved' THEN COALESCE(approved_at,?) ELSE approved_at END WHERE id=?`).bind(status,status,code,status,reference,status,at,id)
 ]);
 if(!result[1].meta.changes)throw new DemoRequestError('Solicitud no encontrada.',404);
}
export async function bindAttribution(db:D1Database,userId:string,ref:Referral) {
 // First successful bind wins. Exclude self referrals and customers who paid
 // before the signed visit. Monthly/annual plans and teacher rewards are untouched.
 await db.prepare(`INSERT INTO partner_attributions(user_id,partner_id,clicked_at,attributed_at)
 SELECT u.id,p.id,?,? FROM users u JOIN partner_applications p ON p.code=? AND p.status='approved'
 WHERE u.id=? AND lower(u.email)<>lower(p.email)
 AND NOT EXISTS(SELECT 1 FROM billing_payments b WHERE b.user_id=u.id AND b.environment='live' AND COALESCE((SELECT MIN(o.occurred_at) FROM billing_outbox_events o WHERE o.payment_id=b.id AND o.event_name IN ('first_subscription_paid','subscription_renewed')),b.occurred_at)<?)
 ON CONFLICT(user_id) DO NOTHING`).bind(ref.clickedAt,stamp(),ref.code,userId,ref.clickedAt).run();
}
// Both verified billing providers accept USD 1990 only for the current monthly
// offer; annual, legacy and trial amounts differ (billing-contract.md). Use the
// immutable paid amount and original outbox confirmation, never the current
// subscription plan or the payment's mutable refund-event timestamp.
// Count payment identities even after refund/reversal: reversing a paid month
// does not let month seven replace it. Sandbox, annual and legacy charges never qualify.
const ledgerCte=`WITH confirmations AS (
 SELECT payment_id,MIN(occurred_at) AS confirmed_at FROM billing_outbox_events
 WHERE event_name IN ('first_subscription_paid','subscription_renewed') GROUP BY payment_id
), ranked AS (
 SELECT b.id AS payment_id,b.user_id,b.provider,c.confirmed_at AS occurred_at,b.status,
 ROW_NUMBER() OVER(PARTITION BY b.user_id ORDER BY c.confirmed_at,b.id) AS paid_month
 FROM billing_payments b JOIN confirmations c ON c.payment_id=b.id
 JOIN partner_attributions a ON a.user_id=b.user_id
 WHERE a.partner_id=? AND b.environment='live' AND b.currency='USD' AND b.amount_cents=1990
 AND c.confirmed_at>=a.clicked_at AND b.status IN ('COMPLETED','REFUNDED','REVERSED')
 AND b.provider IN ('paddle','paypal')
), earned AS (
 SELECT r.*,CASE WHEN r.status='COMPLETED' THEN CAST(round((1990-COALESCE(j.refunded_cents,0))*0.30) AS INTEGER) ELSE 0 END AS earned_cents
 FROM ranked r LEFT JOIN partner_payment_adjustments j ON j.payment_id=r.payment_id WHERE r.paid_month<=6
), paid AS (
 SELECT CAST(json_extract(line.value,'$.payment_id') AS INTEGER) AS payment_id,
 SUM(CAST(json_extract(line.value,'$.due_cents') AS INTEGER)) AS settled_cents
 FROM partner_settlements st,json_each(st.snapshot_json) line WHERE st.partner_id=? GROUP BY 1
), ledger AS (
 SELECT e.*,COALESCE(p.settled_cents,0) AS settled_cents,e.earned_cents-COALESCE(p.settled_cents,0) AS due_cents
 FROM earned e LEFT JOIN paid p ON p.payment_id=e.payment_id
)`;
const ledgerValues=(partnerId:string)=>[partnerId,partnerId];
export async function commissionLedger(db:D1Database,partnerId:string) {
 return (await db.prepare(`${ledgerCte} SELECT * FROM ledger ORDER BY occurred_at,payment_id`).bind(...ledgerValues(partnerId)).all<Commission>()).results;
}
export async function recordAdjustment(db:D1Database,partnerId:string,paymentId:number,refundedCents:number,evidence:string) {
 if(!Number.isSafeInteger(paymentId)||!Number.isSafeInteger(refundedCents)||refundedCents<0||refundedCents>1990)throw new DemoRequestError('Importe de ajuste no válido.');
 const reference=field(evidence,300);
 if(!(await commissionLedger(db,partnerId)).some(row=>row.payment_id===paymentId))throw new DemoRequestError('Pago no encontrado.',404);
 await db.batch([
 db.prepare(`INSERT INTO partner_payment_adjustments(payment_id,refunded_cents,evidence,recorded_at) VALUES(?,?,?,?)
 ON CONFLICT(payment_id) DO UPDATE SET refunded_cents=excluded.refunded_cents,evidence=excluded.evidence,recorded_at=excluded.recorded_at`).bind(paymentId,refundedCents,reference,stamp()),
 db.prepare('INSERT INTO partner_audit(id,partner_id,action,detail,created_at) VALUES(?,?,?,?,?)').bind(crypto.randomUUID(),partnerId,'adjustment',JSON.stringify({paymentId,refundedCents,reference}),stamp())
 ]);
}
export async function settlements(db:D1Database,partnerId?:string) {return (await db.prepare(`SELECT * FROM partner_settlements ${partnerId?'WHERE partner_id=?':''} ORDER BY created_at DESC LIMIT 500`).bind(...(partnerId?[partnerId]:[])).all<Settlement>()).results;}
export async function recordSettlement(db:D1Database,input:{partnerId:string;requestKey:string;externalReference:string;reconciliationReference:string;expectedCents:number}) {
 const id=field(input.requestKey,100),external=field(input.externalReference,300),reconciliation=field(input.reconciliationReference,300);
 if(!Number.isSafeInteger(input.expectedCents)||input.expectedCents<=0)throw new DemoRequestError('Importe de liquidación no válido.');
 if(!/^[a-zA-Z0-9_-]{16,100}$/.test(id))throw new DemoRequestError('Identificador no válido.');
 const existing=await db.prepare('SELECT * FROM partner_settlements WHERE id=?').bind(id).first<Settlement>();
 if(existing){if(existing.partner_id!==input.partnerId||existing.external_reference!==external||existing.reconciliation_reference!==reconciliation||existing.amount_cents!==input.expectedCents)throw new DemoRequestError('La liquidación ya existe con otros datos.',409);return existing;}
 // One statement freezes the net balance and per-payment allocation. Concurrent
 // statements serialize in D1; repeating the same request cannot append payments.
 await db.prepare(`${ledgerCte} INSERT INTO partner_settlements(id,partner_id,external_reference,reconciliation_reference,amount_cents,snapshot_json,created_at)
 SELECT ?,?,?,?,SUM(due_cents),json_group_array(json_object('payment_id',payment_id,'due_cents',due_cents)),?
 FROM ledger WHERE due_cents<>0 AND EXISTS(SELECT 1 FROM partner_applications WHERE id=? AND status='approved') HAVING SUM(due_cents)>0 AND SUM(due_cents)=?
 ON CONFLICT(id) DO NOTHING`).bind(...ledgerValues(input.partnerId),id,input.partnerId,external,reconciliation,stamp(),input.partnerId,input.expectedCents).run();
 const result=await db.prepare('SELECT * FROM partner_settlements WHERE id=?').bind(id).first<Settlement>();
 if(!result)throw new DemoRequestError('El saldo cambió o no es positivo. Actualiza el panel antes de registrar la liquidación.',409);
 if(result.partner_id!==input.partnerId||result.external_reference!==external||result.reconciliation_reference!==reconciliation||result.amount_cents!==input.expectedCents)throw new DemoRequestError('La liquidación ya existe con otros datos.',409);
 return result;
}
export function csvCell(value:unknown) {const str=String(value??'');return `"${(/^[=+\-@\t\r\n]/.test(str)?"'":'')+str.replaceAll('"','""')}"`;}
export function settlementsCsv(rows:Settlement[]) {return '\uFEFF'+[['id','partner_id','external_reference','reconciliation_reference','amount_usd','created_at'],...rows.map(r=>[r.id,r.partner_id,r.external_reference,r.reconciliation_reference,(r.amount_cents/100).toFixed(2),new Date(r.created_at*1000).toISOString()])].map(row=>row.map(csvCell).join(',')).join('\r\n');}
