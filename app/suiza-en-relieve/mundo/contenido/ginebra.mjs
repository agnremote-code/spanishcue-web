// Ginebra y el lago Lemán · an interpreter at the United Nations, a paddle steamer on the
// lake, a watchmaker's workshop, the Lavaux vineyards and a cheese dairy in Gruyères. Five
// places, four levels each (A0, A1, A2, B1). Every level is written on its own.
export default {
  id: 'ginebra',
  spots: [
    // ------------------------------------------------------------ the United Nations
    {
      id: 'onu',
      name: { es: 'La sede de la ONU', en: 'The United Nations building' },
      who: { name: 'Amélie', role: { es: 'intérprete', en: 'interpreter' } },
      levels: {
        A0: {
          scene: { es: 'Es un edificio grande y blanco. Hay muchas banderas de colores. Amélie es intérprete. Tiene un traje gris y unos auriculares.', en: 'It is a big white building. There are lots of colourful flags. Amélie is an interpreter. She has a grey suit and headphones.' },
          opener: { es: '¡Hola! Soy Amélie. Hablo cinco idiomas. ¿Cuántos idiomas hablas tú?', en: 'Hello! I am Amélie. I speak five languages. How many languages do you speak?' },
          decide: {
            ask: { es: '¿Qué dices?', en: 'What do you say?' },
            options: [
              { say: { es: 'Hablo dos idiomas.', en: 'I speak two languages.' }, then: { es: 'Amélie dice: «¡Muy bien! ¿Cuáles?».', en: 'Amélie says: “Very good! Which ones?”' } },
              { say: { es: 'Hablo un poco de español.', en: 'I speak a little Spanish.' }, then: { es: 'Amélie sonríe: «¡Y muy bien!».', en: 'Amélie smiles: “And very well!”' } },
              { say: { es: '¿Cinco? ¡Qué difícil!', en: 'Five? How difficult!' }, then: { es: 'Amélie ríe: «Un poco. Estudio todos los días».', en: 'Amélie laughs: “A little. I study every day.”' } },
            ],
          },
          twist: { es: 'Amélie te da unos auriculares. Escuchas una reunión en español. ¿Entiendes?', en: 'Amélie gives you some headphones. You listen to a meeting in Spanish. Do you understand?' },
          questions: [
            { q: { es: '¿Cuántos idiomas hablas?', en: 'How many languages do you speak?' }, help: { es: 'Hablo uno / dos / tres.', en: 'I speak one / two / three.' }, follow: [{ es: '¿Cuáles?', en: 'Which ones?' }, { es: '¿Cuál es difícil?', en: 'Which is hard?' }] },
            { q: { es: '¿Te gustan las banderas?', en: 'Do you like flags?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Cómo es la bandera de tu país?', en: 'What is your country’s flag like?' }, { es: '¿De qué color es?', en: 'What colour is it?' }] },
            { q: { es: '¿Usas auriculares?', en: 'Do you use headphones?' }, help: { es: 'Sí, siempre. / No.', en: 'Yes, always. / No.' }, follow: [{ es: '¿Qué escuchas?', en: 'What do you listen to?' }, { es: '¿Dónde?', en: 'Where?' }] },
            { q: { es: '¿Estudias todos los días?', en: 'Do you study every day?' }, help: { es: 'Sí. / No, a veces.', en: 'Yes. / No, sometimes.' }, follow: [{ es: '¿Qué estudias?', en: 'What do you study?' }, { es: '¿Cuánto tiempo?', en: 'How long?' }] },
          ],
          words: [{ es: 'el idioma', en: 'the language' }, { es: 'la intérprete', en: 'the (female) interpreter' }, { es: 'la bandera', en: 'the flag' }, { es: 'los auriculares', en: 'the headphones' }, { es: 'la reunión', en: 'the meeting' }],
        },
        A1: {
          scene: { es: 'Ginebra tiene más de treinta organizaciones internacionales. En la sede de la ONU hay reuniones todos los días en seis idiomas: árabe, chino, español, francés, inglés y ruso. Amélie trabaja en una cabina pequeña de cristal. Escucha a un diplomático en inglés y, al mismo tiempo, lo dice en español.', en: 'Geneva has more than thirty international organisations. At the UN headquarters there are meetings every day in six languages: Arabic, Chinese, Spanish, French, English and Russian. Amélie works in a small glass booth. She listens to a diplomat in English and, at the same time, says it in Spanish.' },
          opener: { es: 'Es un trabajo muy cansado. Trabajamos en parejas: cada treinta minutos cambiamos, porque la cabeza no aguanta más. Lo más difícil son los chistes. Un diplomático cuenta un chiste en inglés y yo tengo dos segundos para hacerlo gracioso en español. A veces digo: «El señor cuenta un chiste. Por favor, rían». ¿Te gustaría trabajar con idiomas?', en: 'It’s a very tiring job. We work in pairs: every thirty minutes we swap, because your head can’t take any more. The hardest thing is jokes. A diplomat tells a joke in English and I have two seconds to make it funny in Spanish. Sometimes I say: “The gentleman is telling a joke. Please laugh.” Would you like to work with languages?' },
          decide: {
            ask: { es: 'Un diplomático habla muy rápido. Amélie no entiende una palabra. ¿Qué hace?', en: 'A diplomat speaks very fast. Amélie doesn’t understand a word. What does she do?' },
            options: [
              { say: { es: 'Le pide ayuda a su compañero.', en: 'She asks her partner for help.' }, then: { es: 'Su compañero escribe la palabra en un papel. Amélie la dice. Nadie nota nada.', en: 'Her partner writes the word on a piece of paper. Amélie says it. Nobody notices anything.' } },
              { say: { es: 'Dice la idea general.', en: 'She says the general idea.' }, then: { es: 'Funciona. Amélie dice: «Lo importante es la idea, no cada palabra».', en: 'It works. Amélie says: “What matters is the idea, not every word.”' } },
              { say: { es: 'Pide al diplomático hablar más despacio.', en: 'She asks the diplomat to speak more slowly.' }, then: { es: 'El presidente de la reunión lo pide. El diplomático, un poco avergonzado, habla más despacio.', en: 'The chair of the meeting asks him. The diplomat, a little embarrassed, speaks more slowly.' } },
            ],
          },
          twist: { es: 'En la cafetería, un diplomático le pregunta a Amélie qué opina de su discurso. Los intérpretes no pueden dar su opinión. ¿Qué le dice?', en: 'In the cafeteria, a diplomat asks Amélie what she thinks of his speech. Interpreters can’t give their opinion. What does she say?' },
          questions: [
            { q: { es: '¿Qué idioma te gustaría hablar perfectamente?', en: 'Which language would you like to speak perfectly?' }, help: { es: 'Me gustaría hablar…', en: 'I’d like to speak…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Lo estudias?', en: 'Do you study it?' }] },
            { q: { es: '¿Entiendes los chistes en otro idioma?', en: 'Do you understand jokes in another language?' }, help: { es: 'A veces. / Casi nunca.', en: 'Sometimes. / Almost never.' }, follow: [{ es: '¿Sabes un chiste en español?', en: 'Do you know a joke in Spanish?' }, { es: '¿Lo cuentas?', en: 'Will you tell it?' }] },
            { q: { es: '¿Qué trabajo es muy cansado?', en: 'Which job is very tiring?' }, help: { es: 'Creo que…', en: 'I think…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tu trabajo es cansado?', en: 'Is your job tiring?' }] },
            { q: { es: '¿Trabajas mejor solo o en pareja?', en: 'Do you work better alone or in pairs?' }, help: { es: 'Solo. / En pareja. / En grupo.', en: 'Alone. / In pairs. / In a group.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Con quién te gusta trabajar?', en: 'Who do you like working with?' }] },
          ],
          words: [{ es: 'la cabina', en: 'the booth' }, { es: 'el diplomático', en: 'the diplomat' }, { es: 'el chiste', en: 'the joke' }, { es: 'aguantar', en: 'to bear / take' }, { es: 'el discurso', en: 'the speech' }],
        },
        A2: {
          scene: { es: 'Hoy hay una reunión muy tensa sobre el agua de un río que comparten dos países. El representante de uno de ellos usa una palabra muy ofensiva para hablar del otro país. Amélie tiene que traducirla en directo. Si la traduce exactamente, la reunión puede terminar mal. Si la suaviza, no es fiel al discurso.', en: 'Today there’s a very tense meeting about the water of a river shared by two countries. One country’s representative uses a very offensive word to talk about the other country. Amélie has to translate it live. If she translates it exactly, the meeting could end badly. If she softens it, she isn’t faithful to the speech.' },
          opener: { es: 'Nos enseñan que el intérprete es invisible: no añade nada, no quita nada. Pero en la cabina, con dos segundos para decidir, no es tan fácil. Una palabra mal elegida puede romper meses de negociación. Una vez una colega suavizó un insulto y después la acusaron de cambiar la historia. ¿Qué harías tú en mi lugar?', en: 'They teach us that the interpreter is invisible: adds nothing, removes nothing. But in the booth, with two seconds to decide, it’s not that simple. A badly chosen word can break months of negotiation. Once a colleague softened an insult and was later accused of changing history. What would you do in my place?' },
          decide: {
            ask: { es: '¿Qué hace Amélie?', en: 'What does Amélie do?' },
            options: [
              { say: { es: 'Traduce la palabra exacta.', en: 'She translates the exact word.' }, then: { es: 'El otro representante se levanta y sale de la sala. La reunión se suspende hasta mañana.', en: 'The other representative stands up and leaves the room. The meeting is suspended until tomorrow.' } },
              { say: { es: 'Usa una palabra un poco más suave.', en: 'She uses a slightly softer word.' }, then: { es: 'La reunión sigue. Pero esa noche Amélie no puede dormir: ¿hizo bien?', en: 'The meeting continues. But that night Amélie can’t sleep: did she do the right thing?' } },
              { say: { es: 'Dice: «El representante usa una palabra ofensiva» y la traduce.', en: 'She says: “The representative uses an offensive word” and translates it.' }, then: { es: 'Todos entienden la gravedad. El presidente pide calma. La reunión sigue, más tensa.', en: 'Everyone understands how serious it is. The chair calls for calm. The meeting continues, tenser.' } },
            ],
          },
          twist: { es: 'Un periodista le ofrece dinero a Amélie para contar lo que se dijo en una reunión secreta. ¿Qué hace?', en: 'A journalist offers Amélie money to tell what was said in a secret meeting. What does she do?' },
          questions: [
            { q: { es: '¿Alguna vez dijiste algo de forma más suave para evitar un problema?', en: 'Have you ever said something more gently to avoid a problem?' }, help: { es: 'Sí, a mi… / No, siempre digo la verdad.', en: 'Yes, to my… / No, I always tell the truth.' }, follow: [{ es: '¿Funcionó?', en: 'Did it work?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Es mejor ser exacto o ser amable?', en: 'Is it better to be exact or to be kind?' }, help: { es: 'Depende de… / Prefiero…', en: 'It depends on… / I prefer…' }, follow: [{ es: '¿En el trabajo también?', en: 'At work too?' }, { es: '¿Y con la familia?', en: 'And with family?' }] },
            { q: { es: '¿Usaste un traductor automático y salió mal?', en: 'Have you used a machine translator and it went wrong?' }, help: { es: 'Sí, una vez tradujo… / No.', en: 'Yes, once it translated… / No.' }, follow: [{ es: '¿Fue gracioso?', en: 'Was it funny?' }, { es: '¿Confías en ellos?', en: 'Do you trust them?' }] },
            { q: { es: '¿Sabes guardar un secreto?', en: 'Can you keep a secret?' }, help: { es: 'Sí, siempre. / Me cuesta.', en: 'Yes, always. / I find it hard.' }, follow: [{ es: '¿Alguien contó un secreto tuyo?', en: 'Has someone told a secret of yours?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
          ],
          words: [{ es: 'tenso', en: 'tense' }, { es: 'ofensivo', en: 'offensive' }, { es: 'suavizar', en: 'to soften' }, { es: 'fiel', en: 'faithful' }, { es: 'la negociación', en: 'the negotiation' }],
        },
        B1: {
          scene: { es: 'La ONU está probando un sistema de interpretación con inteligencia artificial para las reuniones menos importantes. Es rápido, barato y mejora cada mes. Amélie, con veinte años de experiencia, forma parte del grupo que evalúa la prueba. Su informe puede decidir si la mitad de los intérpretes pierde su trabajo en cinco años.', en: 'The UN is testing an artificial-intelligence interpreting system for less important meetings. It’s fast, cheap and gets better every month. Amélie, with twenty years’ experience, is part of the group evaluating the trial. Her report may decide whether half the interpreters lose their jobs within five years.' },
          opener: { es: 'Tengo que ser honesta: la máquina traduce bien el noventa por ciento de las frases. Falla en el diez por ciento restante: la ironía, el tono, lo que no se dice. Y en diplomacia, ese diez por ciento es a veces lo único que importa. Pero si defiendo a los intérpretes, parece que defiendo mi sueldo. Y si apoyo la máquina, traiciono a mis colegas. ¿Cómo se evalúa con justicia algo que te afecta directamente?', en: 'I have to be honest: the machine translates ninety per cent of sentences well. It fails on the remaining ten per cent: irony, tone, what’s left unsaid. And in diplomacy, that ten per cent is sometimes the only thing that matters. But if I defend interpreters, it looks like I’m defending my salary. And if I back the machine, I betray my colleagues. How do you fairly evaluate something that affects you directly?' },
          decide: {
            ask: { es: '¿Qué debería recomendar Amélie?', en: 'What should Amélie recommend?' },
            options: [
              { say: { es: 'Usar la máquina en reuniones técnicas y personas en las negociaciones.', en: 'Use the machine in technical meetings and people in negotiations.' }, then: { es: 'Es la opción más aceptada. Muchos intérpretes jóvenes, sin embargo, ven menos oportunidades para empezar.', en: 'It’s the most accepted option. Many young interpreters, however, see fewer chances to get started.' } },
              { say: { es: 'Que los intérpretes supervisen y corrijan a la máquina.', en: 'That interpreters supervise and correct the machine.' }, then: { es: 'Funciona, pero el trabajo cambia: menos creatividad y más revisión. Algunos colegas lo odian.', en: 'It works, but the job changes: less creativity, more checking. Some colleagues hate it.' } },
              { say: { es: 'Pedir que la evaluación la haga alguien externo.', en: 'Ask for the evaluation to be done by someone external.' }, then: { es: 'Contratan a una universidad. Su informe dice casi lo mismo que habría dicho Amélie, pero nadie duda de él.', en: 'They hire a university. Its report says almost the same as Amélie would have, but nobody doubts it.' } },
            ],
          },
          twist: { es: 'Un país pobre dice que, gracias a la máquina, por fin podrá participar en reuniones en su propio idioma, que no es oficial en la ONU. ¿Cambia eso el debate?', en: 'A poor country says that, thanks to the machine, it will finally be able to take part in meetings in its own language, which isn’t official at the UN. Does that change the debate?' },
          questions: [
            { q: { es: '¿Qué trabajos crees que una máquina nunca podrá hacer bien?', en: 'Which jobs do you think a machine will never do well?' }, help: { es: 'Creo que… porque requiere…', en: 'I think… because it requires…' }, follow: [{ es: '¿Y el tuyo?', en: 'And yours?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
            { q: { es: '¿Es posible ser objetivo cuando una decisión te afecta?', en: 'Is it possible to be objective when a decision affects you?' }, help: { es: 'Es difícil, pero… / No, porque…', en: 'It’s hard, but… / No, because…' }, follow: [{ es: '¿Te pasó?', en: 'Has it happened to you?' }, { es: '¿Qué hiciste?', en: 'What did you do?' }] },
            { q: { es: '¿La tecnología ayuda a que más personas participen o crea nuevas desigualdades?', en: 'Does technology help more people take part or create new inequalities?' }, help: { es: 'Las dos cosas: por un lado… por otro…', en: 'Both: on the one hand… on the other…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Quién queda fuera?', en: 'Who is left out?' }] },
            { q: { es: '¿Qué se pierde cuando no hay una persona en medio de una conversación?', en: 'What is lost when there’s no person in the middle of a conversation?' }, help: { es: 'Se pierde…', en: '… is lost.' }, follow: [{ es: '¿Lo notaste alguna vez?', en: 'Have you ever noticed it?' }, { es: '¿Con qué servicio?', en: 'With which service?' }] },
          ],
          words: [{ es: 'evaluar', en: 'to evaluate' }, { es: 'la prueba', en: 'the trial' }, { es: 'la ironía', en: 'irony' }, { es: 'restante', en: 'remaining' }, { es: 'supervisar', en: 'to supervise' }],
        },
      },
    },
    // ------------------------------------------------------------ the lake steamer
    {
      id: 'lago',
      name: { es: 'El barco del lago Lemán', en: 'The Lake Geneva steamer' },
      who: { name: 'Jean-Luc', role: { es: 'capitán del barco', en: 'boat captain' } },
      levels: {
        A0: {
          scene: { es: 'Es un lago grande y azul. Hay un barco blanco y viejo. En el agua hay una fuente muy alta. Jean-Luc es capitán. Tiene una barba blanca y una gorra azul.', en: 'It is a big blue lake. There is an old white boat. In the water there is a very tall fountain. Jean-Luc is a captain. He has a white beard and a blue cap.' },
          opener: { es: '¡Bienvenido! Soy Jean-Luc, el capitán. Este barco tiene cien años. ¿Subes?', en: 'Welcome! I am Jean-Luc, the captain. This boat is a hundred years old. Will you get on?' },
          decide: {
            ask: { es: '¿Dónde te sientas?', en: 'Where do you sit?' },
            options: [
              { say: { es: 'Arriba, al sol.', en: 'Upstairs, in the sun.' }, then: { es: 'Ves las montañas y el agua. ¡Qué bonito!', en: 'You see the mountains and the water. How beautiful!' } },
              { say: { es: 'Abajo, en el restaurante.', en: 'Downstairs, in the restaurant.' }, then: { es: 'Pides una sopa y miras por la ventana.', en: 'You order a soup and look out of the window.' } },
              { say: { es: 'Con el capitán.', en: 'With the captain.' }, then: { es: 'Jean-Luc dice: «¡Toca la campana!». Suena muy fuerte.', en: 'Jean-Luc says: “Ring the bell!” It sounds very loud.' } },
            ],
          },
          twist: { es: 'El viento lleva el agua de la fuente sobre el barco. ¡Estás mojado! ¿Qué haces?', en: 'The wind blows the fountain’s water over the boat. You are wet! What do you do?' },
          questions: [
            { q: { es: '¿Te gustan los barcos?', en: 'Do you like boats?' }, help: { es: 'Sí. / No, me mareo.', en: 'Yes. / No, I get seasick.' }, follow: [{ es: '¿Viajas en barco?', en: 'Do you travel by boat?' }, { es: '¿Adónde?', en: 'Where to?' }] },
            { q: { es: '¿Hay un lago cerca de tu casa?', en: 'Is there a lake near your house?' }, help: { es: 'Sí. / No, hay mar. / No.', en: 'Yes. / No, there is the sea. / No.' }, follow: [{ es: '¿Cómo se llama?', en: 'What is it called?' }, { es: '¿Vas mucho?', en: 'Do you go often?' }] },
            { q: { es: '¿Te gustan las cosas viejas?', en: 'Do you like old things?' }, help: { es: 'Sí, mucho. / No, prefiero las nuevas.', en: 'Yes, a lot. / No, I prefer new ones.' }, follow: [{ es: '¿Tienes algo viejo?', en: 'Do you have something old?' }, { es: '¿Qué es?', en: 'What is it?' }] },
            { q: { es: '¿Prefieres el sol o la sombra?', en: 'Do you prefer the sun or the shade?' }, help: { es: 'El sol. / La sombra.', en: 'The sun. / The shade.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y en verano?', en: 'And in summer?' }] },
          ],
          words: [{ es: 'el lago', en: 'the lake' }, { es: 'el barco', en: 'the boat' }, { es: 'el capitán', en: 'the captain' }, { es: 'la campana', en: 'the bell' }, { es: 'mojado', en: 'wet' }],
        },
        A1: {
          scene: { es: 'El barco de vapor sale de Ginebra hacia Lausana. Tarda casi cuatro horas. En la orilla sur está Francia; en la orilla norte, Suiza. En el centro de Ginebra se ve el Jet d’Eau, una fuente de ciento cuarenta metros. Jean-Luc es capitán desde hace veinticinco años.', en: 'The steamboat leaves Geneva for Lausanne. It takes almost four hours. On the south shore is France; on the north shore, Switzerland. In the centre of Geneva you can see the Jet d’Eau, a fountain a hundred and forty metres high. Jean-Luc has been a captain for twenty-five years.' },
          opener: { es: 'Este barco es de 1915. Todavía funciona con una máquina de vapor, como un tren antiguo. Los turistas bajan a ver la máquina: es enorme y brilla. Yo conozco este lago como mi casa: cada viento tiene un nombre. La bise viene del norte y es fría; cuando sopla, el lago parece el mar. ¿Te gusta viajar despacio?', en: 'This boat is from 1915. It still runs on a steam engine, like an old train. Tourists go down to see the engine: it’s huge and it shines. I know this lake like my home: every wind has a name. The bise comes from the north and it’s cold; when it blows, the lake looks like the sea. Do you like travelling slowly?' },
          decide: {
            ask: { es: 'Empieza a soplar la bise. Hay olas grandes. ¿Qué hace Jean-Luc?', en: 'The bise starts to blow. There are big waves. What does Jean-Luc do?' },
            options: [
              { say: { es: 'Pide a los pasajeros entrar al salón.', en: 'He asks the passengers to go into the lounge.' }, then: { es: 'Todos entran. Un camarero sirve chocolate caliente. Nadie se marea.', en: 'Everyone goes in. A waiter serves hot chocolate. Nobody gets seasick.' } },
              { say: { es: 'Va más despacio.', en: 'He goes more slowly.' }, then: { es: 'Llegan a Lausana con media hora de retraso, pero todos están bien.', en: 'They arrive in Lausanne half an hour late, but everyone is fine.' } },
              { say: { es: 'Para en el puerto más cercano.', en: 'He stops at the nearest port.' }, then: { es: 'Es un pueblo francés. Los pasajeros toman un café en Francia sin pasaporte.', en: 'It’s a French village. The passengers have a coffee in France without a passport.' } },
            ],
          },
          twist: { es: 'Un niño pregunta: «Capitán, ¿puedo manejar el barco?». ¿Qué responde Jean-Luc?', en: 'A child asks: “Captain, can I steer the boat?” What does Jean-Luc answer?' },
          questions: [
            { q: { es: '¿Te gustan los viajes largos y lentos?', en: 'Do you like long, slow journeys?' }, help: { es: 'Sí, porque… / No, prefiero llegar rápido.', en: 'Yes, because… / No, I prefer to get there fast.' }, follow: [{ es: '¿Cuál fue tu viaje más largo?', en: 'What was your longest journey?' }, { es: '¿Cómo fuiste?', en: 'How did you go?' }] },
            { q: { es: '¿Cómo se llaman los vientos en tu región?', en: 'What are the winds called in your region?' }, help: { es: 'Hay un viento que se llama… / No sé.', en: 'There’s a wind called… / I don’t know.' }, follow: [{ es: '¿Es frío o caliente?', en: 'Is it cold or hot?' }, { es: '¿Cuándo sopla?', en: 'When does it blow?' }] },
            { q: { es: '¿Cruzaste una frontera sin pasaporte?', en: 'Have you crossed a border without a passport?' }, help: { es: 'Sí, entre… / No, nunca.', en: 'Yes, between… / No, never.' }, follow: [{ es: '¿Notaste algo diferente?', en: 'Did you notice anything different?' }, { es: '¿El idioma cambió?', en: 'Did the language change?' }] },
            { q: { es: '¿Qué te gustaría manejar: un barco, un tren o un avión?', en: 'What would you like to drive: a boat, a train or a plane?' }, help: { es: 'Me gustaría manejar…', en: 'I’d like to drive…' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Tendrías miedo?', en: 'Would you be scared?' }] },
          ],
          words: [{ es: 'el vapor', en: 'steam' }, { es: 'la orilla', en: 'the shore' }, { es: 'soplar', en: 'to blow' }, { es: 'las olas', en: 'the waves' }, { es: 'marearse', en: 'to get seasick' }],
        },
        A2: {
          scene: { es: 'La empresa de barcos tiene problemas de dinero. Los barcos de vapor son hermosos, pero muy caros: consumen mucho y necesitan mecánicos especiales. La dirección propone vender dos barcos antiguos a un millonario que quiere convertirlos en restaurantes privados y comprar barcos eléctricos modernos. Jean-Luc tiene que hablar con los trabajadores.', en: 'The boat company has money problems. The steamboats are beautiful, but very expensive: they use a lot of fuel and need specialist mechanics. Management proposes selling two old boats to a millionaire who wants to turn them into private restaurants and buying modern electric boats. Jean-Luc has to talk to the workers.' },
          opener: { es: 'Estos barcos son parte de la historia del lago. Mi padre trabajaba en la máquina de este. Pero tengo que ser realista: un barco eléctrico no contamina, cuesta la mitad y es más fácil de manejar. Los jóvenes mecánicos prefieren los barcos modernos. Los turistas, en cambio, vienen por los antiguos. Si los vendemos a un millonario, ya no serán de todos. ¿Qué harías?', en: 'These boats are part of the lake’s history. My father worked in this one’s engine room. But I have to be realistic: an electric boat doesn’t pollute, costs half as much and is easier to handle. Young mechanics prefer modern boats. Tourists, on the other hand, come for the old ones. If we sell them to a millionaire, they won’t belong to everyone any more. What would you do?' },
          decide: {
            ask: { es: '¿Qué propone Jean-Luc?', en: 'What does Jean-Luc propose?' },
            options: [
              { say: { es: 'Hacer una campaña para que la gente ayude con dinero.', en: 'Run a campaign for people to help with money.' }, then: { es: 'Miles de personas donan. Se salva un barco, pero no los dos.', en: 'Thousands of people donate. One boat is saved, but not both.' } },
              { say: { es: 'Convertir los barcos de vapor en eléctricos, pero con su aspecto antiguo.', en: 'Convert the steamboats to electric, but keep their old look.' }, then: { es: 'Es caro, pero los barcos siguen navegando. Algunos puristas dicen que ya no son auténticos.', en: 'It’s expensive, but the boats keep sailing. Some purists say they’re no longer authentic.' } },
              { say: { es: 'Aceptar la venta.', en: 'Accept the sale.' }, then: { es: 'El millonario abre un restaurante muy caro. Jean-Luc nunca entra, pero lo mira desde lejos.', en: 'The millionaire opens a very expensive restaurant. Jean-Luc never goes in, but watches it from afar.' } },
            ],
          },
          twist: { es: 'El millonario le ofrece a Jean-Luc ser capitán de su barco-restaurante, con el doble de sueldo. ¿Debería aceptar?', en: 'The millionaire offers Jean-Luc the job of captain on his restaurant boat, at double the salary. Should he accept?' },
          questions: [
            { q: { es: '¿Hay algo antiguo en tu ciudad que es caro de mantener?', en: 'Is there something old in your city that’s expensive to maintain?' }, help: { es: 'Sí, el/la… / No que sepa.', en: 'Yes, the… / Not that I know.' }, follow: [{ es: '¿Quién lo paga?', en: 'Who pays for it?' }, { es: '¿Vale la pena?', en: 'Is it worth it?' }] },
            { q: { es: '¿Prefieres lo moderno o lo tradicional?', en: 'Do you prefer modern or traditional things?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿En qué cosas?', en: 'In what things?' }, { es: '¿Y tu familia?', en: 'And your family?' }] },
            { q: { es: '¿Donaste dinero para salvar algo?', en: 'Have you donated money to save something?' }, help: { es: 'Sí, para… / No, nunca.', en: 'Yes, to… / No, never.' }, follow: [{ es: '¿Funcionó?', en: 'Did it work?' }, { es: '¿Lo harías otra vez?', en: 'Would you do it again?' }] },
            { q: { es: '¿Trabajarías para alguien con quien no estás de acuerdo por más dinero?', en: 'Would you work for someone you disagree with for more money?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Cuánto dinero haría falta?', en: 'How much money would it take?' }, { es: '¿Lo hiciste alguna vez?', en: 'Have you ever done it?' }] },
          ],
          words: [{ es: 'consumir', en: 'to consume' }, { es: 'el mecánico', en: 'the mechanic' }, { es: 'la dirección', en: 'management' }, { es: 'contaminar', en: 'to pollute' }, { es: 'auténtico', en: 'authentic' }],
        },
        B1: {
          scene: { es: 'El lago Lemán está más limpio que hace cincuenta años, pero los científicos encuentran microplásticos y restos de medicamentos en el agua. Además, el lago se calienta: en verano la superficie llega a veinticinco grados y algunos peces desaparecen. Jean-Luc participa en una mesa redonda con científicos, pescadores y representantes de Francia y Suiza.', en: 'Lake Geneva is cleaner than fifty years ago, but scientists are finding microplastics and traces of medicines in the water. The lake is also warming: in summer the surface reaches twenty-five degrees and some fish are disappearing. Jean-Luc takes part in a round table with scientists, fishermen and representatives from France and Switzerland.' },
          opener: { es: 'El lago no tiene pasaporte. El agua que sale de una fábrica francesa llega a Ginebra, y la que sale de una ciudad suiza llega a Francia. Durante décadas cada país culpaba al otro. En los setenta el lago estaba casi muerto, y lo salvamos trabajando juntos. Hoy el problema es más difícil: los microplásticos vienen de la ropa, de los coches, de todos nosotros. ¿Cómo se reparte la responsabilidad cuando todos contaminamos un poco?', en: 'The lake has no passport. Water coming out of a French factory reaches Geneva, and water coming out of a Swiss town reaches France. For decades each country blamed the other. In the seventies the lake was almost dead, and we saved it by working together. Today the problem is harder: microplastics come from clothes, cars, all of us. How do you share out responsibility when we all pollute a little?' },
          decide: {
            ask: { es: '¿Qué propone Jean-Luc en la mesa redonda?', en: 'What does Jean-Luc propose at the round table?' },
            options: [
              { say: { es: 'Filtros obligatorios en todas las depuradoras, pagados por los dos países.', en: 'Compulsory filters at all treatment plants, paid for by both countries.' }, then: { es: 'Se aprueba después de dos años de discusión. Los microplásticos bajan, pero el agua sigue calentándose.', en: 'It’s approved after two years of arguing. Microplastics fall, but the water keeps warming.' } },
              { say: { es: 'Limitar los barcos de motor privados en verano.', en: 'Restrict private motorboats in summer.' }, then: { es: 'Los dueños de barcos protestan con una manifestación… en barco. La medida se aplica solo los fines de semana.', en: 'Boat owners protest with a demonstration… by boat. The measure only applies at weekends.' } },
              { say: { es: 'Una gran campaña para que la gente cambie sus hábitos.', en: 'A big campaign for people to change their habits.' }, then: { es: 'La campaña es muy popular en redes, pero los científicos no ven cambios en el agua.', en: 'The campaign is very popular online, but scientists see no change in the water.' } },
            ],
          },
          twist: { es: 'Un pescador dice que los científicos exageran y que hay más peces que nunca. Un científico responde que hay más de una especie y menos de las demás. ¿A quién crees más: al que trabaja en el lago o al que lo estudia?', en: 'A fisherman says the scientists are exaggerating and there are more fish than ever. A scientist replies that there are more of one species and fewer of the rest. Who do you believe more: the one who works on the lake or the one who studies it?' },
          questions: [
            { q: { es: '¿Conoces un problema ambiental que comparten dos países?', en: 'Do you know an environmental problem shared by two countries?' }, help: { es: 'Sí, entre… y… hay…', en: 'Yes, between… and… there’s…' }, follow: [{ es: '¿Cooperan o se culpan?', en: 'Do they cooperate or blame each other?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Qué hábito cambiarías para contaminar menos?', en: 'What habit would you change to pollute less?' }, help: { es: 'Podría… / Ya dejé de…', en: 'I could… / I’ve already stopped…' }, follow: [{ es: '¿Por qué no lo haces ya?', en: 'Why don’t you do it already?' }, { es: '¿Qué te lo impide?', en: 'What stops you?' }] },
            { q: { es: '¿Confías más en la experiencia o en la ciencia?', en: 'Do you trust experience or science more?' }, help: { es: 'Depende del tema: en… confío en…', en: 'It depends on the topic: on… I trust…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Alguna vez se contradijeron?', en: 'Have they ever contradicted each other?' }] },
            { q: { es: '¿Sirven las campañas para cambiar comportamientos?', en: 'Do campaigns work to change behaviour?' }, help: { es: 'A veces sí, cuando… / Casi nunca, porque…', en: 'Sometimes, when… / Hardly ever, because…' }, follow: [{ es: '¿Alguna campaña te cambió?', en: 'Has any campaign changed you?' }, { es: '¿Cuál?', en: 'Which one?' }] },
          ],
          words: [{ es: 'los microplásticos', en: 'microplastics' }, { es: 'la superficie', en: 'the surface' }, { es: 'culpar', en: 'to blame' }, { es: 'la depuradora', en: 'the water treatment plant' }, { es: 'la especie', en: 'the species' }],
        },
      },
    },
    // ------------------------------------------------------------ the watchmaker
    {
      id: 'relojeria',
      name: { es: 'El taller del relojero', en: 'The watchmaker’s workshop' },
      who: { name: 'Thierry', role: { es: 'relojero', en: 'watchmaker' } },
      levels: {
        A0: {
          scene: { es: 'Es un taller pequeño y silencioso. Hay muchos relojes en la pared. Thierry es relojero. Tiene una lupa en el ojo y una bata blanca.', en: 'It is a small, quiet workshop. There are lots of clocks on the wall. Thierry is a watchmaker. He has a magnifying glass in his eye and a white coat.' },
          opener: { es: 'Hola. Soy Thierry. Hago relojes. Escucha: tic, tac, tic, tac. ¿Tienes reloj?', en: 'Hello. I am Thierry. I make watches. Listen: tick, tock, tick, tock. Do you have a watch?' },
          decide: {
            ask: { es: '¿Qué dices?', en: 'What do you say?' },
            options: [
              { say: { es: 'Sí, aquí está.', en: 'Yes, here it is.' }, then: { es: 'Thierry lo mira con la lupa: «Bonito. Pero va dos minutos tarde».', en: 'Thierry looks at it with the magnifying glass: “Nice. But it is two minutes slow.”' } },
              { say: { es: 'No, uso el móvil.', en: 'No, I use my phone.' }, then: { es: 'Thierry suspira: «Todos usan el móvil…».', en: 'Thierry sighs: “Everyone uses their phone…”' } },
              { say: { es: '¿Puedo mirar con la lupa?', en: 'Can I look through the magnifying glass?' }, then: { es: 'Ves piezas muy, muy pequeñas. ¡Son como joyas!', en: 'You see very, very small parts. They are like jewels!' } },
            ],
          },
          twist: { es: 'Una pieza muy pequeña cae al suelo. ¿La buscas con Thierry?', en: 'A very small part falls on the floor. Do you look for it with Thierry?' },
          questions: [
            { q: { es: '¿Tienes reloj?', en: 'Do you have a watch?' }, help: { es: 'Sí. / No, uso el móvil.', en: 'Yes. / No, I use my phone.' }, follow: [{ es: '¿Cómo es?', en: 'What is it like?' }, { es: '¿Es un regalo?', en: 'Is it a gift?' }] },
            { q: { es: '¿Eres paciente?', en: 'Are you patient?' }, help: { es: 'Sí, mucho. / No, nada.', en: 'Yes, very. / No, not at all.' }, follow: [{ es: '¿Con quién?', en: 'With whom?' }, { es: '¿Cuándo no?', en: 'When not?' }] },
            { q: { es: '¿Te gustan los trabajos con las manos?', en: 'Do you like jobs with your hands?' }, help: { es: 'Sí. / No, prefiero el ordenador.', en: 'Yes. / No, I prefer the computer.' }, follow: [{ es: '¿Qué haces con las manos?', en: 'What do you do with your hands?' }, { es: '¿Es difícil?', en: 'Is it difficult?' }] },
            { q: { es: '¿Qué hora es?', en: 'What time is it?' }, help: { es: 'Son las…', en: 'It is…' }, follow: [{ es: '¿Tienes hambre?', en: 'Are you hungry?' }, { es: '¿A qué hora comes?', en: 'What time do you eat?' }] },
          ],
          words: [{ es: 'el reloj', en: 'the watch / clock' }, { es: 'el relojero', en: 'the watchmaker' }, { es: 'la lupa', en: 'the magnifying glass' }, { es: 'la pieza', en: 'the part' }, { es: 'el taller', en: 'the workshop' }],
        },
        A1: {
          scene: { es: 'El taller de Thierry está en una calle antigua de Ginebra. Hace relojes mecánicos a mano: sin pilas, solo con piezas pequeñas que se mueven. Un reloj suyo tiene doscientas piezas y tarda seis meses en hacerlo. Cuesta lo mismo que un coche. Hoy viene un cliente de Japón a recoger su reloj.', en: 'Thierry’s workshop is on an old street in Geneva. He makes mechanical watches by hand: no batteries, only small moving parts. One of his watches has two hundred parts and takes six months to make. It costs the same as a car. Today a customer from Japan is coming to collect his watch.' },
          opener: { es: 'Mi padre era relojero, y su padre también. En los años setenta llegaron los relojes de pila de Japón, baratos y exactos. Casi todos los talleres de Suiza cerraron. Mi padre decía que era el fin. Pero aquí estamos: ahora la gente quiere relojes mecánicos justamente porque son lentos y hechos a mano. Es curioso, ¿no? ¿Tú qué prefieres: algo práctico o algo especial?', en: 'My father was a watchmaker, and so was his father. In the seventies, battery watches arrived from Japan, cheap and accurate. Almost every workshop in Switzerland closed. My father said it was the end. But here we are: now people want mechanical watches precisely because they’re slow and handmade. Funny, isn’t it? What do you prefer: something practical or something special?' },
          decide: {
            ask: { es: 'El cliente japonés abre la caja y ve un pequeño defecto. ¿Qué hace Thierry?', en: 'The Japanese customer opens the box and sees a small flaw. What does Thierry do?' },
            options: [
              { say: { es: 'Pide perdón y lo arregla gratis.', en: 'He apologises and fixes it for free.' }, then: { es: 'El cliente espera una semana en Ginebra. Al final dice: «Es perfecto. Vale la espera».', en: 'The customer waits a week in Geneva. In the end he says: “It’s perfect. Worth the wait.”' } },
              { say: { es: 'Le explica que el defecto hace único al reloj.', en: 'He explains that the flaw makes the watch unique.' }, then: { es: 'El cliente lo piensa y sonríe: «En Japón también amamos la belleza imperfecta».', en: 'The customer thinks and smiles: “In Japan we also love imperfect beauty.”' } },
              { say: { es: 'Le ofrece otro reloj.', en: 'He offers him another watch.' }, then: { es: 'El cliente no quiere otro: quiere el suyo. Thierry lo arregla esa misma noche.', en: 'The customer doesn’t want another: he wants his. Thierry fixes it that same night.' } },
            ],
          },
          twist: { es: 'El hijo de Thierry, de quince años, dice que los relojes son aburridos y que quiere ser programador de videojuegos. ¿Qué le dice Thierry?', en: 'Thierry’s fifteen-year-old son says watches are boring and he wants to be a video-game programmer. What does Thierry tell him?' },
          questions: [
            { q: { es: '¿Tienes un objeto muy caro o muy especial?', en: 'Do you have a very expensive or very special object?' }, help: { es: 'Sí, tengo… / No.', en: 'Yes, I have… / No.' }, follow: [{ es: '¿De dónde viene?', en: 'Where does it come from?' }, { es: '¿Lo usas?', en: 'Do you use it?' }] },
            { q: { es: '¿Prefieres algo práctico o algo bonito?', en: 'Do you prefer something practical or something beautiful?' }, help: { es: 'Prefiero… porque…', en: 'I prefer… because…' }, follow: [{ es: '¿En la ropa también?', en: 'In clothes too?' }, { es: '¿Y en la casa?', en: 'And at home?' }] },
            { q: { es: '¿Qué trabajo hacían tus abuelos?', en: 'What job did your grandparents do?' }, help: { es: 'Mi abuelo era… / Mi abuela era…', en: 'My grandfather was… / My grandmother was…' }, follow: [{ es: '¿Ese trabajo existe todavía?', en: 'Does that job still exist?' }, { es: '¿Te gustaría hacerlo?', en: 'Would you like to do it?' }] },
            { q: { es: '¿Esperaste mucho tiempo por algo?', en: 'Have you waited a long time for something?' }, help: { es: 'Sí, esperé… / No, no me gusta esperar.', en: 'Yes, I waited… / No, I don’t like waiting.' }, follow: [{ es: '¿Valió la pena?', en: 'Was it worth it?' }, { es: '¿Qué era?', en: 'What was it?' }] },
          ],
          words: [{ es: 'mecánico', en: 'mechanical' }, { es: 'la pila', en: 'the battery' }, { es: 'exacto', en: 'accurate' }, { es: 'el defecto', en: 'the flaw' }, { es: 'recoger', en: 'to collect' }],
        },
        A2: {
          scene: { es: 'Thierry tiene sesenta y dos años y le tiemblan un poco las manos. Necesita un aprendiz. Tiene dos candidatos: Lena, una joven suiza muy rápida que aprendió en la mejor escuela de relojería, y Karim, un refugiado sirio que en Alepo arreglaba relojes en el taller de su familia, pero no tiene ningún diploma suizo.', en: 'Thierry is sixty-two and his hands shake a little. He needs an apprentice. He has two candidates: Lena, a very quick young Swiss woman trained at the best watchmaking school, and Karim, a Syrian refugee who repaired watches in his family’s workshop in Aleppo, but has no Swiss diploma.' },
          opener: { es: 'Lena es técnicamente perfecta. Karim es más lento, pero tiene algo que no se aprende en la escuela: escucha el reloj, lo trata con respeto. Le hice una prueba con un reloj viejo de mi abuelo y lo arregló en silencio, sin hacer preguntas. Si contrato a Karim, el banco y algunos clientes van a preguntar por su diploma. Si contrato a Lena, todo será más fácil. ¿A quién elegirías?', en: 'Lena is technically perfect. Karim is slower, but he has something you don’t learn at school: he listens to the watch, treats it with respect. I gave him a test with an old watch of my grandfather’s and he fixed it in silence, without asking questions. If I hire Karim, the bank and some customers will ask about his diploma. If I hire Lena, everything will be easier. Who would you choose?' },
          decide: {
            ask: { es: '¿A quién elige Thierry?', en: 'Who does Thierry choose?' },
            options: [
              { say: { es: 'A Lena.', en: 'Lena.' }, then: { es: 'Lena trabaja muy bien. En un año propone usar una impresora 3D para algunas piezas. Thierry duda.', en: 'Lena works very well. Within a year she suggests using a 3D printer for some parts. Thierry hesitates.' } },
              { say: { es: 'A Karim.', en: 'Karim.' }, then: { es: 'Karim estudia por las noches para sacar el diploma suizo. Dos años después, lo consigue.', en: 'Karim studies at night to get the Swiss diploma. Two years later, he gets it.' } },
              { say: { es: 'A los dos, con un sueldo más bajo cada uno.', en: 'Both of them, each on a lower salary.' }, then: { es: 'Al principio compiten. Después Lena enseña técnica y Karim enseña paciencia.', en: 'At first they compete. Then Lena teaches technique and Karim teaches patience.' } },
            ],
          },
          twist: { es: 'Una gran marca de relojes le ofrece a Lena un trabajo con el triple de sueldo. Thierry invirtió un año en enseñarle. ¿Qué debería hacer Lena?', en: 'A big watch brand offers Lena a job at triple the salary. Thierry has invested a year in teaching her. What should Lena do?' },
          questions: [
            { q: { es: '¿Qué vale más: un diploma o la experiencia?', en: 'What’s worth more: a diploma or experience?' }, help: { es: 'Para mí vale más… porque…', en: 'For me… is worth more because…' }, follow: [{ es: '¿En tu trabajo qué piden?', en: 'What do they ask for in your job?' }, { es: '¿Es justo?', en: 'Is it fair?' }] },
            { q: { es: '¿Conoces a alguien que no puede trabajar en su profesión en otro país?', en: 'Do you know someone who can’t work in their profession in another country?' }, help: { es: 'Sí, un amigo era… y ahora… / No.', en: 'Yes, a friend was a… and now… / No.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué hace ahora?', en: 'What does he/she do now?' }] },
            { q: { es: '¿Alguien te enseñó un oficio o una habilidad?', en: 'Has someone taught you a trade or a skill?' }, help: { es: 'Sí, mi… me enseñó a…', en: 'Yes, my… taught me to…' }, follow: [{ es: '¿Todavía lo haces?', en: 'Do you still do it?' }, { es: '¿Se lo enseñaste a otra persona?', en: 'Have you taught it to someone else?' }] },
            { q: { es: '¿Cambiarías de trabajo por el triple de sueldo?', en: 'Would you change jobs for triple the salary?' }, help: { es: 'Sí, sin dudar. / Depende de…', en: 'Yes, without hesitation. / It depends on…' }, follow: [{ es: '¿Qué te haría quedarte?', en: 'What would make you stay?' }, { es: '¿Le debes algo a tu jefe?', en: 'Do you owe your boss anything?' }] },
          ],
          words: [{ es: 'temblar', en: 'to shake' }, { es: 'el candidato', en: 'the candidate' }, { es: 'el refugiado', en: 'the refugee' }, { es: 'el diploma', en: 'the diploma' }, { es: 'el oficio', en: 'the trade' }],
        },
        B1: {
          scene: { es: 'Un reloj suizo de lujo puede costar cien mil francos, aunque el teléfono más barato da la hora con más exactitud. Thierry recibe un encargo especial: un multimillonario quiere un reloj único, con oro extraído de una mina en un país con conflictos armados. El cliente asegura que el oro es legal, pero Thierry no puede comprobarlo. El encargo pagaría su taller durante tres años.', en: 'A Swiss luxury watch can cost a hundred thousand francs, even though the cheapest phone tells the time more accurately. Thierry receives a special commission: a billionaire wants a unique watch, with gold mined in a country with armed conflicts. The customer insists the gold is legal, but Thierry can’t verify it. The commission would pay for his workshop for three years.' },
          opener: { es: 'Siempre me dije que yo solo hacía relojes, que lo que la gente hiciera con ellos no era mi problema. Pero un reloj de lujo no se compra para saber la hora: se compra para mostrar algo. Y si el oro viene de una mina donde trabajan niños o donde se financian armas, mi reloj muestra eso, aunque nadie lo vea. Mis colegas dicen que todo el oro del mundo tiene una historia oscura si buscas bien. ¿Hasta dónde llega la responsabilidad del que fabrica?', en: 'I always told myself I just made watches, that what people did with them wasn’t my problem. But a luxury watch isn’t bought to tell the time: it’s bought to show something. And if the gold comes from a mine where children work or which funds weapons, my watch shows that, even if nobody sees it. My colleagues say all the gold in the world has a dark history if you look hard enough. How far does the maker’s responsibility go?' },
          decide: {
            ask: { es: '¿Qué debería hacer Thierry?', en: 'What should Thierry do?' },
            options: [
              { say: { es: 'Aceptar, pero solo con oro reciclado certificado.', en: 'Accept, but only with certified recycled gold.' }, then: { es: 'El cliente se enfada: quería «su» oro. Al final acepta, pero paga menos.', en: 'The customer gets angry: he wanted “his” gold. In the end he accepts, but pays less.' } },
              { say: { es: 'Rechazar el encargo.', en: 'Turn down the commission.' }, then: { es: 'Thierry pasa un año difícil. Pero un periodista cuenta su historia y llegan clientes nuevos.', en: 'Thierry has a difficult year. But a journalist tells his story and new customers arrive.' } },
              { say: { es: 'Aceptar y donar una parte a una organización de la zona.', en: 'Accept and donate part of it to an organisation in the region.' }, then: { es: 'Thierry se siente un poco mejor, pero un amigo le dice: «Eso es comprar una conciencia tranquila».', en: 'Thierry feels a little better, but a friend tells him: “That’s buying a clear conscience.”' } },
            ],
          },
          twist: { es: 'Ginebra tiene una de las refinerías de oro más grandes del mundo. Un economista dice que, si Suiza deja de refinar oro de zonas de conflicto, otro país lo hará con menos controles. ¿Es un argumento válido?', en: 'Geneva has one of the largest gold refineries in the world. An economist says that if Switzerland stops refining gold from conflict zones, another country will do it with fewer checks. Is that a valid argument?' },
          questions: [
            { q: { es: '¿Para qué crees que la gente compra objetos de lujo?', en: 'Why do you think people buy luxury objects?' }, help: { es: 'Creo que los compran para…', en: 'I think they buy them to…' }, follow: [{ es: '¿Tú compraste alguno?', en: 'Have you bought one?' }, { es: '¿Te hizo feliz?', en: 'Did it make you happy?' }] },
            { q: { es: '¿Es responsable el que fabrica de cómo se usa su producto?', en: 'Is the maker responsible for how their product is used?' }, help: { es: 'En parte, porque… / No, porque…', en: 'Partly, because… / No, because…' }, follow: [{ es: '¿Un ejemplo?', en: 'An example?' }, { es: '¿Y el que lo vende?', en: 'And the seller?' }] },
            { q: { es: '¿Usarías el argumento «si no lo hago yo, lo hará otro»?', en: 'Would you use the argument “if I don’t do it, someone else will”?' }, help: { es: 'A veces, cuando… / Nunca, porque…', en: 'Sometimes, when… / Never, because…' }, follow: [{ es: '¿Te lo dijeron alguna vez?', en: 'Has someone said it to you?' }, { es: '¿Te convenció?', en: 'Did it convince you?' }] },
            { q: { es: '¿Donar dinero compensa haber hecho algo dudoso?', en: 'Does donating money make up for having done something questionable?' }, help: { es: 'Un poco, porque… / No, porque…', en: 'A little, because… / No, because…' }, follow: [{ es: '¿Conoces un caso famoso?', en: 'Do you know a famous case?' }, { es: '¿Qué opinas?', en: 'What do you think?' }] },
          ],
          words: [{ es: 'el lujo', en: 'luxury' }, { es: 'el encargo', en: 'the commission' }, { es: 'extraer', en: 'to extract / mine' }, { es: 'financiar', en: 'to fund' }, { es: 'la refinería', en: 'the refinery' }],
        },
      },
    },
    // ------------------------------------------------------------ the Lavaux vineyards
    {
      id: 'lavaux',
      name: { es: 'Los viñedos de Lavaux', en: 'The Lavaux vineyards' },
      who: { name: 'Céline', role: { es: 'viticultora', en: 'winegrower' } },
      levels: {
        A0: {
          scene: { es: 'Es una montaña con muchas terrazas verdes. Abajo está el lago. Hay uvas por todas partes. Céline es viticultora. Tiene un sombrero de paja y unas tijeras.', en: 'It is a hillside with lots of green terraces. Below is the lake. There are grapes everywhere. Céline is a winegrower. She has a straw hat and some clippers.' },
          opener: { es: '¡Hola! Soy Céline. Hoy recogemos uvas. ¿Me ayudas?', en: 'Hello! I am Céline. Today we pick grapes. Will you help me?' },
          decide: {
            ask: { es: '¿Qué haces?', en: 'What do you do?' },
            options: [
              { say: { es: 'Sí, corto uvas.', en: 'Yes, I cut grapes.' }, then: { es: 'Llenas una caja. ¡Pesa mucho!', en: 'You fill a box. It is very heavy!' } },
              { say: { es: 'Pruebo una uva.', en: 'I taste a grape.' }, then: { es: 'Es dulce y tiene semillas. Céline ríe.', en: 'It is sweet and has seeds. Céline laughs.' } },
              { say: { es: 'Saco una foto del lago.', en: 'I take a photo of the lake.' }, then: { es: 'Céline dice: «Es la foto más bonita de Suiza».', en: 'Céline says: “It is the most beautiful photo in Switzerland.”' } },
            ],
          },
          twist: { es: 'Empieza a llover. Las uvas están en el suelo. ¿Corres a casa o sigues trabajando?', en: 'It starts to rain. The grapes are on the ground. Do you run home or keep working?' },
          questions: [
            { q: { es: '¿Te gustan las uvas?', en: 'Do you like grapes?' }, help: { es: 'Sí. / No mucho.', en: 'Yes. / Not much.' }, follow: [{ es: '¿Verdes o negras?', en: 'Green or black?' }, { es: '¿Qué fruta te gusta más?', en: 'Which fruit do you like most?' }] },
            { q: { es: '¿Trabajas en el campo?', en: 'Do you work in the countryside?' }, help: { es: 'Sí. / No, en la ciudad.', en: 'Yes. / No, in the city.' }, follow: [{ es: '¿Te gustaría?', en: 'Would you like to?' }, { es: '¿Por qué?', en: 'Why?' }] },
            { q: { es: '¿Usas sombrero?', en: 'Do you wear a hat?' }, help: { es: 'Sí, en verano. / No.', en: 'Yes, in summer. / No.' }, follow: [{ es: '¿De qué color?', en: 'What colour?' }, { es: '¿Tienes muchos?', en: 'Do you have many?' }] },
            { q: { es: '¿Te gusta la lluvia?', en: 'Do you like rain?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Qué haces cuando llueve?', en: 'What do you do when it rains?' }, { es: '¿Llueve mucho donde vives?', en: 'Does it rain a lot where you live?' }] },
          ],
          words: [{ es: 'las uvas', en: 'the grapes' }, { es: 'la terraza', en: 'the terrace' }, { es: 'las tijeras', en: 'the clippers / scissors' }, { es: 'recoger', en: 'to pick' }, { es: 'el sombrero de paja', en: 'the straw hat' }],
        },
        A1: {
          scene: { es: 'Es septiembre en Lavaux, entre Lausana y Montreux. Los viñedos bajan hasta el lago en terrazas de piedra construidas por monjes hace casi mil años. Es patrimonio de la UNESCO. Las pendientes son tan fuertes que no se pueden usar máquinas: todo se hace a mano. Céline trabaja con su familia y diez estudiantes de varios países.', en: 'It is September in Lavaux, between Lausanne and Montreux. The vineyards go down to the lake on stone terraces built by monks almost a thousand years ago. It is a UNESCO World Heritage site. The slopes are so steep that machines can’t be used: everything is done by hand. Céline works with her family and ten students from several countries.' },
          opener: { es: 'Dicen que aquí las uvas tienen tres soles: el sol del cielo, el sol que refleja el lago y el calor que guardan las piedras. Por eso el vino es especial. Pero el trabajo es duro: subir y bajar escaleras todo el día con cajas de veinte kilos. A la noche cenamos todos juntos y cantamos. ¿Te gustaría trabajar una semana en una cosecha?', en: 'They say the grapes here have three suns: the sun in the sky, the sun reflected by the lake and the heat stored in the stones. That’s why the wine is special. But the work is hard: up and down stairs all day with twenty-kilo boxes. In the evening we all have dinner together and sing. Would you like to work a week at a harvest?' },
          decide: {
            ask: { es: 'Un estudiante está muy cansado y quiere irse a casa. ¿Qué hace Céline?', en: 'A student is very tired and wants to go home. What does Céline do?' },
            options: [
              { say: { es: 'Le da un trabajo más fácil en la bodega.', en: 'She gives him an easier job in the cellar.' }, then: { es: 'El estudiante se queda. Aprende a hacer vino y está feliz.', en: 'The student stays. He learns to make wine and he’s happy.' } },
              { say: { es: 'Le da un día libre.', en: 'She gives him a day off.' }, then: { es: 'El estudiante pasea por el lago. Al día siguiente vuelve con energía.', en: 'The student walks by the lake. The next day he comes back full of energy.' } },
              { say: { es: 'Lo deja ir.', en: 'She lets him go.' }, then: { es: 'Céline dice: «No todos sirven para esto. Y está bien».', en: 'Céline says: “Not everyone is made for this. And that’s fine.”' } },
            ],
          },
          twist: { es: 'Un turista quiere comprar una botella, pero no tiene efectivo y Céline no acepta tarjetas. ¿Qué hacen?', en: 'A tourist wants to buy a bottle, but has no cash and Céline doesn’t take cards. What do they do?' },
          questions: [
            { q: { es: '¿Trabajaste en el campo alguna vez?', en: 'Have you ever worked in the countryside?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Fue duro?', en: 'Was it hard?' }, { es: '¿Lo repetirías?', en: 'Would you do it again?' }] },
            { q: { es: '¿Qué lugar de tu país es patrimonio de la humanidad?', en: 'Which place in your country is a World Heritage site?' }, help: { es: 'Creo que… / No sé.', en: 'I think… / I don’t know.' }, follow: [{ es: '¿Lo visitaste?', en: 'Have you visited it?' }, { es: '¿Cómo es?', en: 'What is it like?' }] },
            { q: { es: '¿Cantas con amigos o con tu familia?', en: 'Do you sing with friends or family?' }, help: { es: 'Sí, en fiestas. / No, nunca.', en: 'Yes, at parties. / No, never.' }, follow: [{ es: '¿Qué canciones?', en: 'What songs?' }, { es: '¿Cantas bien?', en: 'Do you sing well?' }] },
            { q: { es: '¿Pagas con tarjeta o en efectivo?', en: 'Do you pay by card or in cash?' }, help: { es: 'Con tarjeta. / En efectivo. / Con el móvil.', en: 'By card. / In cash. / With my phone.' }, follow: [{ es: '¿Llevas efectivo siempre?', en: 'Do you always carry cash?' }, { es: '¿Por qué?', en: 'Why?' }] },
          ],
          words: [{ es: 'el viñedo', en: 'the vineyard' }, { es: 'la pendiente', en: 'the slope' }, { es: 'la cosecha', en: 'the harvest' }, { es: 'la bodega', en: 'the cellar / winery' }, { es: 'el efectivo', en: 'cash' }],
        },
        A2: {
          scene: { es: 'Este año una granizada destruyó la mitad de la cosecha de Céline en diez minutos. Además, el verano fue tan caliente que algunas uvas se quemaron. Su vecino, un viticultor mayor, le dice que es mala suerte. Céline cree que es el cambio climático y que tiene que plantar otras variedades de uva, más resistentes al calor, aunque el vino no sea el tradicional.', en: 'This year a hailstorm destroyed half of Céline’s harvest in ten minutes. On top of that, the summer was so hot that some grapes got burnt. Her neighbour, an older winegrower, tells her it’s bad luck. Céline thinks it’s climate change and that she has to plant other grape varieties, more resistant to heat, even if the wine isn’t the traditional one.' },
          opener: { es: 'Mi familia hace chasselas desde hace cinco generaciones. Es la uva de Lavaux, la de siempre. Pero si cada verano es más caliente, en veinte años no va a crecer bien aquí. Si planto otra uva, tardo cinco años en tener vino y no sé si los clientes lo van a comprar. Mi vecino dice que estoy loca. Mi hija dice que soy valiente. ¿Tú qué piensas?', en: 'My family has made chasselas for five generations. It’s Lavaux’s grape, the traditional one. But if every summer is hotter, in twenty years it won’t grow well here. If I plant another grape, it takes five years to get wine and I don’t know if customers will buy it. My neighbour says I’m mad. My daughter says I’m brave. What do you think?' },
          decide: {
            ask: { es: '¿Qué hace Céline?', en: 'What does Céline do?' },
            options: [
              { say: { es: 'Planta una nueva uva en una parte pequeña del viñedo.', en: 'She plants a new grape in a small part of the vineyard.' }, then: { es: 'Cinco años después, el vino nuevo gana un premio. El vecino pide probarlo.', en: 'Five years later, the new wine wins a prize. The neighbour asks to taste it.' } },
              { say: { es: 'Mantiene la chasselas y pone redes contra el granizo.', en: 'She keeps the chasselas and puts up hail nets.' }, then: { es: 'Las redes son caras y feas, pero protegen las uvas. Los turistas se quejan de las fotos.', en: 'The nets are expensive and ugly, but they protect the grapes. Tourists complain about their photos.' } },
              { say: { es: 'Pide ayuda a una universidad para estudiar el problema.', en: 'She asks a university for help to study the problem.' }, then: { es: 'Los estudiantes instalan sensores. Descubren que hay zonas del viñedo más frescas.', en: 'The students install sensors. They find there are cooler areas in the vineyard.' } },
            ],
          },
          twist: { es: 'Un seguro ofrece pagar las pérdidas del granizo, pero solo si Céline usa más productos químicos para proteger las uvas. ¿Debería aceptar?', en: 'An insurer offers to pay for the hail losses, but only if Céline uses more chemicals to protect the grapes. Should she accept?' },
          questions: [
            { q: { es: '¿Notas el cambio climático donde vives?', en: 'Do you notice climate change where you live?' }, help: { es: 'Sí, por ejemplo… / No mucho.', en: 'Yes, for example… / Not much.' }, follow: [{ es: '¿Qué cambió desde que eras niño?', en: 'What has changed since you were a child?' }, { es: '¿Te preocupa?', en: 'Does it worry you?' }] },
            { q: { es: '¿Cambiarías una tradición de tu familia si fuera necesario?', en: 'Would you change a family tradition if it were necessary?' }, help: { es: 'Sí, si… / No, porque…', en: 'Yes, if… / No, because…' }, follow: [{ es: '¿Cuál?', en: 'Which one?' }, { es: '¿Qué dirían tus padres?', en: 'What would your parents say?' }] },
            { q: { es: '¿Alguna vez alguien dijo que estabas loco por una decisión?', en: 'Has anyone ever said you were mad for a decision?' }, help: { es: 'Sí, cuando… / No.', en: 'Yes, when… / No.' }, follow: [{ es: '¿Tenían razón?', en: 'Were they right?' }, { es: '¿Lo volverías a hacer?', en: 'Would you do it again?' }] },
            { q: { es: '¿Bebes vino o prefieres otra bebida?', en: 'Do you drink wine or do you prefer another drink?' }, help: { es: 'Prefiero… / No bebo alcohol.', en: 'I prefer… / I don’t drink alcohol.' }, follow: [{ es: '¿Hay vino en tu país?', en: 'Is there wine in your country?' }, { es: '¿Cuál es la bebida típica?', en: 'What is the typical drink?' }] },
          ],
          words: [{ es: 'la granizada', en: 'the hailstorm' }, { es: 'destruir', en: 'to destroy' }, { es: 'la variedad', en: 'the variety' }, { es: 'resistente', en: 'resistant' }, { es: 'el seguro', en: 'the insurance' }],
        },
        B1: {
          scene: { es: 'Las terrazas de Lavaux tienen el paisaje más fotografiado de Suiza. Pero cada vez menos jóvenes quieren ser viticultores: el trabajo es duro y se gana poco. Un grupo inversor propone comprar varias parcelas abandonadas para construir un hotel de lujo con vistas al lago. Sería dinero para el pueblo, pero cambiaría un paisaje protegido. Céline es concejala del pueblo y su voto puede decidir.', en: 'The Lavaux terraces are the most photographed landscape in Switzerland. But fewer and fewer young people want to be winegrowers: the work is hard and pays little. An investment group proposes buying several abandoned plots to build a luxury hotel with lake views. It would bring money to the village, but change a protected landscape. Céline is a village councillor and her vote may decide.' },
          opener: { es: 'En los años setenta ya quisieron construir casas aquí, y un hombre organizó un referéndum para proteger Lavaux. Ganó, y gracias a él tenemos este paisaje. Pero un paisaje no se mantiene solo: necesita gente que trabaje la tierra. Si nadie quiere hacerlo, las terrazas se caen. El hotel promete pagar a jóvenes para cuidar las viñas a cambio de construir en una parte. ¿Proteger un paisaje es dejarlo igual o hacer que siga vivo?', en: 'In the seventies people already wanted to build houses here, and a man organised a referendum to protect Lavaux. He won, and thanks to him we have this landscape. But a landscape doesn’t keep itself: it needs people to work the land. If nobody wants to, the terraces fall down. The hotel promises to pay young people to look after the vines in exchange for building on part of it. Is protecting a landscape keeping it the same or keeping it alive?' },
          decide: {
            ask: { es: '¿Qué vota Céline?', en: 'How does Céline vote?' },
            options: [
              { say: { es: 'No al hotel, y sí a un fondo público para jóvenes viticultores.', en: 'No to the hotel, and yes to a public fund for young winegrowers.' }, then: { es: 'El fondo atrae a doce jóvenes en tres años. Es poco, pero las terrazas no se caen.', en: 'The fund attracts twelve young people in three years. It’s not much, but the terraces don’t collapse.' } },
              { say: { es: 'Sí al hotel, con condiciones muy estrictas.', en: 'Yes to the hotel, with very strict conditions.' }, then: { es: 'El hotel se construye bajo tierra, casi invisible. Algunos dicen que es una obra maestra; otros, una traición.', en: 'The hotel is built underground, almost invisible. Some say it’s a masterpiece; others, a betrayal.' } },
              { say: { es: 'Pedir un referéndum, como en los setenta.', en: 'Call a referendum, like in the seventies.' }, then: { es: 'La campaña divide al pueblo durante meses. Gana el no por cuarenta votos.', en: 'The campaign divides the village for months. No wins by forty votes.' } },
            ],
          },
          twist: { es: 'Un turista dice en las redes: «Lavaux es una postal bonita, pero los que viven allí no pueden pagar sus casas». ¿Para quién se protege un paisaje: para los turistas o para los que viven allí?', en: 'A tourist posts online: “Lavaux is a pretty postcard, but the people who live there can’t afford their homes.” Who is a landscape protected for: tourists or those who live there?' },
          questions: [
            { q: { es: '¿Hay un paisaje en tu país que esté en peligro?', en: 'Is there a landscape in your country that’s at risk?' }, help: { es: 'Sí, … porque… / No que yo sepa.', en: 'Yes, … because… / Not that I know of.' }, follow: [{ es: '¿Quién lo protege?', en: 'Who protects it?' }, { es: '¿Qué harías tú?', en: 'What would you do?' }] },
            { q: { es: '¿Trabajarías en el campo si ganaras un buen sueldo?', en: 'Would you work in the countryside if you earned a good salary?' }, help: { es: 'Sí, porque… / No, aunque…', en: 'Yes, because… / No, even though…' }, follow: [{ es: '¿Qué te gustaría producir?', en: 'What would you like to produce?' }, { es: '¿Qué extrañarías de la ciudad?', en: 'What would you miss about the city?' }] },
            { q: { es: '¿Es posible construir algo nuevo sin estropear un lugar histórico?', en: 'Is it possible to build something new without ruining a historic place?' }, help: { es: 'Sí, por ejemplo… / Es muy difícil porque…', en: 'Yes, for example… / It’s very hard because…' }, follow: [{ es: '¿Conoces un buen ejemplo?', en: 'Do you know a good example?' }, { es: '¿Y uno malo?', en: 'And a bad one?' }] },
            { q: { es: '¿Una sola persona puede cambiar el futuro de un lugar?', en: 'Can one person change the future of a place?' }, help: { es: 'Sí, como… / No, hace falta…', en: 'Yes, like… / No, it takes…' }, follow: [{ es: '¿Conoces a alguien así?', en: 'Do you know someone like that?' }, { es: '¿Qué hizo?', en: 'What did they do?' }] },
          ],
          words: [{ es: 'la parcela', en: 'the plot' }, { es: 'abandonado', en: 'abandoned' }, { es: 'el concejal', en: 'the councillor' }, { es: 'la viña', en: 'the vine' }, { es: 'la postal', en: 'the postcard' }],
        },
      },
    },
    // ------------------------------------------------------------ the Gruyères dairy
    {
      id: 'queso',
      name: { es: 'La quesería de Gruyères', en: 'The Gruyères cheese dairy' },
      who: { name: 'Marcel', role: { es: 'maestro quesero', en: 'master cheesemaker' } },
      levels: {
        A0: {
          scene: { es: 'Es una quesería grande. Hay ruedas de queso enormes en estanterías de madera. Marcel es quesero. Tiene un delantal blanco y botas blancas.', en: 'It is a big cheese dairy. There are huge wheels of cheese on wooden shelves. Marcel is a cheesemaker. He has a white apron and white boots.' },
          opener: { es: '¡Hola! Soy Marcel. Este queso pesa treinta y cinco kilos. ¿Quieres probar?', en: 'Hello! I am Marcel. This cheese weighs thirty-five kilos. Do you want to try some?' },
          decide: {
            ask: { es: '¿Qué queso pruebas?', en: 'Which cheese do you try?' },
            options: [
              { say: { es: 'El queso joven.', en: 'The young cheese.' }, then: { es: 'Es suave y cremoso. ¡Muy rico!', en: 'It is mild and creamy. Very tasty!' } },
              { say: { es: 'El queso viejo.', en: 'The old cheese.' }, then: { es: 'Es fuerte y un poco salado. Marcel dice: «Tiene dieciocho meses».', en: 'It is strong and a little salty. Marcel says: “It is eighteen months old.”' } },
              { say: { es: 'Los dos.', en: 'Both.' }, then: { es: 'Marcel ríe: «¡Eres un buen cliente!».', en: 'Marcel laughs: “You are a good customer!”' } },
            ],
          },
          twist: { es: 'Marcel te da un martillo pequeño. Golpea el queso para escuchar el sonido. ¿Lo haces?', en: 'Marcel gives you a small hammer. He taps the cheese to hear the sound. Do you do it?' },
          questions: [
            { q: { es: '¿Te gusta el queso?', en: 'Do you like cheese?' }, help: { es: 'Sí, mucho. / No.', en: 'Yes, a lot. / No.' }, follow: [{ es: '¿Qué queso?', en: 'Which cheese?' }, { es: '¿Con pan?', en: 'With bread?' }] },
            { q: { es: '¿Comes queso en el desayuno?', en: 'Do you eat cheese for breakfast?' }, help: { es: 'Sí. / No.', en: 'Yes. / No.' }, follow: [{ es: '¿Qué desayunas?', en: 'What do you have for breakfast?' }, { es: '¿A qué hora?', en: 'At what time?' }] },
            { q: { es: '¿Hay un queso famoso en tu país?', en: 'Is there a famous cheese in your country?' }, help: { es: 'Sí, se llama… / No sé.', en: 'Yes, it is called… / I don’t know.' }, follow: [{ es: '¿Te gusta?', en: 'Do you like it?' }, { es: '¿Es caro?', en: 'Is it expensive?' }] },
            { q: { es: '¿Prefieres lo dulce o lo salado?', en: 'Do you prefer sweet or salty?' }, help: { es: 'Lo dulce. / Lo salado.', en: 'Sweet. / Salty.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Qué comes ahora?', en: 'What are you eating now?' }] },
          ],
          words: [{ es: 'el queso', en: 'the cheese' }, { es: 'la rueda', en: 'the wheel' }, { es: 'salado', en: 'salty' }, { es: 'cremoso', en: 'creamy' }, { es: 'el martillo', en: 'the hammer' }],
        },
        A1: {
          scene: { es: 'Gruyères es un pueblo medieval con un castillo en una colina. Abajo está la quesería. Para hacer una rueda de queso de treinta y cinco kilos se necesitan cuatrocientos litros de leche. Marcel empieza a trabajar a las cinco de la mañana, cuando llegan los granjeros con la leche fresca. Los turistas miran desde una ventana grande.', en: 'Gruyères is a medieval village with a castle on a hill. Below is the dairy. To make a thirty-five-kilo wheel of cheese you need four hundred litres of milk. Marcel starts work at five in the morning, when the farmers arrive with fresh milk. Tourists watch through a big window.' },
          opener: { es: 'El gruyère tiene reglas muy estrictas: la leche tiene que venir de vacas que comen hierba y heno, nunca comida industrial. La leche no puede viajar más de veinte kilómetros. Y el queso tiene que esperar en la cueva al menos cinco meses. Cada semana giro las ruedas y las limpio con agua salada. Es un trabajo de paciencia. ¿Tú qué haces con paciencia?', en: 'Gruyère has very strict rules: the milk has to come from cows that eat grass and hay, never industrial feed. The milk can’t travel more than twenty kilometres. And the cheese has to wait in the cellar for at least five months. Every week I turn the wheels and clean them with salty water. It’s a job of patience. What do you do with patience?' },
          decide: {
            ask: { es: 'Un turista pregunta si puede comprar un queso entero. ¿Qué le dice Marcel?', en: 'A tourist asks if he can buy a whole cheese. What does Marcel tell him?' },
            options: [
              { say: { es: '«Claro, pero pesa treinta y cinco kilos».', en: '“Of course, but it weighs thirty-five kilos.”' }, then: { es: 'El turista se ríe y compra solo un trozo de medio kilo.', en: 'The tourist laughs and buys just a half-kilo piece.' } },
              { say: { es: '«Se lo enviamos a su casa».', en: '“We’ll send it to your home.”' }, then: { es: 'El turista vive en Canadá. El envío cuesta más que el queso.', en: 'The tourist lives in Canada. Shipping costs more than the cheese.' } },
              { say: { es: '«Mejor compre uno pequeño para una fondue».', en: '“Better buy a small one for a fondue.”' }, then: { es: 'Marcel le explica cómo hacer fondue. El turista apunta todo en el móvil.', en: 'Marcel explains how to make fondue. The tourist writes everything down on his phone.' } },
            ],
          },
          twist: { es: 'Un granjero llega tarde con su leche: su camión se rompió. La leche está fuera de las reglas por diez minutos. ¿Qué hace Marcel?', en: 'A farmer arrives late with his milk: his truck broke down. The milk is outside the rules by ten minutes. What does Marcel do?' },
          questions: [
            { q: { es: '¿Qué comida típica tiene reglas especiales en tu país?', en: 'Which typical food has special rules in your country?' }, help: { es: 'El/La… tiene que…', en: 'The… has to…' }, follow: [{ es: '¿Te parece bien?', en: 'Do you think that’s right?' }, { es: '¿La comes?', en: 'Do you eat it?' }] },
            { q: { es: '¿Comiste fondue alguna vez?', en: 'Have you ever had fondue?' }, help: { es: 'Sí, en… / No, nunca.', en: 'Yes, in… / No, never.' }, follow: [{ es: '¿Te gustó?', en: 'Did you like it?' }, { es: '¿Con quién?', en: 'With whom?' }] },
            { q: { es: '¿Te levantas temprano?', en: 'Do you get up early?' }, help: { es: 'Sí, a las… / No, tarde.', en: 'Yes, at… / No, late.' }, follow: [{ es: '¿Por qué?', en: 'Why?' }, { es: '¿Y los fines de semana?', en: 'And at weekends?' }] },
            { q: { es: '¿Compras comida de granjeros locales?', en: 'Do you buy food from local farmers?' }, help: { es: 'Sí, en el mercado. / No, en el supermercado.', en: 'Yes, at the market. / No, at the supermarket.' }, follow: [{ es: '¿Es más caro?', en: 'Is it more expensive?' }, { es: '¿Es mejor?', en: 'Is it better?' }] },
          ],
          words: [{ es: 'la quesería', en: 'the cheese dairy' }, { es: 'el granjero', en: 'the farmer' }, { es: 'el heno', en: 'hay' }, { es: 'girar', en: 'to turn' }, { es: 'el trozo', en: 'the piece' }],
        },
        A2: {
          scene: { es: 'Un tribunal de Estados Unidos decidió que la palabra «gruyère» es un nombre genérico, como «queso blanco», y que cualquier empresa americana puede usarla. Ahora se venden en Estados Unidos quesos «gruyère» hechos en fábricas de Wisconsin, mucho más baratos. Marcel recibe a un periodista que quiere saber su opinión.', en: 'A US court decided that the word “gruyère” is a generic name, like “white cheese”, and any American company can use it. Now “gruyère” cheeses made in Wisconsin factories are sold in the US, much cheaper. Marcel receives a journalist who wants his opinion.' },
          opener: { es: 'Para nosotros, gruyère no es un tipo de queso: es un lugar, una historia, unas reglas que respetamos desde hace siglos. Es como si alguien en otro país hiciera «tequila» con cualquier planta. Pero los americanos dicen que sus abuelos suizos llevaron la receta a Wisconsin hace ciento cincuenta años y que también es su tradición. Y tienen un punto. ¿Quién es dueño de un nombre?', en: 'For us, gruyère isn’t a type of cheese: it’s a place, a history, rules we’ve respected for centuries. It’s as if someone in another country made “tequila” from any plant. But the Americans say their Swiss grandparents took the recipe to Wisconsin a hundred and fifty years ago and it’s their tradition too. And they have a point. Who owns a name?' },
          decide: {
            ask: { es: '¿Qué le dice Marcel al periodista?', en: 'What does Marcel tell the journalist?' },
            options: [
              { say: { es: 'Que pueden hacer el queso, pero con otro nombre.', en: 'That they can make the cheese, but with another name.' }, then: { es: 'La entrevista se publica. Algunos queseros de Wisconsin escriben a Marcel: están de acuerdo.', en: 'The interview is published. Some Wisconsin cheesemakers write to Marcel: they agree.' } },
              { say: { es: 'Que el sabor habla solo: invita a probar los dos.', en: 'That the taste speaks for itself: he invites people to try both.' }, then: { es: 'El periodista hace una prueba a ciegas en Nueva York. Gana el suizo, pero por poco.', en: 'The journalist does a blind test in New York. The Swiss one wins, but narrowly.' } },
              { say: { es: 'Que el gobierno suizo tiene que defender el nombre.', en: 'That the Swiss government has to defend the name.' }, then: { es: 'El gobierno lo intenta, pero es un proceso largo y caro. Pueden pasar años.', en: 'The government tries, but it’s a long and costly process. It could take years.' } },
            ],
          },
          twist: { es: 'Un quesero de Wisconsin visita Gruyères y le pide a Marcel que le enseñe su técnica. ¿Debería enseñarle?', en: 'A Wisconsin cheesemaker visits Gruyères and asks Marcel to teach him his technique. Should he?' },
          questions: [
            { q: { es: '¿Hay un producto de tu país que se copia en otros lugares?', en: 'Is there a product from your country that’s copied elsewhere?' }, help: { es: 'Sí, el/la… / No que sepa.', en: 'Yes, the… / Not that I know.' }, follow: [{ es: '¿La copia es buena?', en: 'Is the copy good?' }, { es: '¿Te molesta?', en: 'Does it bother you?' }] },
            { q: { es: '¿Distingues un producto original de una copia?', en: 'Can you tell an original from a copy?' }, help: { es: 'Sí, por… / No, nunca.', en: 'Yes, by the… / No, never.' }, follow: [{ es: '¿Compraste una copia sin saberlo?', en: 'Have you bought a copy without knowing?' }, { es: '¿Qué era?', en: 'What was it?' }] },
            { q: { es: '¿Una receta puede tener dueño?', en: 'Can a recipe have an owner?' }, help: { es: 'Sí, porque… / No, porque…', en: 'Yes, because… / No, because…' }, follow: [{ es: '¿Tu familia tiene una receta secreta?', en: 'Does your family have a secret recipe?' }, { es: '¿La compartirías?', en: 'Would you share it?' }] },
            { q: { es: '¿Enseñarías tu secreto a la competencia?', en: 'Would you teach your secret to the competition?' }, help: { es: 'Sí, porque… / No, nunca.', en: 'Yes, because… / No, never.' }, follow: [{ es: '¿Qué ganarías?', en: 'What would you gain?' }, { es: '¿Qué perderías?', en: 'What would you lose?' }] },
          ],
          words: [{ es: 'el tribunal', en: 'the court' }, { es: 'genérico', en: 'generic' }, { es: 'el dueño', en: 'the owner' }, { es: 'la prueba a ciegas', en: 'the blind test' }, { es: 'la técnica', en: 'the technique' }],
        },
        B1: {
          scene: { es: 'Las vacas que dan la leche para el gruyère pasan el verano en las montañas. Pero el número de granjas pequeñas en Suiza baja cada año: muchas familias no pueden vivir de la leche. El gobierno suizo da muchas ayudas a los granjeros, más que casi cualquier país del mundo. Un partido político propone reducirlas a la mitad y comprar más productos del extranjero, que son más baratos.', en: 'The cows that give milk for gruyère spend the summer in the mountains. But the number of small farms in Switzerland falls every year: many families can’t make a living from milk. The Swiss government gives farmers a lot of subsidies, more than almost any country in the world. A political party proposes cutting them in half and buying more products from abroad, which are cheaper.' },
          opener: { es: 'Sin ayudas, la mitad de mis granjeros cierra en cinco años. Y sin granjeros no hay vacas en las montañas, y sin vacas los prados se convierten en bosque, y cambia el paisaje, y se va el turismo. Todo está conectado. Pero entiendo a quien dice que es injusto: una familia pobre de la ciudad paga impuestos para que yo haga un queso que no se puede permitir. ¿Debería un país pagar para mantener una forma de vida tradicional?', en: 'Without subsidies, half my farmers close within five years. And without farmers there are no cows in the mountains, and without cows the meadows turn into forest, and the landscape changes, and tourism leaves. It’s all connected. But I understand people who say it’s unfair: a poor family in the city pays taxes so I can make a cheese they can’t afford. Should a country pay to keep a traditional way of life alive?' },
          decide: {
            ask: { es: '¿Qué defiende Marcel en el debate público?', en: 'What does Marcel argue for in the public debate?' },
            options: [
              { say: { es: 'Mantener las ayudas, pero solo para granjas pequeñas y ecológicas.', en: 'Keep the subsidies, but only for small, organic farms.' }, then: { es: 'Las granjas grandes protestan. Las pequeñas sobreviven y algunas se hacen ecológicas.', en: 'The big farms protest. The small ones survive and some go organic.' } },
              { say: { es: 'Reducir ayudas y subir el precio del queso.', en: 'Cut subsidies and raise the price of cheese.' }, then: { es: 'El queso se vuelve un producto de lujo. Las ventas bajan en Suiza, pero suben en el extranjero.', en: 'The cheese becomes a luxury product. Sales fall in Switzerland, but rise abroad.' } },
              { say: { es: 'Pagar a los granjeros por cuidar el paisaje, no por producir.', en: 'Pay farmers for looking after the landscape, not for producing.' }, then: { es: 'Es una idea nueva. Algunos granjeros dicen que no quieren ser «jardineros del Estado».', en: 'It’s a new idea. Some farmers say they don’t want to be “state gardeners”.' } },
            ],
          },
          twist: { es: 'Un economista dice que Suiza podría comprar todo el queso a Francia más barato y usar el dinero de las ayudas en escuelas y hospitales. ¿Qué se pierde y qué se gana?', en: 'An economist says Switzerland could buy all its cheese from France more cheaply and spend the subsidy money on schools and hospitals. What is lost and what is gained?' },
          questions: [
            { q: { es: '¿Tu país ayuda a los agricultores? ¿Te parece justo?', en: 'Does your country support farmers? Do you think it’s fair?' }, help: { es: 'Sí, con… y me parece… / No, y…', en: 'Yes, with… and I think… / No, and…' }, follow: [{ es: '¿Quién se beneficia más?', en: 'Who benefits most?' }, { es: '¿Qué cambiarías?', en: 'What would you change?' }] },
            { q: { es: '¿Pagarías más impuestos para mantener una tradición?', en: 'Would you pay more tax to keep a tradition alive?' }, help: { es: 'Sí, si es… / No, porque…', en: 'Yes, if it’s… / No, because…' }, follow: [{ es: '¿Qué tradición?', en: 'Which tradition?' }, { es: '¿Cuánto pagarías?', en: 'How much would you pay?' }] },
            { q: { es: '¿Es mejor producir en tu país o comprar lo más barato fuera?', en: 'Is it better to produce at home or buy the cheapest abroad?' }, help: { es: 'Depende del producto… / Prefiero producir porque…', en: 'It depends on the product… / I prefer producing because…' }, follow: [{ es: '¿Y en una crisis?', en: 'And in a crisis?' }, { es: '¿Lo viste en la pandemia?', en: 'Did you see it in the pandemic?' }] },
            { q: { es: '¿Qué forma de vida está desapareciendo en tu país?', en: 'What way of life is disappearing in your country?' }, help: { es: 'Está desapareciendo… porque…', en: '… is disappearing because…' }, follow: [{ es: '¿Hay que salvarla?', en: 'Should it be saved?' }, { es: '¿Cómo?', en: 'How?' }] },
          ],
          words: [{ es: 'las ayudas', en: 'the subsidies' }, { es: 'el prado', en: 'the meadow' }, { es: 'permitirse', en: 'to afford' }, { es: 'ecológico', en: 'organic' }, { es: 'el extranjero', en: 'abroad' }],
        },
      },
    },
  ],
};
