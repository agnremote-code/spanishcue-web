import { requireChatGPTUser } from '../chatgpt-auth';
import { headers } from 'next/headers';
import { ownerFromHeaders } from '../access-policy';
import '../teachers.css';
export const dynamic='force-dynamic';
export default async function Account(){const user=await requireChatGPTUser('/cuenta');const owner=ownerFromHeaders(await headers());return <div className="teacher-app"><main className="teacher-main"><a href="/">← Biblioteca</a><h1>Tu cuenta</h1><p>{user.displayName}</p><p>{owner?'Propietario · Acceso completo':'Profesor · Acceso gratuito'}</p>{owner&&<p><a href="/admin">Administrar precios y promoción →</a></p>}<p>No tenés cobros ni suscripciones activas.</p><a href="/signout-with-chatgpt?return_to=%2F" target="_top">Cerrar sesión</a></main></div>}
