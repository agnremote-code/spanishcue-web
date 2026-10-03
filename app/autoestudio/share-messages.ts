const messages: Record<string,string> = {
 invalid_alias:'Elige un apodo de 2 a 24 caracteres, con al menos una letra. No incluyas email, teléfono ni enlaces.',
 session_changed:'El acceso cambió en otra pestaña. Vuelve a abrir el enlace que quieres usar.',
 invalid_pass:'Este acceso ya no está disponible. Pídele a tu profe el enlace vigente.',
 share_unavailable:'Los accesos de Autoestudio no están disponibles en este momento. Vuelve a intentarlo más tarde.',
 sign_in_required:'Ingresa a tu cuenta para administrar los accesos.',
 pro_required:'Necesitas SpanishCue PRO para crear accesos para tus alumnos.',
 forbidden_origin:'La solicitud no se pudo validar. Recarga la página e intenta de nuevo.',
 rate_limited:'Hubo demasiadas solicitudes seguidas. Espera un minuto y vuelve a intentarlo.',
 pass_revoked:'Este acceso está revocado. Puedes crear uno nuevo conservando el alumno.',
 pass_not_found:'No encontramos este acceso.', learner_not_found:'No encontramos a este alumno.',
 pass_limit:'Llegaste al límite de accesos disponibles.', invalid_level:'Elige uno de los niveles de la lista.',
};
export function shareMessage(code: unknown): string { return typeof code==='string' && messages[code] ? messages[code] : 'No pudimos completar la operación. Vuelve a intentarlo.'; }
