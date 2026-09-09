import { env } from 'cloudflare:workers';
import { DEFAULT_OFFER, type Offer } from '../app/offer';
function binding(){if(!env.DB)throw new Error('La configuración no está disponible.');return env.DB;}
export async function readOffer():Promise<Offer>{const row=await binding().prepare('SELECT base_cents AS baseCents, discount_percent AS discountPercent, months, max_teachers AS maxTeachers, revision FROM offer_settings WHERE id = 1').first<Offer>();return row??DEFAULT_OFFER;}
export async function saveOffer(o:Offer){
 const result=await binding().prepare('INSERT INTO offer_settings(id,base_cents,discount_percent,months,max_teachers,revision) SELECT 1,?,?,?,?,1 WHERE ?=0 ON CONFLICT(id) DO NOTHING').bind(o.baseCents,o.discountPercent,o.months,o.maxTeachers,o.revision).run();
 if(result.meta.changes)return true;
 const updated=await binding().prepare('UPDATE offer_settings SET base_cents=?,discount_percent=?,months=?,max_teachers=?,revision=revision+1 WHERE id=1 AND revision=?').bind(o.baseCents,o.discountPercent,o.months,o.maxTeachers,o.revision).run();return !!updated.meta.changes;
}
