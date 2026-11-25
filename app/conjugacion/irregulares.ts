import type { Forms, VerbSpec } from "./engine";

const f = (s: string) => s.split(" ") as Forms;

/**
 * Every verb that does not follow the regular -ar/-er/-ir pattern plus the
 * automatic spelling changes (busqué, cojo, venzo, sigo, leyó, construyo).
 * Compounds point at their base (mantener → tener). Checked against a
 * reference table of 600+ fully conjugated verbs (see tests/conjugacion.test.mjs).
 */
export const irregulares: Record<string, VerbSpec> = {
  // Wholly irregular.
  ser: {
    participle: "sido", gerund: "siendo", impTu: "sé",
    full: {
      presente: f("soy eres es somos sois son"),
      imperfecto: f("era eras era éramos erais eran"),
      indefinido: f("fui fuiste fue fuimos fuisteis fueron"),
      subjPresente: f("sea seas sea seamos seáis sean"),
    },
  },
  ir: {
    participle: "ido", gerund: "yendo", impTu: "ve",
    full: {
      presente: f("voy vas va vamos vais van"),
      imperfecto: f("iba ibas iba íbamos ibais iban"),
      indefinido: f("fui fuiste fue fuimos fuisteis fueron"),
      subjPresente: f("vaya vayas vaya vayamos vayáis vayan"),
      imperativo: f("_ ve vaya vamos id vayan").map((x) => (x === "_" ? "" : x)) as Forms,
    },
  },
  estar: {
    pret: "estuv",
    full: {
      presente: f("estoy estás está estamos estáis están"),
      subjPresente: f("esté estés esté estemos estéis estén"),
    },
  },
  haber: {
    pret: "hub", fut: "habr", impTu: "he",
    full: {
      presente: f("he has ha hemos habéis han"),
      subjPresente: f("haya hayas haya hayamos hayáis hayan"),
    },
  },
  dar: {
    full: {
      presente: f("doy das da damos dais dan"),
      indefinido: f("di diste dio dimos disteis dieron"),
      subjPresente: f("dé des dé demos deis den"),
    },
  },
  ver: {
    yo: "veo", participle: "visto",
    full: {
      presente: f("veo ves ve vemos veis ven"),
      imperfecto: f("veía veías veía veíamos veíais veían"),
      indefinido: f("vi viste vio vimos visteis vieron"),
    },
  },
  saber: {
    pret: "sup", fut: "sabr",
    full: {
      presente: f("sé sabes sabe sabemos sabéis saben"),
      subjPresente: f("sepa sepas sepa sepamos sepáis sepan"),
    },
  },
  caber: { yo: "quepo", pret: "cup", fut: "cabr" },
  oír: {
    yo: "oigo", gerund: "oyendo", participle: "oído",
    full: { presente: f("oigo oyes oye oímos oís oyen") },
  },
  reír: {
    gerund: "riendo", participle: "reído",
    full: {
      presente: f("río ríes ríe reímos reís ríen"),
      indefinido: f("reí reíste rio reímos reísteis rieron"),
      subjPresente: f("ría rías ría riamos riais rían"),
    },
  },
  freír: { base: "reír", participle: "frito" },
  sonreír: { base: "reír" },
  // Strong preterites and irregular futures.
  tener: { stem: "ie", yo: "tengo", pret: "tuv", fut: "tendr", impTu: "ten" },
  venir: { stem: "ie", yo: "vengo", pret: "vin", fut: "vendr", impTu: "ven", gerund: "viniendo" },
  poner: { yo: "pongo", pret: "pus", fut: "pondr", impTu: "pon", participle: "puesto" },
  salir: { yo: "salgo", fut: "saldr", impTu: "sal" },
  valer: { yo: "valgo", fut: "valdr" },
  hacer: { yo: "hago", pret: "hic", fut: "har", impTu: "haz", participle: "hecho" },
  decir: {
    stem: "i", yo: "digo", pret: "dij", fut: "dir", impTu: "di", participle: "dicho", gerund: "diciendo",
  },
  traer: { yo: "traigo", pret: "traj" },
  caer: { yo: "caigo" },
  poder: { stem: "ue", pret: "pud", fut: "podr", gerund: "pudiendo" },
  querer: { stem: "ie", pret: "quis", fut: "querr" },
  andar: { pret: "anduv" },
  conducir: { yo: "conduzco", pret: "conduj" },
  yacer: { yo: "yazco" },
  satisfacer: { yo: "satisfago", pret: "satisfic", fut: "satisfar", impTu: "satisface", participle: "satisfecho" },
  bendecir: { stem: "i", yo: "bendigo", pret: "bendij", impTu: "bendice", gerund: "bendiciendo" },
  maldecir: { stem: "i", yo: "maldigo", pret: "maldij", impTu: "maldice", gerund: "maldiciendo" },
  predecir: { base: "decir", impTu: "predice" },
  contradecir: { base: "decir", impTu: "contradice" },
  errar: {
    full: {
      presente: f("yerro yerras yerra erramos erráis yerran"),
      subjPresente: f("yerre yerres yerre erremos erréis yerren"),
    },
  },
  agorar: { stem: "ue" },
  adquirir: { stem: "i>ie" },
  jugar: { stem: "u>ue" },
  oler: { stem: "o>hue" },
  // -ducir family: conduzco, conduje.
  producir: { yo: "produzco", pret: "produj" },
  traducir: { yo: "traduzco", pret: "traduj" },
  reducir: { yo: "reduzco", pret: "reduj" },
  introducir: { yo: "introduzco", pret: "introduj" },
  deducir: { yo: "deduzco", pret: "deduj" },
  inducir: { yo: "induzco", pret: "induj" },
  seducir: { yo: "seduzco", pret: "seduj" },
  reproducir: { yo: "reproduzco", pret: "reproduj" },
  // Compounds.
  mantener: { base: "tener" }, contener: { base: "tener" }, detener: { base: "tener" }, obtener: { base: "tener" },
  retener: { base: "tener" }, sostener: { base: "tener" }, entretener: { base: "tener" }, abstener: { base: "tener" },
  convenir: { base: "venir" }, intervenir: { base: "venir" }, prevenir: { base: "venir" }, provenir: { base: "venir" },
  componer: { base: "poner" }, disponer: { base: "poner" }, exponer: { base: "poner" }, imponer: { base: "poner" },
  oponer: { base: "poner" }, proponer: { base: "poner" }, suponer: { base: "poner" }, reponer: { base: "poner" },
  posponer: { base: "poner" }, descomponer: { base: "poner" }, presuponer: { base: "poner" }, anteponer: { base: "poner" },
  deshacer: { base: "hacer" }, rehacer: { base: "hacer" },
  atraer: { base: "traer" }, contraer: { base: "traer" }, distraer: { base: "traer" }, extraer: { base: "traer" },
  sustraer: { base: "traer" }, retraer: { base: "traer" },
  decaer: { base: "caer" }, recaer: { base: "caer" },
  sobresalir: { base: "salir" }, equivaler: { base: "valer" },
  prever: { base: "ver" }, entrever: { base: "ver" },
  rever: { base: "ver" },
  desoír: { base: "oír" },
  // Irregular participles on otherwise regular verbs.
  abrir: { participle: "abierto" }, cubrir: { participle: "cubierto" }, descubrir: { participle: "descubierto" },
  encubrir: { participle: "encubierto" }, recubrir: { participle: "recubierto" },
  escribir: { participle: "escrito" }, describir: { participle: "descrito" }, inscribir: { participle: "inscrito" },
  suscribir: { participle: "suscrito" }, prescribir: { participle: "prescrito" }, transcribir: { participle: "transcrito" },
  romper: { participle: "roto" }, imprimir: { participle: "impreso" },
  volver: { stem: "ue", participle: "vuelto" }, devolver: { stem: "ue", participle: "devuelto" },
  envolver: { stem: "ue", participle: "envuelto" }, desenvolver: { stem: "ue", participle: "desenvuelto" }, revolver: { stem: "ue", participle: "revuelto" },
  resolver: { stem: "ue", participle: "resuelto" }, disolver: { stem: "ue", participle: "disuelto" },
  absolver: { stem: "ue", participle: "absuelto" }, morir: { stem: "ue", participle: "muerto" },
  // -cer/-cir verbs with zc (conozco).
  ...Object.fromEntries(
    ("conocer reconocer desconocer parecer aparecer desaparecer comparecer nacer renacer crecer decrecer ofrecer merecer agradecer desagradecer " +
      "obedecer desobedecer pertenecer establecer restablecer favorecer permanecer enriquecer envejecer oscurecer florecer padecer fortalecer " +
      "entristecer amanecer anochecer atardecer carecer compadecer complacer acontecer enflaquecer enloquecer enorgullecer entorpecer " +
      "estremecer fallecer embellecer empobrecer endurecer engrandecer enmudecer ensordecer enternecer palidecer prevalecer resplandecer " +
      "rejuvenecer abastecer adolecer aborrecer agradecer apetecer convalecer enrojecer humedecer oscurecer desvanecer lucir relucir " +
      "estremecer esclarecer obscurecer languidecer")
      .split(/\s+/).filter(Boolean)
      .map((v) => [v, { yo: v.replace(/c(er|ir)$/, "zco") }]),
  ),
  // Stem changes e → ie.
  ...Object.fromEntries(
    ("pensar empezar comenzar cerrar despertar sentar recomendar calentar confesar gobernar negar regar fregar nevar temblar tropezar atravesar " +
      "apretar merendar quebrar sembrar encerrar enterrar acertar manifestar desplegar alentar helar segar renegar plegar " +
      "despertarse sentarse arrendar ascender atender defender descender encender entender extender perder tender verter " +
      "malentender trascender cegar remendar ingerir " +
      "sentir preferir mentir sugerir divertir convertir advertir herir hervir consentir arrepentir referir transferir invertir digerir requerir " +
      "interferir conferir presentir desmentir revertir pervertir")
      .split(/\s+/).filter(Boolean)
      .map((v) => [v, { stem: "ie" as const }]),
  ),
  // Stem changes o → ue.
  ...Object.fromEntries(
    ("contar encontrar mostrar recordar costar probar soñar volar sonar acostar almorzar colgar rogar forzar esforzar aprobar comprobar demostrar " +
      "renovar soltar tostar consolar apostar avergonzar acordar descontar recontar reprobar resonar tronar reforzar rodar soldar volcar " +
      "mover llover doler morder soler cocer torcer conmover promover remover moler " +
      "dormir")
      .split(/\s+/).filter(Boolean)
      .map((v) => [v, { stem: "ue" as const }]),
  ),
  // Stem changes e → i (-ir).
  ...Object.fromEntries(
    ("pedir servir repetir vestir medir despedir impedir competir gemir rendir concebir expedir derretir embestir investir " +
      "seguir conseguir perseguir proseguir corregir elegir regir reñir teñir ceñir desteñir " +
      "reelegir")
      .split(/\s+/).filter(Boolean)
      .map((v) => [v, { stem: "i" as const }]),
  ),
  // Accent on the stem vowel: envío, actúo, reúno, prohíbo.
  ...Object.fromEntries(
    ("enviar confiar fiar guiar variar criar desviar enfriar vaciar ampliar espiar resfriar fotografiar liar desconfiar " +
      "esquiar desafiar rociar")
      .split(/\s+/).filter(Boolean)
      .map((v) => [v, { stem: "í" as const }]),
  ),
  ...Object.fromEntries(
    ("actuar continuar evaluar graduar situar acentuar insinuar efectuar habituar perpetuar valuar devaluar exceptuar " +
      "reunir rehusar aullar maullar tatuar")
      .split(/\s+/).filter(Boolean)
      .map((v) => [v, { stem: "ú" as const }]),
  ),
  prohibir: { stem: "í" }, cohibir: { stem: "í" }, aislar: { stem: "í" }, enraizar: { stem: "í" },
  ...Object.fromEntries(
    ("vencer convencer ejercer esparcir zurcir fruncir mecer").split(" ").map((v) => [v, {}]),
  ),
};
