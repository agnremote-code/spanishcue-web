import type {CountrySlug} from './types';
import type {CEFRLevel} from '../conversation-families/types';
// Each row is one authored 60-minute journey, not a difficulty label on shared questions.
export const prompts:Record<CountrySlug,Record<Exclude<CEFRLevel,'A0'>,string[]>>={
 suecia:{
 A1:[
 'Mira las opciones. ¿Prefieres una ciudad, un bosque o una isla? Di una cosa que te gusta.',
 'Busca Estocolmo y Kiruna. Elige un lugar y di: «Quiero ir a…». ¿Norte o sur?',
 'Elige verano o invierno. ¿Te gusta la luz, la nieve o el calor? Pregunta al profesor.',
 'Prepara una fika: elige una bebida, algo para comer y una persona. Di tu pedido.',
 'El profesor te invita a una fika. Saluda, acepta o rechaza y propone una hora.',
 'Tú quieres un barco y tu compañero quiere caminar. Elijan un plan para la mañana y otro para la tarde.',
 'Elige dos paradas para un fin de semana. Di dónde vas primero y cómo viajas.',
 'Piensa en tu ciudad. ¿Hay lagos, bicicletas o barcos? Di una semejanza con Suecia.',
 'Tu plan era caminar, pero llueve. Elige un café, un museo o quedarte en casa. Di qué quieres.',
 'Presenta tu pequeño viaje: un lugar, una estación, una bebida y una actividad. Haz una pregunta al profesor.'
 ],
 A2:[
 'Describe tu día libre ideal entre ciudad, lago y bosque. ¿Con quién vas y qué llevas?',
 'Organiza una visita a Estocolmo y otra al norte. Explica qué ropa necesitas en cada caso según la estación.',
 'Compara una tarde de verano muy luminosa con una tarde de invierno oscura. ¿Cómo cambia tu rutina?',
 'Diseña una fika para dos personas con gustos diferentes. Explica los pedidos, el lugar y el horario.',
 'Invita a alguien a Midsummer. Explica qué van a hacer y pregunta qué necesita llevar.',
 'Organicen una salida al lago: una persona quiere nadar y otra descansar. Acuerden tres actividades.',
 'Tienes 48 horas en una zona de Suecia. Elige dos paradas cercanas y explica el orden sin intentar cruzar todo el país.',
 'Cuenta cómo descansas en tu país. ¿Qué hábito sueco te gustaría probar y cuál no?',
 'No se ven auroras esta noche. Explica cómo cambias el plan y ofrece una alternativa al grupo.',
 'Recomienda un fin de semana a una persona que no conoce Suecia. Incluye transporte, estación y un plan alternativo.'
 ],
 B1:[
 'Recuerda una ocasión en que la naturaleza cambió tu ánimo. Relaciónala con una zona del mapa.',
 'Elige una base para vivir un mes y explica qué ganarías y qué echarías de menos en otra región.',
 'Cuenta cómo imaginas tu primera semana con pocas horas de luz. Propón cambios concretos en tu rutina.',
 'Convierte una pausa de café apresurada en una fika social. Explica qué cambiarías y por qué.',
 'Una visita confunde una celebración de Dalarna con una costumbre de toda Suecia. Corrígela con amabilidad.',
 'Tu grupo quiere acampar cerca de una casa. Negocia una alternativa que respete a los residentes y el entorno.',
 'Diseña una ruta con ciudad y naturaleza. Defiende lo que dejas fuera por distancia o tiempo.',
 'Compara una pausa laboral en tu contexto con la idea de fika. Evita hablar como si todas las personas actuaran igual.',
 'Un compañero no quiere participar en Midsummer. Averigua sus motivos y mantén una invitación sin presionarlo.',
 'Vende tu propuesta de un mes en Suecia a alguien con prioridades distintas. Responde dos objeciones.'
 ],
 B2:[
 '¿Puede una pausa social mejorar el trabajo o convertirse en otra obligación? Formula una postura y un límite.',
 'Una empresa permite trabajar desde Estocolmo o desde una localidad del norte. Evalúa acceso, vínculos y estación.',
 'Si tu horario pudiera adaptarse a la luz estacional, ¿qué negociarías con un equipo internacional?',
 'Diseña una fika inclusiva para personas con restricciones alimentarias y distintas necesidades sociales. Prioriza sin imponer.',
 'Representa a un residente que cuestiona una campaña turística de Midsummer. Negocia una descripción más precisa.',
 'Visitantes y propietarios discrepan sobre un lugar de descanso. Propón un acuerdo sin confundir acceso a la naturaleza con ausencia de responsabilidades.',
 'El grupo busca norte, archipiélago y Costa Alta en pocos días. Reduce el itinerario y defiende el coste de oportunidad.',
 'Compara las condiciones que permiten disfrutar de la naturaleza en Suecia y en tu contexto, sin convertirlas en una clasificación de países.',
 'Una actividad anunciaba auroras garantizadas. Reclama una solución razonable sin exigir que alguien controle el clima.',
 'Presenta un proyecto de turismo de pequeña escala. Incluye beneficios, límites, desacuerdos y una revisión tras escuchar críticas.'
 ],
 C1:[
 'Analiza cómo una práctica como la fika puede crear pertenencia y también dejar a alguien fuera. Distingue intención y efecto.',
 'Debate quién decide qué significa vivir bien en el norte: residentes, empresas, visitantes o autoridades. Evita una voz única.',
 'Reformula una campaña que romantiza la oscuridad invernal sin reconocer necesidades cotidianas. Conserva su atractivo sin exagerar.',
 'Facilita una conversación laboral donde participar en la pausa parece voluntario, pero ausentarse tiene un coste social.',
 'Una marca utiliza referencias sámi sin consultar a nadie. Explica qué preguntas y acuerdos hacen falta antes de seguir.',
 'Media entre conservación, acceso y tranquilidad residencial. Separa derechos, expectativas y propuestas, sin inventar normas concretas.',
 'Defiende una ruta lenta ante un cliente que mide el valor del viaje por la cantidad de destinos. Cambia de estrategia si no funciona.',
 'Cuestiona la etiqueta «equilibrio escandinavo». ¿Qué oculta sobre personas, profesiones y condiciones materiales?',
 'Un interlocutor interpreta tu crítica al turismo como rechazo a los visitantes. Repara esa lectura sin retirar tu argumento.',
 'Redacta oralmente una recomendación pública que represente desacuerdos reales sobre turismo y vida cotidiana. Explicita sus límites.'
 ],
 C2:[
 'Desmonta con humor sutil el eslogan «En Suecia todo está en equilibrio» sin sustituirlo por otra caricatura.',
 'Compara dos relatos del mismo paisaje del norte: escenario turístico y territorio vivido. Examina lo que cada relato deja sin decir.',
 'Improvisa una respuesta diplomática a «La oscuridad te hace más creativo». Distingue metáfora, experiencia y afirmación comprobable.',
 'Haz que una invitación a la fika suene primero acogedora y luego coercitiva sin cambiar su contenido literal. Explica las señales pragmáticas.',
 'Discute quién puede hablar en nombre de una tradición. Formula una postura provisional sobre representación sámi y admite una objeción fuerte.',
 'Construye un acuerdo sobre acceso a un paraje cuya aparente neutralidad oculta costes distintos. Haz visibles esos costes sin bloquear el diálogo.',
 'Presenta la misma ruta a un residente escéptico y a un visitante entusiasta. Cambia el registro sin manipular los hechos.',
 '¿Cuándo una comparación cultural se convierte en un juicio moral disfrazado? Reformula dos ejemplos de la conversación.',
 'Un comentario irónico sobre la perfección sueca ofende a alguien. Repara la relación preservando el matiz y tu responsabilidad.',
 'Cierra una mesa de negociación con un consenso parcial: precisa lo acordado, lo irresuelto y quién queda todavía sin representación.'
 ]},
 argentina:{
 A1:[
 'Elige selva, ciudad o montaña. Di qué te gusta y pregunta al profesor: «¿Y tú?».',
 'Encuentra Buenos Aires y la Patagonia. ¿Adónde quieres ir? Señala norte, centro o sur.',
 'Elige entre un café de Buenos Aires y un paseo por los lagos. Di una razón sencilla.',
 'Prepara un encuentro: elige mate o agua, una comida y un lugar. Di qué quieres llevar.',
 'El profesor ofrece mate. Acepta o rechaza con amabilidad y pide agua si la prefieres.',
 'Organicen una comida: una persona quiere asado y otra verduras. Elijan algo para cada persona.',
 'Elige dos lugares de una misma zona. Di cómo vas y qué quieres hacer primero.',
 'Escucha «¿Vos querés mate?». Compáralo con «¿Tú quieres mate?». Responde usando la forma que prefieras.',
 'Tu amigo quiere fútbol y tú prefieres música. Propón una actividad y pregunta si le gusta.',
 'Cuenta tu viaje ideal con cuatro frases: lugar, comida, compañía y actividad. Termina con una invitación.'
 ],
 A2:[
 'Describe una semana ideal en Argentina: dos paisajes, una ciudad y las personas con quienes viajarías.',
 'Elige Iguazú o Mendoza. Explica qué vas a ver, qué ropa llevas y qué actividades prefieres.',
 'Compara una rutina en Buenos Aires con otra en un pueblo de las Pampas. ¿Qué haces por la mañana y por la noche?',
 'Organiza una reunión con mate: invita a dos personas y explica quién lleva cada cosa.',
 'Un anfitrión ofrece una comida que no quieres. Agradece, explica tu preferencia y pide otra opción.',
 'Preparen un asado con opciones para todos. Repartan compras, tareas y horarios.',
 'Quieres ver Iguazú y Ushuaia en un fin de semana. Mira el mapa, reconoce la distancia y cambia el plan.',
 'Transforma «tú eres, tienes, quieres» en «vos sos, tenés, querés» para reconocerlas. Cuenta qué formas usas tú.',
 'Empieza a llover durante tu visita a Córdoba. Cuenta el plan original y propone otro con música o una actividad bajo techo.',
 'Presenta tres días en una región: actividades, transporte y un encuentro social. Explica una decisión difícil.'
 ],
 B1:[
 'Cuenta un viaje en el que subestimaste una distancia. ¿Cómo usarías esa experiencia para elegir una región argentina?',
 'Relaciona dos paisajes del mapa con formas de vida distintas. Explica qué te resultaría familiar y qué sería nuevo.',
 'Compara Buenos Aires y la Patagonia para pasar un mes trabajando y descansando. Da ventajas y límites.',
 'Explica a un visitante cómo participarías en una ronda de mate sin asumir que todos tienen las mismas costumbres.',
 'Un amigo te invita a una sobremesa, pero tienes otro compromiso. Negocia una salida amable sin parecer desinteresado.',
 'El grupo quiere asado, música y excursión el mismo día. Acuerden prioridades y repartan responsabilidades.',
 'Diseña una ruta por Salta y Jujuy o por el Litoral. Explica qué descartarías para viajar sin prisa.',
 'Interpreta un diálogo con «vos». Compara el efecto de reconocer una variedad y tratar de imitarla.',
 'Alguien afirma que a todos los argentinos les gusta el fútbol. Responde con un ejemplo y una pregunta que abra la conversación.',
 'Recomienda una región a una persona con intereses opuestos a los tuyos. Justifica la recomendación y acepta una objeción.'
 ],
 B2:[
 '¿Qué se pierde cuando un país enorme se promociona con tres símbolos? Propón una imagen alternativa de Argentina.',
 'Una agencia ofrece Buenos Aires, Iguazú y Ushuaia en pocos días. Evalúa el itinerario y negocia una propuesta viable.',
 'Si tuvieras que vivir entre ciudad, sierras y Patagonia, ¿cómo pesarían los vínculos, el trabajo y la movilidad?',
 'Diseña una experiencia de mate para invitados que no quieren compartir recipiente. Conserva el encuentro sin imponer una costumbre.',
 'En un asado, alguien hace una broma que incomoda a un visitante. Intervén sin hablar por todas las personas presentes.',
 'Una visita a Mendoza debe combinar paisaje, agua y producción. Negocia las prioridades de visitantes y residentes.',
 'El presupuesto solo alcanza para una región lejana y otra cercana a tu base. Defiende tu elección sin inventar precios ni tiempos.',
 'Compara «¿Tú quieres?» y «¿Vos querés?» en distintos vínculos. ¿La variedad determina por sí sola la formalidad?',
 'Un anuncio vende Patagonia como un lugar vacío. Señala a quién borra esa imagen y ofrece otra formulación.',
 'Presenta una ruta que combine disfrute y respeto por la vida local. Justifica exclusiones y modifica una decisión ante una crítica.'
 ],
 C1:[
 'Analiza el contraste entre una identidad nacional compartida y las diferencias regionales. ¿Qué aporta y qué borra cada escala?',
 'Debate cómo las distancias condicionan quién puede viajar, trabajar y acceder a servicios. Distingue geografía de inevitabilidad.',
 'Compara dos relatos sobre mudarse de Buenos Aires a un pueblo: elección de vida y pérdida de oportunidades. Introduce matices.',
 'Explica cómo el mate puede construir intimidad sin convertir una práctica frecuente en prueba de autenticidad nacional.',
 'Un visitante interpreta la insistencia de un anfitrión como presión. Media entre hospitalidad, autonomía e intención.',
 'Diseña un acuerdo entre productores, residentes y visitantes de una zona vitivinícola. Explica qué desacuerdo no se resuelve con un eslogan.',
 'Una campaña privilegia destinos emblemáticos y deja fuera el centro. Defiende un criterio de selección transparente.',
 'Discute por qué «hablar correctamente» puede ocultar preferencias de variedad y prestigio. Usa el voseo como ejemplo concreto.',
 'Reformula una historia de inmigración que presenta la identidad argentina como exclusivamente europea. Reconoce pluralidad sin inventar datos.',
 'Modera una conversación sobre representación regional: sintetiza tres voces, identifica una ausencia y propone el siguiente paso.'
 ],
 C2:[
 'Responde a «Argentina se entiende en una sobremesa» como metáfora, como exageración y como afirmación problemática.',
 'Analiza qué mapa mental produce llamar al sur «el fin del mundo». Reformula la expresión desde la perspectiva de un residente.',
 'Defiende y después cuestiona la idealización de abandonar la capital. Mantén coherencia sin recurrir a un empate artificial.',
 'Improvisa una invitación al mate cuyo sentido cambie con la entonación: cercanía, compromiso e ironía. Haz explícitas las inferencias.',
 'Repara un malentendido cultural en el que ambas personas tienen razones defendibles. Evita el cierre fácil de «son costumbres».',
 'Negocia una descripción turística de la Patagonia que conserve fuerza literaria sin borrar habitantes ni conflictos de uso.',
 'Selecciona tres destinos para representar Argentina y defiende el sesgo inevitable de tu selección ante un comité crítico.',
 'Examina cómo voseo, registro y acento intervienen en juicios de autoridad. Distingue descripción lingüística y prejuicio social.',
 'Un chiste sobre fútbol recibe una lectura que no pretendías. Reformula sin culpar al oyente ni diluir toda la ironía.',
 'Presenta dos versiones de una misma recomendación: conversación íntima y foro público. Explica tus decisiones de voz, registro y precisión.'
 ]},
 espana:{
 A1:[
 'Elige playa, pueblo o ciudad. Di qué prefieres y pregunta al profesor por su opción.',
 'Encuentra Madrid, las Baleares y las Canarias. Elige un lugar y di si está en una isla o en la península.',
 'Compara una playa mediterránea y un paisaje del norte verde. ¿Qué tiempo te gusta?',
 'Elige una comida para compartir: tapas, arroz en Valencia o pintxos. Di qué quieres probar.',
 'Pide dos cosas en un mercado. El profesor es quien vende: saluda, pide y da las gracias.',
 'Una persona quiere museo y otra plaza. Elijan una actividad por la mañana y otra por la tarde.',
 'Organiza dos paradas cercanas en la península. Di primero, después y cómo quieres viajar.',
 'Escucha «¿Vosotros queréis?» y «¿Ustedes quieren?». Reconoce que ambas preguntas se dirigen a varias personas.',
 'El museo está cerrado. Elige mercado, parque o paseo y explica tu preferencia con una frase.',
 'Invita al profesor a tu viaje: di región, comida, transporte y actividad. Haz una pregunta sencilla.'
 ],
 A2:[
 'Describe qué buscas en unas vacaciones: clima, actividades y compañía. Elige una región que encaje.',
 'Compara Canarias y Baleares usando el mapa. Explica dónde están y por qué no puedes ir en tren desde la península.',
 'Compara un día en Madrid con otro en un pueblo de Galicia. Habla de horarios, transporte y actividades.',
 'Organiza una comida para compartir con tres gustos distintos. Explica qué pide cada persona y qué comparten.',
 'En el mercado, pide una recomendación regional. Pregunta qué lleva, cuánto quieres y cómo lo vas a compartir.',
 'Organicen una tarde con museo, plaza y cena. Acuerden un horario que funcione para el grupo sin asumir horarios universales.',
 'Diseña una ruta corta por Andalucía o el norte. Explica el orden de dos paradas y reserva tiempo para descansar.',
 'Reconoce tú, vosotros, usted y ustedes en cuatro saludos. Elige una forma para un amigo y otra para un grupo.',
 'En Cataluña ves un cartel en catalán y castellano. Pregunta con amabilidad por la información que necesitas.',
 'Recomienda tres días en una comunidad: paisaje, actividad cultural, comida y una alternativa si cambia el tiempo.'
 ],
 B1:[
 'Cuenta una experiencia en que una región fue distinta de la imagen que tenías de su país. Relaciónala con España.',
 'Elige tres zonas que muestren Mediterráneo, Atlántico e interior. Explica qué contraste te interesa más.',
 'Compara vivir en una ciudad conectada por tren y en un pueblo con menos conexiones. Da ejemplos de tu rutina.',
 'Diseña una comida compartida que respete preferencias y apetitos. Explica cómo decidirían el pedido y la cuenta.',
 'Un visitante identifica toda España con flamenco y paella. Amplía su imagen contextualizando Andalucía y Valencia.',
 'El grupo quiere completar demasiadas etapas del Camino. Negocien un ritmo que tenga en cuenta capacidades distintas.',
 'Construye una ruta peninsular y una extensión a una isla. Explica qué información de transporte necesitas verificar.',
 'Compara las formas de dirigirse a una persona y a un grupo. ¿Qué usas tú y qué otras formas necesitas reconocer?',
 'Una fiesta local cambia tu plan. Pregunta qué ocurre, reacciona y decide si participar o buscar tranquilidad.',
 'Presenta una España personal con tres regiones diferentes. Evita afirmar que una costumbre representa a todo el país.'
 ],
 B2:[
 '¿Cuándo la imagen turística ayuda a conocer una región y cuándo la reduce a un producto? Utiliza dos ejemplos del mapa.',
 'Diseña una propuesta que haga visibles islas, interior y norte. Explica qué criterio de representación usas.',
 'Si trabajaras a distancia, ¿preferirías una ciudad, un pueblo o una isla? Evalúa vivienda, vínculos y movilidad sin inventar precios.',
 'Negocia una cena entre personas que quieren compartir todo y otras que prefieren platos individuales. Propón una cuenta justa.',
 'Representa un encuentro en el que alguien espera flamenco en cualquier región. Corrige la expectativa conservando su entusiasmo.',
 'Residentes y visitantes discrepan sobre el uso nocturno de una plaza. Propón un acuerdo con límites claros.',
 'Una ruta promete península, Baleares y Canarias en muy pocos días. Rehazla explicando conexiones y renuncias.',
 'Contrasta vosotros y ustedes sin tratarlos como una frontera absoluta entre países. Considera territorio, interlocutores y registro.',
 'Una señal multilingüe provoca una queja de un visitante. Responde de forma práctica y reconoce el valor de las lenguas locales.',
 'Defiende una propuesta de visita que distribuya mejor el tiempo entre destinos. Responde a una objeción de residentes y otra de viajeros.'
 ],
 C1:[
 'Examina quién decide qué símbolos representan España. Distingue reconocimiento compartido, diversidad y simplificación comercial.',
 'Un mapa promocional omite Canarias, Ceuta y Melilla. Explica las consecuencias de esa selección y propone una solución legible.',
 'Compara el relato romántico del pueblo con las necesidades de quienes viven allí. Evita idealizar tanto ciudad como campo.',
 'Interpreta las normas implícitas de una mesa compartida: pedir, insistir, rechazar y pagar. ¿Qué necesita hacerse explícito?',
 'Media cuando un visitante interpreta el uso de una lengua cooficial como exclusión. Distingue percepción, intención y contexto.',
 'Facilita una negociación sobre una plaza donde se cruzan descanso, hostelería y convivencia. Reconoce costes desiguales.',
 'Selecciona una ruta cultural que no confunda patrimonio con escenario. Explica cómo incluirías voces locales.',
 'Analiza cómo cambian las relaciones al pasar de usted a tú o al elegir vosotros o ustedes. No reduzcas la cortesía a una conjugación.',
 'Un comentario humorístico sobre horarios se recibe como juicio cultural. Repara el efecto sin justificarte con un estereotipo.',
 'Presenta una recomendación editorial sobre diversidad regional y lingüística. Anticipa qué objeciones recibiría desde dos perspectivas.'
 ],
 C2:[
 'Analiza la ambigüedad de «la España auténtica». ¿Qué legitima, qué excluye y cómo preservarías su intención sin esa etiqueta?',
 'Argumenta cómo un recuadro cartográfico puede facilitar la lectura y a la vez alterar la percepción de centralidad y distancia.',
 'Reformula dos relatos incompatibles sobre una isla: paraíso disponible y lugar de vida. Conserva tensiones sin convertirlas en propaganda.',
 'Improvisa una discusión cortés sobre quién paga en la que las palabras dicen una cosa y las expectativas otra. Explica las implicaturas.',
 'Una conversación sobre lenguas se polariza. Resume la posición ajena de modo que se reconozca en ella antes de discrepar.',
 'Redacta oralmente un acuerdo sobre espacio público que no esconda bajo «convivencia» el desacuerdo sobre prioridades.',
 'Diseña un itinerario que cuestione la división entre centro y periferia. Defiende su narrativa y reconoce sus sesgos.',
 'Examina cómo una misma elección de tratamiento puede expresar respeto, distancia o ironía. Representa dos contextos verosímiles.',
 'Revisa una broma regional que depende de un estereotipo: decide si reformularla, contextualizarla o abandonarla y justifica el criterio.',
 'Cierra un debate sobre turismo e identidad con precisión: distingue consenso, concesión estratégica y desacuerdo pendiente.'
 ]}
};
