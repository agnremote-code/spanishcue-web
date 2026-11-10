// HR Crisis · the optional help tab. It starts collapsed and is never opened
// by the class: only the student opens it. For a Portuguese speaker it shows
// the situation in Portuguese, vocabulary, a grammar note and the false
// friends of the task. For any other native language it shows the same
// vocabulary explained in simple Spanish (no automatic translation).
// Each vocabulary row: [español, português, explicación en español fácil].

export const AYUDA = {
  'm1-recepcion': {
    situacao: 'É o seu primeiro dia. A recepcionista Marga está com três telefones tocando e não sabe quem você é. Apresente-se: nome, nacionalidade, cargo e por que você veio.',
    vocab: [['la recepcionista', 'a recepcionista', 'persona que atiende en la entrada'], ['el primer día', 'o primeiro dia', 'el día que empiezas a trabajar'], ['Recursos Humanos', 'Recursos Humanos (RH)', 'el departamento de las personas'], ['tener una cita', 'ter um horário marcado', 'tener una reunión a una hora']],
    gramatica: 'Para se apresentar: «Me llamo…» (não «me chamo»), «Soy de Brasil», «Soy brasileña». Para a profissão: «Trabajo en Recursos Humanos» ou «Soy la nueva responsable de…». Lembre: «yo» quase sempre se omite.',
    falsos: [['oficina', 'escritório (e não «oficina mecânica»)'], ['escritorio', 'mesa de trabalho (o móvel)']],
  },
  'm1-bruno': {
    situacao: 'Entrevista com Bruno, um candidato muito confiante. Faça perguntas diferentes: experiência, idiomas, salário, disponibilidade… Atenção: idade, filhos, religião ou estado civil são perguntas proibidas numa entrevista.',
    vocab: [['el candidato', 'o candidato', 'persona que quiere el puesto'], ['el puesto', 'a vaga / o cargo', 'el trabajo que ofrece la empresa'], ['la experiencia', 'a experiência', 'los trabajos que hiciste antes'], ['el sueldo / el salario', 'o salário', 'el dinero que cobras al mes'], ['¿Cuándo puede empezar?', 'Quando pode começar?', 'pregunta por la fecha de inicio']],
    gramatica: 'Perguntas em espanhol abrem com «¿» e fecham com «?». Com «tú»: «¿Dónde trabajas?». Com «usted» (mais formal, comum em entrevistas): «¿Dónde trabaja?», «¿Habla inglés?». Palavras interrogativas levam acento: qué, dónde, cuándo, cuánto, por qué.',
    falsos: [['contestar', 'responder (e não «contestar» no sentido de questionar)'], ['exquisito', 'delicioso; «esquisito» em espanhol é «raro»']],
  },
  'm1-lucia': {
    situacao: 'Entrevista com Lucía, uma candidata nervosa mas muito preparada. Você pode acalmá-la primeiro («Tranquila»). Depois, faça perguntas variadas.',
    vocab: [['estar nerviosa', 'estar nervosa', 'tener miedo o estrés antes de algo'], ['los estudios', 'a formação', 'lo que estudiaste'], ['los puntos fuertes', 'os pontos fortes', 'lo que haces muy bien'], ['los puntos débiles', 'os pontos fracos', 'lo que necesitas mejorar'], ['el preaviso', 'o aviso prévio', 'el tiempo para avisar antes de dejar un trabajo']],
    gramatica: '«Estar» para estados: «Está nerviosa». «Ser» para características: «Es organizada». Erro comum de brasileiros: «soy nerviosa» quando é um estado do momento.',
    falsos: [['embarazada', 'grávida (para «embaraçada» diga «avergonzada»)']],
  },
  'm1-decision': {
    situacao: 'Paloma pergunta quem vocês vão contratar. Escolha e explique por quê: compare os dois candidatos.',
    vocab: [['contratar', 'contratar', 'dar trabajo a alguien'], ['elegir', 'escolher', 'tomar una opción'], ['la decisión', 'a decisão', 'lo que eliges'], ['más… que / menos… que', 'mais… que / menos… que', 'para comparar']],
    gramatica: 'Comparativos: «Lucía tiene más experiencia que Bruno», «Bruno es menos organizado que Lucía», «mejor que / peor que». Para justificar: «porque…», «por eso…». «Elegir» é irregular: elijo, eliges, elige.',
    falsos: [['propina', 'gorjeta (e não «propina» no sentido de suborno)']],
  },
  'm2-correo': {
    situacao: 'Sonia mandou um e-mail cheio de reclamações misturadas com outras coisas. Marque só os problemas reais de trabalho e responda com empatia.',
    vocab: [['la queja', 'a reclamação', 'cuando dices que algo está mal'], ['quejarse', 'reclamar', 'decir que algo te molesta'], ['estar harta', 'estar farta', 'estar muy cansada de algo'], ['las horas extra', 'as horas extras', 'horas de trabajo además del horario']],
    gramatica: 'Empatia em espanhol: «Entiendo…», «Lo siento mucho», «Tienes razón». Em níveis mais altos: «Entiendo que estés cansada» (subjuntivo depois de «entiendo que» quando reconhece o sentimento).',
    falsos: [['molestar', 'incomodar (igual), mas «molestia» é «incômodo», não «doença»']],
  },
  'm2-ivan': {
    situacao: 'Iván toca trompete no escritório. Peça com educação para ele parar e, se puder, ofereça uma alternativa.',
    vocab: [['por favor', 'por favor', 'para pedir con educación'], ['molestar', 'incomodar', 'hacer que otra persona esté mal'], ['los auriculares', 'os fones de ouvido', 'aparato para escuchar música solo tú'], ['¿Te importa…?', 'Você se importa…?', 'forma amable de pedir algo']],
    gramatica: 'Negação: «No toques la trompeta aquí» (imperativo negativo = subjuntivo: no toques, no hagas, no pongas). Mais suave: «¿Puedes…?», «¿Podrías…?» (condicional = mais educado).',
    falsos: [['tirar', 'jogar fora; para «tirar uma foto» diga «sacar / hacer una foto»']],
  },
  'm2-cocina': {
    situacao: 'Rafa esquenta peixe no micro-ondas e Carmen escondeu o cabo. Os dois estão brigando. Faça a mediação: escute os dois e proponha um acordo.',
    vocab: [['el microondas', 'o micro-ondas', 'aparato para calentar comida'], ['calentar', 'esquentar', 'poner algo caliente'], ['el olor', 'o cheiro', 'lo que notas con la nariz'], ['el acuerdo', 'o acordo', 'una solución que aceptan todos'], ['mediar', 'mediar', 'ayudar a dos personas en conflicto']],
    gramatica: 'Para propor: «Propongo que…» + subjuntivo («propongo que calentéis el pescado a las tres») ou mais simples: «Podemos…», «Vamos a…». Em espanhol «vosotros» é usado na Espanha para falar com vários colegas.',
    falsos: [['acordar', 'entrar em acordo (e não «acordar» do sono = «despertarse»)']],
  },
  'm3-nomina': {
    situacao: 'O holerite (a «nómina») de Jimena tem erros. Marque as linhas erradas e explique a Don Tomás os números corretos.',
    vocab: [['la nómina', 'o holerite / a folha de pagamento', 'el documento con tu salario del mes'], ['el salario base', 'o salário-base', 'el dinero fijo del mes'], ['la retención', 'o desconto (imposto retido)', 'el dinero que se paga a Hacienda'], ['la fecha de pago', 'a data de pagamento', 'el día en que cobras'], ['mil trescientos euros', 'mil e trezentos euros', '1.300 €']],
    gramatica: 'Números: 1.300 = «mil trescientos» (não «um mil»). 15 = quince, 20 = veinte, 300 = trescientos, 500 = quinientos. Em espanhol os milhares usam ponto (1.300) e os decimais vírgula (13,50), como no Brasil.',
    falsos: [['cobrar', 'receber o salário (e também «cobrar» de alguém)'], ['salir', 'sair; «la nómina sale» = «o holerite é emitido»']],
  },
  'm3-jimena': {
    situacao: 'Jimena recebeu 13 euros em vez de 1.300. Peça desculpas, explique o erro e diga quando ela vai receber.',
    vocab: [['pedir disculpas', 'pedir desculpas', 'decir «lo siento»'], ['el alquiler', 'o aluguel', 'el dinero de la casa cada mes'], ['la transferencia', 'a transferência', 'enviar dinero de un banco a otro'], ['recibir', 'receber', 'llegar a ti algo']],
    gramatica: 'Futuro próximo: «vas a recibir el dinero el viernes» (ir + a + infinitivo), igual ao português «vai receber». Futuro simples: «recibirás». Datas: «el viernes», «el día 15», «antes del día cinco».',
    falsos: [['pronto', 'logo / cedo (e não «pronto» = «listo»)']],
  },
  'm3-correo': {
    situacao: 'Escreva um e-mail formal ao banco pedindo uma transferência urgente com valor, pessoa e data.',
    vocab: [['Estimados señores:', 'Prezados senhores,', 'saludo formal de un correo'], ['solicitar', 'solicitar', 'pedir de forma formal'], ['urgente', 'urgente', 'que se necesita ya'], ['Atentamente', 'Atenciosamente', 'despedida formal']],
    gramatica: 'Registro formal: «usted / ustedes» com verbos na terceira pessoa: «Les escribo porque…», «Les agradecería que…». Depois da saudação formal usa-se dois-pontos (Estimados señores:).',
    falsos: [['firma', 'assinatura (para «firma» = empresa, diga «empresa»)']],
  },
  'm4-ordenar': {
    situacao: 'A empresa vai unir dois departamentos e mudar o horário. Coloque os passos da comunicação na ordem certa.',
    vocab: [['la reestructuración', 'a reestruturação', 'cambio en la organización de la empresa'], ['el anuncio', 'o comunicado', 'mensaje para todos'], ['los jefes de equipo', 'os líderes de equipe', 'personas que dirigen un grupo'], ['primero / después / al final', 'primeiro / depois / no final', 'palabras para ordenar']],
    gramatica: 'Conectores de ordem: «primero», «después», «luego», «al final / por último». Atenção: «después» (não «depois»).',
    falsos: [['luego', 'depois / em seguida (e não «logo» = «enseguida»)']],
  },
  'm4-anuncio': {
    situacao: 'Anuncie as mudanças à equipe: Vendas e Marketing vão ser uma só equipe, novo horário e mudança de mesas. Explique por quê.',
    vocab: [['el equipo', 'a equipe', 'grupo de personas que trabajan juntas'], ['el horario flexible', 'o horário flexível', 'puedes elegir la hora de entrar'], ['a partir del lunes', 'a partir de segunda-feira', 'desde el lunes'], ['nadie pierde su puesto', 'ninguém perde o emprego', 'no hay despidos']],
    gramatica: 'Futuro: «vamos a tener», «tendremos», «habrá» (= «haverá»). Os dias da semana em espanhol: lunes, martes, miércoles, jueves, viernes (não «segunda-feira»).',
    falsos: [['despedir', 'demitir (e também «despedirse» = dizer tchau)']],
  },
  'm4-rumor': {
    situacao: 'Nacho leu no WhatsApp que todos vão ser demitidos. Acalme-o e diga a verdade.',
    vocab: [['el rumor', 'o boato', 'una noticia que no es segura'], ['despedir', 'demitir', 'quitar el trabajo a alguien'], ['el despido', 'a demissão', 'cuando la empresa te quita el trabajo'], ['¡Tranquilo!', 'Calma!', 'para calmar a alguien']],
    gramatica: 'Negação dupla é correta em espanhol: «No vamos a despedir a nadie» (como «não vamos demitir ninguém»). «Nadie», «nada», «nunca».',
    falsos: [['ligar', 'paquerar (para «ligar para alguém» diga «llamar»)']],
  },
  'm5-informe': {
    situacao: 'Olga, diretora financeira, quer saber o que aconteceu nesta semana. Conte usando o passado e números.',
    vocab: [['la semana pasada / esta semana', 'a semana passada / esta semana', 'cuándo pasó'], ['hubo', 'houve', 'pasado de «hay»'], ['resolver', 'resolver', 'encontrar la solución'], ['el informe', 'o relatório', 'documento con datos']],
    gramatica: 'Pretérito indefinido (= pretérito perfeito do português): «hablé», «hice», «hubo», «pagamos». Pretérito perfeito composto espanhol, comum na Espanha para «esta semana»: «he hablado», «hemos resuelto».',
    falsos: [['acabar de', 'acabar de (igual): «acabo de hablar» = «acabei de falar»']],
  },
  'm5-propuesta': {
    situacao: 'Hugo pede uma proposta para a equipe ficar mais satisfeita. Escolha uma e defenda.',
    vocab: [['proponer', 'propor', 'dar una idea'], ['la propuesta', 'a proposta', 'la idea que das'], ['el teletrabajo', 'o home office', 'trabajar desde casa'], ['la formación', 'o treinamento', 'cursos para aprender']],
    gramatica: 'Condicional para sugerir: «yo propondría», «sería mejor», «podríamos» (= proporia, seria, poderíamos). Igual ao português, só muda a terminação: -ría.',
    falsos: [['exitoso', 'bem-sucedido; «éxito» = sucesso (e não «saída» = «salida»)']],
  },
  'm5-pregunta': {
    situacao: 'Ramiro quer cortar 20% do orçamento de pessoal e pergunta quem demitir. Responda com firmeza e proponha alternativas.',
    vocab: [['recortar', 'cortar', 'reducir dinero'], ['el presupuesto', 'o orçamento', 'el dinero previsto'], ['las vacantes', 'as vagas abertas', 'puestos sin persona'], ['estar de acuerdo', 'concordar', 'pensar lo mismo']],
    gramatica: '«Estar de acuerdo» (nunca «ser de acuerdo»). Para discordar com educação: «No estoy de acuerdo porque…», «Entiendo su posición, pero…».',
    falsos: [['largo', 'comprido (e não «largo» = «ancho»)']],
  },
  'm6-crisis': {
    situacao: 'Crise final: o sistema pagou o salário duas vezes, Bruno publicou que a empresa vai fechar e um jornalista está na recepção. Marque o que é urgente e explique ao diretor o que aconteceu.',
    vocab: [['urgente', 'urgente', 'hay que hacerlo ya'], ['pagar dos veces', 'pagar duas vezes', 'el mismo pago repetido'], ['el periodista', 'o jornalista', 'persona que escribe noticias'], ['cerrar', 'fechar', 'terminar la empresa']],
    gramatica: 'Para narrar: «A las nueve el sistema pagó…», «Después, Bruno publicó…». Imperfeito para descrever o contexto: «El periodista esperaba en recepción».',
    falsos: [['cerrar', 'fechar (e não «cerrar» = «serrar» madeira)']],
  },
  'm6-plan': {
    situacao: 'Organize o plano de crise em ordem de prioridade e explique.',
    vocab: [['bloquear', 'bloquear', 'parar algo para que no funcione'], ['la prioridad', 'a prioridade', 'lo más importante'], ['el comunicado', 'o comunicado', 'mensaje oficial'], ['devolver', 'devolver', 'dar otra vez el dinero']],
    gramatica: 'Futuro: «bloquearemos», «hablaremos», «enviaremos» (= bloquearemos, falaremos, enviaremos). Igual ao português!',
    falsos: [['quitar', 'tirar / remover (e não «quitar» uma dívida = «saldar»)']],
  },
  'm6-mensaje': {
    situacao: 'Fale para a empresa toda: o que aconteceu, o que vão fazer e agradeça a equipe.',
    vocab: [['agradecer', 'agradecer', 'decir gracias'], ['el error', 'o erro', 'algo que salió mal'], ['la confianza', 'a confiança', 'creer en alguien'], ['a todos', 'a todos', 'para hablar al grupo']],
    gramatica: 'Mensagem completa: passado (o que aconteceu: «pagó», «publicó») + futuro (o plano: «vamos a…», «propondremos») + agradecimento («Gracias por…»). No C1: subjuntivo («Quiero que sepáis…»).',
    falsos: [['presunto', 'suposto (e não «presunto» = «jamón»)']],
  },
};
