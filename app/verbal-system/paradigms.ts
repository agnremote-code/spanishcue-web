// International reference order; regional contrasts belong in each lesson's optional notes.
export const paradigmPersons = ["yo", "tú", "él / ella / usted", "nosotros / nosotras", "vosotros / vosotras", "ellos / ellas / ustedes"];
export type VerbParadigm = { person: string; hablar: string; comer: string; vivir: string }[];
const regular = (stems: string[], endings: string[][]): VerbParadigm => paradigmPersons.map((person, i) => ({
  person, hablar: stems[0] + endings[0][i], comer: stems[1] + endings[1][i], vivir: stems[2] + endings[2][i],
}));
const series = (text: string) => text.split(" ");
const compound = (auxiliary: string): VerbParadigm => series(auxiliary).map((form, i) => ({ person: paradigmPersons[i], hablar: `${form} hablado`, comer: `${form} comido`, vivir: `${form} vivido` }));
const endings = (ar: string, er: string, ir = er) => [series(ar), series(er), series(ir)];
const paired = (first: VerbParadigm, second: VerbParadigm): VerbParadigm => first.map((row, i) => ({person: row.person, hablar: `${row.hablar} / ${second[i].hablar}`, comer: `${row.comer} / ${second[i].comer}`, vivir: `${row.vivir} / ${second[i].vivir}`}));
const imperfectRa = regular(["habla", "comie", "vivie"], endings("ra ras ra ramos rais ran", "ra ras ra ramos rais ran"));
imperfectRa[3] = { person: paradigmPersons[3], hablar: "habláramos", comer: "comiéramos", vivir: "viviéramos" };
const imperfectSe = regular(["habla", "comie", "vivie"], endings("se ses se semos seis sen", "se ses se semos seis sen"));
imperfectSe[3] = { person: paradigmPersons[3], hablar: "hablásemos", comer: "comiésemos", vivir: "viviésemos" };
const futureSubjunctive = regular(["habla", "comie", "vivie"], endings("re res re remos reis ren", "re res re remos reis ren"));
futureSubjunctive[3] = { person: paradigmPersons[3], hablar: "habláremos", comer: "comiéremos", vivir: "viviéremos" };
export const verbalParadigms: Record<number, VerbParadigm> = {
  140: regular(["habl", "com", "viv"], endings("o as a amos áis an", "o es e emos éis en", "o es e imos ís en")),
  141: compound("he has ha hemos habéis han"),
  142: regular(["habl", "com", "viv"], endings("é aste ó amos asteis aron", "í iste ió imos isteis ieron")),
  143: regular(["habl", "com", "viv"], endings("aba abas aba ábamos abais aban", "ía ías ía íamos íais ían")),
  144: regular(["hablar", "comer", "vivir"], endings("é ás á emos éis án", "é ás á emos éis án")),
  145: [
    {person: "tú", hablar: "habla / no hables", comer: "come / no comas", vivir: "vive / no vivas"},
    {person: "usted", hablar: "hable / no hable", comer: "coma / no coma", vivir: "viva / no viva"},
    {person: "nosotros / nosotras", hablar: "hablemos / no hablemos", comer: "comamos / no comamos", vivir: "vivamos / no vivamos"},
    {person: "vosotros / vosotras", hablar: "hablad / no habléis", comer: "comed / no comáis", vivir: "vivid / no viváis"},
    {person: "ustedes", hablar: "hablen / no hablen", comer: "coman / no coman", vivir: "vivan / no vivan"},
  ],
  146: regular(["hablar", "comer", "vivir"], endings("ía ías ía íamos íais ían", "ía ías ía íamos íais ían")),
  147: compound("había habías había habíamos habíais habían"),
  148: regular(["habl", "com", "viv"], endings("e es e emos éis en", "a as a amos áis an")),
  149: compound("haya hayas haya hayamos hayáis hayan"),
  150: paired(imperfectRa, imperfectSe),
  151: paired(compound("hubiera hubieras hubiera hubiéramos hubierais hubieran"), compound("hubiese hubieses hubiese hubiésemos hubieseis hubiesen")),
  152: compound("habría habrías habría habríamos habríais habrían"),
  153: compound("habré habrás habrá habremos habréis habrán"),
  154: compound("hube hubiste hubo hubimos hubisteis hubieron"),
  155: futureSubjunctive,
  156: compound("hubiere hubieres hubiere hubiéremos hubiereis hubieren"),
};
