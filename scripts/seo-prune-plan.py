#!/usr/bin/env python3
"""Builds docs/seo-plan/04_PLAN_PODA.csv: one row per audited URL with the action
(mantener / enriquecer / 301 / noindex), destination, reason and execution batch.
Rule: one intent = one URL. Redirect chains are resolved to the final destination.
Usage: python3 scripts/seo-prune-plan.py docs/seo-plan/01_AUDITORIA.csv out.csv"""
import csv, re, sys
from collections import Counter, defaultdict

audit_path, out_path = sys.argv[1:3]
A = {r['url'].replace('https://spanishcue.com', ''): r for r in csv.DictReader(open(audit_path))}
imp = lambda p: int(A[p]['impresiones_90d'] or 0)
clk = lambda p: int(A[p]['clics_90d'] or 0)

MINI_HUB = {  # exercise intent already owned by an interactive hub
    'ser-y-estar': '/ser-o-estar', 'por-y-para': '/por-o-para',
    'indefinido-e-imperfecto': '/indefinido-o-imperfecto', 'indicativo-o-subjuntivo': '/indicativo-o-subjuntivo',
    'imperativo': '/ejercicios-de-imperativo', 'gustar': '/ejercicios-de-gustar', 'pronombres-de-objeto': '/ejercicios-de-pronombres',
}
MINI_FAMILIES = ('/ser-o-estar/', '/por-o-para/', '/indefinido-o-imperfecto/', '/indicativo-o-subjuntivo/',
                 '/ejercicios-de-imperativo/', '/ejercicios-de-gustar/', '/ejercicios-de-pronombres/')
EXTRA_301 = {}
NOINDEX_EXTRA = {}
OWNER_KEEP = {
    '/online-spanish-teaching-resources': 'Landing de marketing (app/marketing-landing) que pueden usar campañas: no se redirige. Grupo Q1 con /spanish-teacher-resources: se diferencia por título (paso 6), la intención informativa queda en /spanish-teacher-resources.',  # indexable by explicit owner decision (app/seo.ts indexedPurchaseLandingPaths)
    '/lp/online-spanish-teaching-resources': 'Landing de compra indexable por decisión del dueño (app/seo.ts). Solapa con /spanish-teacher-resources (grupo Q7): se diferencia por título comercial, sin tocar su indexación.',
    '/lp/spanish-teacher-resources': 'Landing de compra indexable por decisión del dueño (app/seo.ts).',
}
Q2_GUIDES = {
    '/guides/how-to-teach-spanish-online': 'Grupo Q2: dueña única de «how to teach spanish online». Las otras dos guías se reenfocan en su intención propia (paso 6), sin 301.',
    '/guides/first-online-spanish-lesson': 'Grupo Q2: reenfocar título y H1 en «first online Spanish lesson» (hoy atrae búsquedas de alumno en la posición 76); sin 301.',
    '/guides/teach-spanish-for-travel-online': 'Grupo Q2: reenfocar en «Spanish for travel» para el profe; sin 301.',
}
DO_NOT_TOUCH = ('/material-ele/fichas-gratis',)  # reserved for outreach (2026-11-19 rule)

plan = {}
def put(p, action, dest='', reason='', batch=''):
    plan[p] = [action, dest, reason, batch]

for p, r in A.items():
    ix = r['indexable']
    seg = p.strip('/').split('/')
    if ix != 'sí' and '/acceso' in ix:
        put(p, 'no indexable (clase PRO)', '', 'Ruta de clase PRO: responde 302 a /acceso. La señal pública la recibe su ficha /recursos y /resources (paso 8: enlace canónico a la ficha).')
        continue
    if ix != 'sí':
        m = re.search(r'→ (\S+)\)', ix)
        put(p, 'ya redirige' if m else 'no indexable', m.group(1) if m else '', f'Estado actual: {ix}.')
        continue
    if p.startswith(DO_NOT_TOUCH):
        put(p, 'mantener', '', 'Página reservada para outreach (regla del 19/11): no se toca.')
    elif p in OWNER_KEEP:
        put(p, 'mantener', '', OWNER_KEEP[p])
    elif p in EXTRA_301:
        put(p, '301', *EXTRA_301[p])
    elif p in NOINDEX_EXTRA:
        put(p, 'noindex', '', NOINDEX_EXTRA[p], 'N5')
    elif p.startswith('/material-ele/preguntas/'):
        put(p, 'noindex', '', f'Variante por nivel con el mismo título («10 preguntas de conversación») y plantilla {r["similitud_plantilla_pct"]}%; la intención la cubre /material-ele/preguntas-de-conversacion.', 'N5')
    elif re.match(r'^/spanish-grammar-lessons/(a1|a2|b1|b2|c1|c2)$', p) and imp(p) == 0:
        put(p, 'noindex', '', 'Variante por nivel con el mismo título que /spanish-grammar-lessons y 0 impresiones.', 'N5')
    elif p in Q2_GUIDES:
        put(p, 'mantener', '', Q2_GUIDES[p])
    elif p.startswith('/spanish-verbs'):
        put(p, 'noindex', '', 'Conjugación en inglés: 1.259 URLs de hace 1 día, sin enlaces internos; SERP de «tener conjugation» dominada por SpanishDict/WordReference y fuera del comprador. Quitar del sitemap y del hreflang de /conjugacion.', 'N1')
    elif p.startswith('/conjugacion/') and not p.startswith('/conjugacion/irregulares'):
        put(p, 'noindex', '', 'Tabla de conjugación de plantilla (1.259 verbos publicados en 1 día); SERP dominada por WordReference, Reverso y RAE. Útil para el usuario, no para el índice. Se mantienen indexables /conjugacion y /conjugacion/irregulares/*.', 'N2')
    elif p.startswith('/verbos-con-preposicion/'):
        put(p, 'noindex', '', 'Subpágina por verbo de una familia de 54 URLs de hace 1 día (plantilla 56%). La intención «verbos con preposición» la cubre el hub.', 'N3')
    elif p.startswith(MINI_FAMILIES):
        hub = '/' + seg[0]
        put(p, 'noindex', '', f'Subpágina por regla de una mini-app (plantilla {r["similitud_plantilla_pct"]}%); la intención de ejercicios la cubre {hub}.', 'N3')
    elif len(seg) == 3 and seg[:2] == ['material-ele', 'ejercicio'] and seg[2] in MINI_HUB:
        put(p, '301', MINI_HUB[seg[2]], f'Misma intención «ejercicios de {seg[2].replace("-", " ")}» que la mini-app interactiva, que tiene más ítems y explica cada respuesta. {imp(p)} impresiones en 90 días.')
    elif len(seg) >= 3 and seg[:2] == ['material-ele', 'gramatica'] and f'/material-ele/{seg[2]}' in A:
        put(p, '301', f'/material-ele/{seg[2]}', f'Duplica la página de tema /material-ele/{seg[2]} (misma intención docente); la de destino concentra las impresiones.')
    elif len(seg) == 4 and seg[0] == 'material-ele' and seg[1] in ('gramatica', 'vocabulario', 'funciones', 'cultura', 'formatos'):
        if imp(p) == 0 and clk(p) == 0:
            put(p, 'noindex', '', f'Variante por nivel de /{"/".join(seg[:3])} con el mismo título sin nivel y 0 impresiones en 27 días (similitud con la hermana más cercana {r["similitud_hermana_max_pct"]}%).', 'N4')
        else:
            put(p, 'enriquecer' if int(r['similitud_plantilla_pct']) >= 40 else 'mantener', '', f'Variante por nivel con demanda medida ({imp(p)} impresiones, {clk(p)} clics): se queda.')
    elif r['veredicto'] == 'enriquecer':
        put(p, 'enriquecer', '', f'Plantilla {r["similitud_plantilla_pct"]}%: necesita texto propio.')
    else:
        put(p, 'mantener', '', 'Sin conflicto de intención detectado.' if not r['canibalizacion_grupo'] else f'Grupo {r["canibalizacion_grupo"]}: revisado, intención distinta o par de idioma con hreflang.')

# Resolve chains: a destination that itself redirects points to its final target.
def final(p, seen=()):
    a = plan.get(p)
    if a and a[0] in ('301', 'ya redirige') and a[1] and a[1] not in seen:
        return final(a[1], seen + (p,))
    return p
chains = 0
for p, a in plan.items():
    if a[0] in ('301', 'ya redirige') and a[1]:
        f = final(a[1], (p,))
        if f == p: raise SystemExit(f'loop at {p}')
        if f != a[1]:
            chains += 1
            a[2] += f' Cadena resuelta: {a[1]} ya redirigía, el destino final es {f}.'
            a[1] = f
            if a[0] == 'ya redirige': a[0] = '301 (corregir cadena)'
    if a[0] in ('301', '301 (corregir cadena)'):
        d = plan.get(a[1])
        if d and d[0] == 'noindex': raise SystemExit(f'301 to noindex: {p} -> {a[1]}')

# 301 batches of at most 20 URLs, keeping each destination's sources in the same batch
# (a parent and its level pages move together, so no live page links to a redirected one).
groups = defaultdict(list)
for p, a in plan.items():
    if a[0].startswith('301'): groups[a[1]].append(p)
batches, cur = [], []
for dest in sorted(groups, key=lambda d: (not d.startswith(('/ser-o', '/por-o', '/indef', '/indic', '/ejercicios-de')), d)):
    g = sorted(groups[dest])
    if len(cur) + len(g) > 20: batches.append(cur); cur = []
    cur += g
if cur: batches.append(cur)
for i, b in enumerate(batches):
    for p in b: plan[p][3] = f'R{i + 1}'

with open(out_path, 'w', newline='') as f:
    w = csv.writer(f); w.writerow(['url', 'accion', 'destino', 'motivo', 'lote', 'impresiones_90d', 'clics_90d', 'veredicto_auditoria'])
    for p in sorted(plan):
        a = plan[p]
        w.writerow(['https://spanishcue.com' + p, a[0], ('https://spanishcue.com' + a[1]) if a[1].startswith('/') else a[1], a[2], a[3], imp(p), clk(p), A[p]['veredicto']])
c = Counter(a[0] for a in plan.values()); print(len(plan), dict(c), 'chains', chains)
print(Counter(a[3] for a in plan.values() if a[3]))
