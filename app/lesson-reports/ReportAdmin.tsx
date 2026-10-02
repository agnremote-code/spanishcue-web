'use client';
import {useEffect,useRef,useState} from 'react';
import type {LessonReportRow,ReportStatus} from './contracts';
import {reportStatuses} from './contracts';
import './reports.css';
const names:Record<ReportStatus,string>={new:'Nuevo',reviewing:'En revisión',accepted:'Aceptado',rejected:'Rechazado',resolved:'Resuelto'};
const categories:Record<string,string>={text:'Texto',answer:'Respuesta',audio:'Audio',image:'Imagen',instruction:'Instrucción',technical:'Problema técnico',suggestion:'Sugerencia',other:'Otro'};
export default function ReportAdmin(){
 const [filter,setFilter]=useState('pending'),[reports,setReports]=useState<LessonReportRow[]>([]),[next,setNext]=useState<number|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState('');
 const generation=useRef(0);
 const load=async(status:string,offset=0)=>{
   const token=++generation.current;
   try{const r=await fetch(`/api/admin/lesson-reports?status=${status}&offset=${offset}`,{cache:'no-store'});const data=await r.json() as {error?:string;reports:LessonReportRow[];nextOffset:number|null};if(!r.ok)throw new Error(data.error||'No pudimos cargar los reportes.');if(token!==generation.current)return;setReports(current=>offset?[...current,...data.reports]:data.reports);setNext(data.nextOffset)}
   catch(e){if(token===generation.current)setError(e instanceof Error?e.message:'No pudimos cargar los reportes.')}
   finally{if(token===generation.current)setLoading(false)}
 };
 useEffect(()=>{
   let active=true;const token=++generation.current;
   fetch(`/api/admin/lesson-reports?status=${filter}&offset=0`,{cache:'no-store'})
     .then(async response=>{const data=await response.json() as {error?:string;reports:LessonReportRow[];nextOffset:number|null};if(!response.ok)throw new Error(data.error||'No pudimos cargar los reportes.');return data})
     .then(data=>{if(active&&token===generation.current){setReports(data.reports);setNext(data.nextOffset)}})
     .catch(e=>{if(active&&token===generation.current)setError(e instanceof Error?e.message:'No pudimos cargar los reportes.')})
     .finally(()=>{if(active&&token===generation.current)setLoading(false)});
   return()=>{active=false};
 },[filter]);
 const reload=(offset=0)=>{setLoading(true);setError('');void load(filter,offset)};
 return <section className="sc-report-admin">
   <div className="sc-report-admin-filters" role="group" aria-label="Filtrar reportes">{[['pending','Pendientes'],['accepted','Aceptados'],['rejected','Rechazados'],['resolved','Resueltos'],['all','Todos']].map(([value,label])=><button type="button" key={value} aria-pressed={filter===value} onClick={()=>{if(value===filter)return;generation.current++;setLoading(true);setError('');setReports([]);setFilter(value)}}>{label}</button>)}</div>
   {error&&<div className="sc-report-admin-error" role="alert"><p>{error}</p><button type="button" onClick={()=>reload()}>Reintentar</button></div>}
   {loading&&<p role="status">Cargando reportes…</p>}
   {!loading&&!error&&!reports.length&&<div className="sc-report-admin-empty"><span aria-hidden="true">✓</span><h2>{filter==='pending'?'Todo al día.':'Sin reportes en este estado.'}</h2><p>Cuando un profesor envíe feedback, lo vas a encontrar acá.</p></div>}
   <div className="sc-report-admin-list">{reports.map(report=><ReportCard key={report.id} report={report} onUpdated={()=>reload()}/>)}</div>
   {next!==null&&<button className="sc-report-primary" type="button" disabled={loading} onClick={()=>reload(next)}>Ver más reportes</button>}
 </section>;
}
function ReportCard({report,onUpdated}:{report:LessonReportRow;onUpdated:()=>void}){
 const [status,setStatus]=useState<ReportStatus>(report.status),[resolution,setResolution]=useState(report.resolution||''),[reference,setReference]=useState(report.change_reference||''),[busy,setBusy]=useState(false),[error,setError]=useState('');
 const save=async()=>{setBusy(true);setError('');try{const r=await fetch(`/api/admin/lesson-reports/${encodeURIComponent(report.id)}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status,resolution,changeReference:reference})});const data=await r.json() as {error?:string};if(!r.ok)throw new Error(data.error||'No pudimos guardar los cambios.');onUpdated()}catch(e){setError(e instanceof Error?e.message:'No pudimos guardar los cambios.')}finally{setBusy(false)}};
 let context:{locationLabel?:string}= {};try{context=JSON.parse(report.context_json)}catch{/* Older malformed context must not hide a report. */}
 return <article className="sc-report-card"><header><div><span className={`sc-report-status sc-report-status-${report.status}`}>{names[report.status]}</span><span className="sc-report-card-category">{categories[report.category]||report.category}</span></div><time dateTime={report.created_at}>{new Date(report.created_at).toLocaleString('es-AR',{dateStyle:'medium',timeStyle:'short'})}</time></header>
   <a className="sc-report-lesson-link" href={report.route_path==='/'?`/clase/${report.lesson_id}`:`/${report.lesson_slug}?level=${encodeURIComponent(report.lesson_level)}`}>{report.lesson_title} ↗</a>
   <p className="sc-report-card-meta">{report.lesson_category} · {report.lesson_level}{context.locationLabel?` · ${context.locationLabel}`:''}</p>
   <p className="sc-report-message">{report.message}</p>
   <footer><span>{report.reporter_email||report.user_id}</span><small>Claude: {report.ai_status==='unprocessed'?'sin analizar':report.ai_status}</small></footer>
   <details><summary>Gestionar reporte</summary><div className="sc-report-management"><p className="sc-report-identifiers">Sección: {report.section_id||'sin ID'} · Actividad: {report.activity_id||'sin ID'}{report.question_id?` · Pregunta: ${report.question_id}`:''}</p><label>Estado<select value={status} onChange={e=>setStatus(e.target.value as ReportStatus)}>{reportStatuses.map(value=><option value={value} key={value}>{names[value]}</option>)}</select></label><label>Resolución<textarea value={resolution} maxLength={3000} onChange={e=>setResolution(e.target.value)} placeholder="Qué se revisó o corrigió"/></label><label>Referencia del cambio (opcional)<input value={reference} maxLength={250} onChange={e=>setReference(e.target.value)} placeholder="Commit, PR o referencia de contenido"/></label>{error&&<p role="alert" className="sc-report-error">{error}</p>}<button className="sc-report-primary" type="button" onClick={save} disabled={busy}>{busy?'Guardando…':'Guardar cambios'}</button></div></details>
 </article>;
}
