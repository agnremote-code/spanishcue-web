import ts from 'typescript';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const REGISTRY_PATH = 'docs/audits/neutral-spanish-20261003/exemptions.json';
export const SOURCE_EXTENSION = /\.(?:[cm]?[jt]sx?|json|txt)$/;
export const CONTENT_ROOTS = ['app', 'components', 'lib', 'content', 'data', 'public', 'server', 'worker'];
const certain = new Set(`vos sos tenés querés podés venís hacés sabés decís pensás creés sentís seguís elegís vivís salís ponés traés oís dormís pedís preferís entendés conocés necesitás buscás hablás usás mirá escuchá probá completá arrastrá tocá marcá respondé contá compará pensá imaginá practicá observá ordená relacioná seleccioná elegí revisá buscá encontrá identificá prepará creá inventá explicá trabajá hablá usá jugá armá tomá dejá cambiá agregá ayudá mostrá recordá intentá evitá cerrá abrí leé hacé poné vení salí tené andá fijate sentate levantate quedate animate acordate imaginate decilo hacelo miralo probalo contame decime mostrame contanos ayudanos miralos miralas escuchalo escuchala escuchalos escuchalas escribilo escribila escribime escribinos respondeme respondé comparalo pensalo imaginalo seguime seguinos repetilo repetila sentite ponelo ponela proponé proponelo resolvé resolvelo elegilo elegila elegilos elegilas leelo leela leelos leelas usalo usala usalos usalas mové movelo movela buscame buscá escuchame escuchanos tomate llevá llevate fijate asegurate preparate conectá descargá compartí iniciá intentá reintentá ingresá confirmá recargá filtrá volvé pagás vinculás aceptás continuá avanzá retrocedé empezá comenzá terminá finalizá cancelá aceptá guardá enviá eliminá borrá activá desactivá registrá conectate desconectá entrá salí accedé permití autorizá verificá validá actualizá añadí incorporá generá imprimí abrí cerrá volvé retorná regresá anotá sumá restá dividí multiplicá reemplazá sustituí señalá describí defendé debatí justificá argumentá negociá participá formá uní uníte reuní reunite proponé suponé sostené mantené obtené retené convertí evitá prestá apretá pulsá elegís compartís jugás bailás tomás mirás escuchás probás hablás comprás comés estudiás trabajás vivís preguntás respondés aprendés entendés volvés pertenecés parecés podés sentís venís ponés traés conocés ofrecés merecés agradecés resolvés cumplís asistís existís recibís abrís descubrís decidís pedís leés escribís`.split(/\s+/));
// These are also valid first-person past forms: a human reviews their sentence.
const ambiguous = new Set(`elegí seguí repetí sentí escribí decí abrí viví salí subí compartí recibí descubrí decidí pedí dormí partí permití aprendí comprendí entendí respondí cumplí serví insistí discutí existí resolví incluí construí contribuí distribuí consumí asumí recurrí acudí sufrí admití añadí describí perdí bebí comí corrí vendí asistí dale`.split(' '));
const ignoredAttributes = /^(?:className|id|key|href|src|type|role|target|rel|style|data-.+|aria-hidden)$/;
const propertyName = node => node && (ts.isIdentifier(node) || ts.isStringLiteralLike(node) || ts.isNumericLiteral(node)) ? node.text : '';
const englishKey = key => key === 'en' || key === 'english' || /(?:_en|En)$/.test(key);
const spanishKey = key => key === 'es' || key === 'spanish' || /(?:_es|Es)$/.test(key);
export function isEnglishPath(path) { return path.startsWith('app/guides/') || /(?:^|\/)(?:en|english)(?:\/|\.)|(?:[._-]en)\.[^/]+$/.test(path); }

/** Extract runtime copy using the TypeScript parser; identifiers/comments are never text. */
export function extractCopy(source, path) {
  if (path.endsWith('.txt')) return source.split(/\r?\n/).map((text, i) => ({ path, line: i + 1, text, language: isEnglishPath(path) ? 'en' : 'unknown', field: '' })).filter(c => c.text.trim());
  const sf = path.endsWith('.json') ? ts.parseJsonText(path, source) : ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, /\.[jt]sx$/.test(path) ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const aliases = new Map([['es', 'es'], ['isSpanish', 'es'], ['isEnglish', 'en'], ['isEn', 'en'], ['isEs', 'es']]);
  function conditionLanguage(node) {
    if (ts.isParenthesizedExpression(node)) return conditionLanguage(node.expression);
    if (ts.isIdentifier(node)) return aliases.get(node.text);
    if (ts.isPrefixUnaryExpression(node) && node.operator === ts.SyntaxKind.ExclamationToken) {
      const lang = conditionLanguage(node.operand); return lang === 'es' ? 'en' : lang === 'en' ? 'es' : undefined;
    }
    if (ts.isBinaryExpression(node) && [ts.SyntaxKind.EqualsEqualsEqualsToken, ts.SyntaxKind.EqualsEqualsToken, ts.SyntaxKind.ExclamationEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken].includes(node.operatorToken.kind)) {
      const literal = ts.isStringLiteral(node.right) ? node.right : ts.isStringLiteral(node.left) ? node.left : null;
      const other = literal === node.right ? node.left : node.right;
      if (literal && /(?:locale|lang|language)/i.test(other.getText(sf)) && ['en','es'].includes(literal.text)) {
        const negate = [ts.SyntaxKind.ExclamationEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken].includes(node.operatorToken.kind);
        return negate ? (literal.text === 'es' ? 'en' : 'es') : literal.text;
      }
    }
  }
  function collectAliases(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      const lang = conditionLanguage(node.initializer); if (lang) aliases.set(node.name.text, lang);
    }
    ts.forEachChild(node, collectAliases);
  }
  collectAliases(sf);
  const bilingualFactories = new Set(['t']);
  const pairFields = new Set();
  function collectBilingual(node) {
    if ((ts.isArrowFunction(node) || ts.isFunctionExpression(node) || ts.isFunctionDeclaration(node)) && node.parameters.length >= 2 && propertyName(node.parameters[0].name) === 'es' && propertyName(node.parameters[1].name) === 'en') {
      const name = node.name || (ts.isVariableDeclaration(node.parent) ? node.parent.name : null);
      if (name) bilingualFactories.add(propertyName(name));
    }
    if (ts.isPropertySignature(node) && node.type && /\bPair\b/.test(node.type.getText(sf))) pairFields.add(propertyName(node.name));
    ts.forEachChild(node, collectBilingual);
  }
  collectBilingual(sf);
  function isPairArray(node) {
    if (node.elements.length !== 2 || !node.elements.every(n => ts.isStringLiteralLike(n) || ts.isTemplateExpression(n))) return false;
    for (let parent = node.parent; parent && !ts.isSourceFile(parent); parent = parent.parent) {
      if (ts.isVariableDeclaration(parent)) return !!parent.type && /\bPair\b/.test(parent.type.getText(sf));
      if (ts.isPropertyAssignment(parent)) return pairFields.has(propertyName(parent.name));
      if ((ts.isAsExpression(parent) || ts.isSatisfiesExpression(parent)) && /\bPair\b/.test(parent.type.getText(sf))) return true;
    }
    return false;
  }
  const copy = [];
  function visit(node, lang = isEnglishPath(path) ? 'en' : 'unknown', fields = []) {
    if (ts.isTypeNode(node) || ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return;
    if (ts.isVariableDeclaration(node) && node.initializer) {
      const key = propertyName(node.name);
      visit(node.initializer, englishKey(key) ? 'en' : spanishKey(key) ? 'es' : lang, fields); return;
    }
    if (ts.isPropertyAssignment(node)) {
      const key = propertyName(node.name);
      visit(node.initializer, (englishKey(key) || (key === 'support' && path.startsWith('app/autoestudio/curriculum/modules/'))) ? 'en' : spanishKey(key) ? 'es' : lang, [...fields, key]); return;
    }
    if (ts.isJsxAttribute(node)) {
      const key = propertyName(node.name);
      if (ignoredAttributes.test(key)) return;
      if (node.initializer) visit(node.initializer, lang, [...fields, key]); return;
    }
    if (ts.isArrayLiteralExpression(node) && isPairArray(node)) {
      visit(node.elements[0], 'es', fields); visit(node.elements[1], 'en', fields); return;
    }
    if (ts.isConditionalExpression(node)) {
      const branch = conditionLanguage(node.condition);
      visit(node.whenTrue, branch || lang, fields);
      visit(node.whenFalse, branch ? (branch === 'es' ? 'en' : 'es') : lang, fields); return;
    }
    if (ts.isCallExpression(node) && node.arguments.length === 2 && bilingualFactories.has(node.expression.getText(sf))) {
      visit(node.arguments[0], 'es', fields); visit(node.arguments[1], 'en', fields); return;
    }
    let value;
    if (ts.isStringLiteralLike(node)) value = node.text;
    else if (ts.isJsxText(node)) value = node.text.trim();
    else if (ts.isTemplateExpression(node)) value = node.head.text + node.templateSpans.map(s => '${' + s.expression.getText(sf) + '}' + s.literal.text).join('');
    if (value !== undefined) {
      if (value.trim()) copy.push({ path, line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1, text: value, language: lang, field: fields.join('.') });
      if (ts.isTemplateExpression(node)) for (const span of node.templateSpans) visit(span.expression, lang, fields);
      return;
    }
    ts.forEachChild(node, child => visit(child, lang, fields));
  }
  visit(sf);
  return copy;
}

export function validateRegistry(registry) {
  if (registry.version !== 1 || !Array.isArray(registry.exemptions)) throw new Error('Expected registry version 1 and exemptions array');
  for (const e of registry.exemptions) {
    if (!e.path || typeof e.text !== 'string' || !e.text || /[*?]/.test(e.path) || !e.reason?.trim() || !['regional-pedagogy', 'authentic-transcript', 'neutral-context'].includes(e.category)) {
      throw new Error('Every exemption requires an exact path, exact text, category and reason; whole-file exemptions are forbidden');
    }
  }
}
export function scanSource(source, path, registry = { version: 1, exemptions: [] }) {
  validateRegistry(registry);
  const exempt = new Set(registry.exemptions.filter(e => e.path === path).map(e => e.text));
  const findings = [];
  for (const copy of extractCopy(source, path)) {
    if (copy.language === 'en' || exempt.has(copy.text)) continue;
    // Tokenization uses Unicode letters/marks, not JS's ASCII-only \b (vosotros is safe).
    for (const match of copy.text.normalize('NFC').matchAll(/[\p{L}\p{M}]+/gu)) {
      const token = match[0]; const lower = token.toLocaleLowerCase('es');
      if (certain.has(lower) || ambiguous.has(lower)) findings.push({ ...copy, token, kind: ambiguous.has(lower) ? 'context-review' : 'voseo' });
    }
  }
  return findings;
}
export function sourceFiles(root) {
  const paths = [];
  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
      const path = resolve(dir, entry.name);
      if (entry.isDirectory()) walk(path); else if (entry.isFile() && SOURCE_EXTENSION.test(path)) paths.push(relative(root, path).replaceAll('\\', '/'));
    }
  }
  for (const dir of CONTENT_ROOTS) if (existsSync(resolve(root, dir))) walk(resolve(root, dir));
  return paths.sort();
}
export function scanRepository(root, registry = { version: 1, exemptions: [] }) {
  return sourceFiles(root).flatMap(path => scanSource(readFileSync(resolve(root, path), 'utf8'), path, registry));
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = process.cwd();
  const registry = existsSync(resolve(root, REGISTRY_PATH)) ? JSON.parse(readFileSync(resolve(root, REGISTRY_PATH), 'utf8')) : { version: 1, exemptions: [] };
  const findings = scanRepository(root, registry);
  if (process.argv.includes('--json')) console.log(JSON.stringify(findings, null, 2));
  else {
    for (const f of findings) console.error(`${f.path}:${f.line} [${f.kind}] ${f.token}: ${JSON.stringify(f.text)}`);
    console.log(`Neutral Spanish guard: ${findings.length} unresolved findings across ${sourceFiles(root).length} source files.`);
  }
  process.exitCode = findings.length ? 1 : 0;
}
