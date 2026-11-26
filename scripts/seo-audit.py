#!/usr/bin/env python3
"""Builds docs/seo-plan/01_AUDITORIA.csv from a local crawl (scripts/seo-crawl.mjs)
and Search Console exports (Windsor, 90 days).
Usage: python3 scripts/seo-audit.py crawl.jsonl gsc_page.json gsc_query_page.json out.csv"""
import csv, json, os, re, subprocess, sys
from datetime import date
from collections import Counter, defaultdict, deque

crawl_path, gsc_page_path, gsc_qp_path, out_path = sys.argv[1:5]
rows = [json.loads(l) for l in open(crawl_path) if l.strip()]
by_path = {r['path']: r for r in rows}

def norm(url):
    p = re.sub(r'^https?://[^/]+', '', url).split('#')[0]
    return p.split('?')[0] or '/'

gsc = defaultdict(lambda: {'clicks': 0, 'impressions': 0, 'pos_w': 0.0})
raw = json.load(open(gsc_page_path))
for x in (raw['data'] if isinstance(raw, dict) else raw):
    g = gsc[norm(x['page'])]
    g['clicks'] += x['clicks']; g['impressions'] += x['impressions']; g['pos_w'] += x['position'] * x['impressions']
qp = json.load(open(gsc_qp_path))
query_pages = defaultdict(set)
for x in qp:
    query_pages[x['query'].lower()].add(norm(x['page']))

# Route type: first segment, plus the second when it is a literal shared by many URLs.
seg2 = Counter(p.split('/')[2] for p in by_path if p.count('/') >= 3)
def route(p):
    s = p.strip('/').split('/')
    if p == '/': return '/'
    if len(s) == 1: return '/' + s[0]
    if len(s) >= 3 and seg2[s[1]] >= 5: return f'/{s[0]}/{s[1]}/' + '/'.join(['*'] * (len(s) - 2))
    return f'/{s[0]}/' + '/'.join(['*'] * (len(s) - 1))

def shingles(text, n=6):
    w = re.findall(r'\w+', text.lower())
    return {' '.join(w[i:i + n]) for i in range(max(len(w) - n + 1, 0))}

html = [r for r in rows if r.get('status') == 200 and r.get('text') is not None]
groups = defaultdict(list)
for r in html: groups[route(r['path'])].append(r)
sh = {r['path']: shingles(r['text']) for r in html}
# Site-wide boilerplate (navigation, footer, newsletter box) counts as template too.
site_df = Counter(s for r in html for s in sh[r['path']])
site_cut = max(20, int(0.2 * len(html)))
template = {}
for key, pages in groups.items():
    df = Counter(s for r in pages for s in sh[r['path']])
    cut = max(3, int(0.3 * len(pages))) if len(pages) >= 4 else 10**9
    for r in pages:
        S = sh[r['path']]
        if not S: template[r['path']] = 1.0; continue
        t = sum(1 for s in S if df[s] >= cut or site_df[s] >= site_cut)
        template[r['path']] = t / len(S)

# Nearest sibling: highest Jaccard of page-specific shingles with another page of the same type.
# Above 0.8 the two pages say nearly the same thing with different slugs.
nearest = {}
for key, pages in groups.items():
    own = {r['path']: {s for s in sh[r['path']] if site_df[s] < site_cut} for r in pages}
    keys = list(own)
    for i, a in enumerate(keys):
        A = own[a]; best = 0.0
        if A:
            for b in keys:
                if b == a: continue
                B = own[b]
                if not B: continue
                inter = len(A & B)
                if inter:
                    j = inter / (len(A) + len(B) - inter)
                    if j > best: best = j
        nearest[a] = best

# Age of the route family: first commit that added its app/ directory. Search Console
# silence means nothing for a family younger than about four weeks.
TODAY = date.fromisoformat(os.environ.get('AUDIT_DATE', date.today().isoformat()))
_age = {}
def family_dir(p):
    s = [x for x in p.strip('/').split('/') if x]
    for n in range(min(len(s), 2), 0, -1):
        d = 'app/' + '/'.join(s[:n])
        if os.path.isdir(d): return d
    if s and s[0] == 'material-ele' and len(s) >= 3: return 'app/material-ele/[slug]/[tema]'
    if s and s[0] == 'material-ele': return 'app/material-ele/[slug]'
    return 'app/page.tsx' if not s else None
def family_age(p):
    d = family_dir(p)
    if d is None: return ''
    if d not in _age:
        out = subprocess.run(['git', 'log', '--diff-filter=A', '--format=%as', '--', d], capture_output=True, text=True).stdout.split()
        _age[d] = (TODAY - date.fromisoformat(out[-1])).days if out else ''
    return _age[d]

# Click depth from the home page through internal links.
depth = {'/': 0}; q = deque(['/'])
while q:
    p = q.popleft(); r = by_path.get(p)
    for l in (r or {}).get('links', []):
        l = l.split('?')[0]
        if l in by_path and l not in depth:
            depth[l] = depth[p] + 1; q.append(l)

def indexable(r):
    if r.get('status') != 200: return f"no ({r.get('status')}{' → ' + r['location'] if r.get('location') else ''})"
    rob = (r.get('robots') or '') + ' ' + (r.get('xRobots') or '')
    if 'noindex' in rob: return 'no (noindex)'
    c = r.get('canonical')
    if c and norm(c) != r['path']: return f'no (canonical → {norm(c)})'
    return 'sí'

INTENT = [
    (r'^/conjugacion', 'alumno/profe · referencia: conjugación de un verbo'),
    (r'^/spanish-verbs', 'alumno EN · referencia: conjugación'),
    (r'^/(ser-o-estar|por-o-para|indefinido-o-imperfecto|indicativo-o-subjuntivo|verbos-con-preposicion|ejercicios-de-|dudas-del-espanol)', 'alumno/profe · ejercicio interactivo de una regla'),
    (r'^/material-ele/ejercicio', 'profe/alumno · ejercicio con soluciones'),
    (r'^/material-ele/actividad', 'profe · actividad de clase'),
    (r'^/material-ele/(ficha|fichas-gratis)', 'profe · ficha de una clase'),
    (r'^/material-ele/guia', 'profe · guía didáctica'),
    (r'^/material-ele/formatos', 'profe · material por formato y nivel'),
    (r'^/material-ele/(gramatica|vocabulario|cultura|funciones)', 'profe · material por tema y nivel'),
    (r'^/material-ele', 'profe · material de un tema'),
    (r'^/recursos', 'profe ES · ficha de clase'),
    (r'^/resources', 'profe EN · ficha de clase'),
    (r'^/guides', 'profe EN · guía de negocio/didáctica'),
    (r'^/gramatica', 'profe · clase interactiva (producto)'),
    (r'^/autoestudio', 'alumno · autoestudio'),
    (r'^/(pricing|precios|academias|alternativa)', 'comprador · comercial'),
    (r'^/spanish-', 'profe EN · hub'),
]
def intent(p):
    for rx, label in INTENT:
        if re.search(rx, p): return label
    return 'otra'

# Topic key: slug words without levels and stop words, to spot pages of different
# types that answer the same need.
STOP = set('de del la las el los y e o u en a con para por un una al que es clase gramatica spanish lesson grammar activity conversation actividad ficha ejercicios ejercicio material ele a1 a2 b1 b2 c1 c2 a0 de-'.split())
def topic(p):
    last = [w for w in re.split(r'[-/]', p.strip('/').split('/')[-1]) if w and w not in STOP]
    return '-'.join(sorted(last)[:4])
topic_pages = defaultdict(list)
for r in html:
    if indexable(r) == 'sí': topic_pages[topic(r['path'])].append(r['path'])
cannibal = {}
gid = 0
for qy, pages in query_pages.items():
    pages = {p for p in pages if p in by_path}
    if len(pages) >= 2:
        gid += 1
        for p in pages: cannibal.setdefault(p, f'Q{gid}:{qy[:40]}')
title_norm = defaultdict(list)
for r in html:
    t = re.sub(r'\|\s*spanishcue.*$', '', (r.get('title') or '').lower())
    t = re.sub(r'\b(a1|a2|b1|b2|c1|c2)\b', '', t); t = re.sub(r'\W+', ' ', t).strip()
    if t: title_norm[t].append(r['path'])
for t, pages in title_norm.items():
    if len(pages) >= 2:
        gid += 1
        for p in pages: cannibal.setdefault(p, f'T{gid}:{t[:40]}')

def verdict(r, ix, tp, g, grp, near, age):
    if ix != 'sí': return 'mantener (no indexable, revisar destino)'
    imp, clk = g['impressions'], g['clicks']
    if clk > 0 or imp >= 20: return 'enriquecer' if tp >= 0.6 else 'mantener'
    if grp: return 'consolidar'
    if near >= 0.8: return 'consolidar'
    if tp >= 0.85: return 'noindex (candidata)'
    if age != '' and age >= 28 and imp == 0 and tp >= 0.5: return 'noindex (candidata)'
    if tp >= 0.6: return 'enriquecer'
    return 'mantener'

fields = ['url', 'tipo', 'clics_90d', 'impresiones_90d', 'posicion_media', 'intencion', 'similitud_plantilla_pct', 'similitud_hermana_max_pct', 'texto_propio_palabras', 'edad_familia_dias', 'click_depth', 'indexable', 'canibalizacion_grupo', 'veredicto', 'title', 'h1']
with open(out_path, 'w', newline='') as f:
    w = csv.writer(f, lineterminator='\n'); w.writerow(fields)
    for r in sorted(rows, key=lambda r: r['path']):
        p = r['path']; g = gsc[p]; ix = indexable(r)
        tp = template.get(p, 0.0)
        words = len(re.findall(r'\w+', r.get('text') or ''))
        grp = cannibal.get(p, '')
        w.writerow([
            'https://spanishcue.com' + p, route(p), g['clicks'], g['impressions'],
            round(g['pos_w'] / g['impressions'], 1) if g['impressions'] else '',
            intent(p), round(tp * 100), round(nearest.get(p, 0) * 100), round(words * (1 - tp)), family_age(p),
            depth.get(p, 'huérfana (solo sitemap/hreflang)'), ix, grp,
            verdict(r, ix, tp, g, grp, nearest.get(p, 0), family_age(p)), (r.get('title') or '')[:120], ' | '.join(r.get('h1') or [])[:120],
        ])
print(f'{len(rows)} URLs → {out_path}')
