"use client";
import type { SyncStatus } from './server-adapter';
export default function ProgressNotice({status,localText,onRetry}:{status:SyncStatus|null;localText:string;onRetry:()=>Promise<void>}) {
  if (!status) return <small>{localText}</small>;
  return <div className="ae-sync-note" role="status">
    {status === 'saved' && 'Progreso sincronizado con tu profe. Tus textos y grabaciones quedan en este dispositivo.'}
    {status === 'loading' && 'Recuperando tu progreso…'}
    {status === 'syncing' && 'Guardando progreso…'}
    {status === 'offline' && <>No pudimos sincronizar. Tu profe todavía no ve los últimos cambios. <button type="button" onClick={()=>void onRetry()}>Reintentar</button></>}
    {status === 'session-changed' && 'Este acceso cambió. Volvé a abrir el enlace de tu profe antes de continuar.'}
  </div>;
}
