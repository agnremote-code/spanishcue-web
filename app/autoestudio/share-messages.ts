const messages: Record<string,string> = {
 invalid_alias:'Elegí un apodo de 2 a 24 caracteres, con al menos una letra. No incluyas email, teléfono ni enlaces.',
 session_changed:'El acceso cambió en otra pestaña. Volvé a abrir el enlace que querés usar.',
 invalid_pass:'Este acceso ya no está disponible. Pedile a tu profe el enlace vigente.',
 share_unavailable:'Los accesos de Autoestudio no están disponibles en este momento. Volvé a intentarlo más tarde.',
 sign_in_required:'Ingresá a tu cuenta para administrar los accesos.',
 pro_required:'Necesitás SpanishCue PRO para crear accesos para tus alumnos.',
 forbidden_origin:'La solicitud no se pudo validar. Recargá la página e intentá de nuevo.',
 rate_limited:'Hubo demasiadas solicitudes seguidas. Esperá un minuto y volvé a intentar.',
 pass_revoked:'Este acceso está revocado. Podés crear uno nuevo conservando el alumno.',
 pass_not_found:'No encontramos este acceso.', learner_not_found:'No encontramos a este alumno.',
 pass_limit:'Llegaste al límite de accesos disponibles.', invalid_level:'Elegí uno de los niveles de la lista.',
};
export function shareMessage(code: unknown): string { return typeof code==='string' && messages[code] ? messages[code] : 'No pudimos completar la operación. Volvé a intentarlo.'; }
