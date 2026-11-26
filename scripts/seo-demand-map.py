#!/usr/bin/env python3
"""Builds the measurable columns of docs/seo-plan/02_MAPA_DEMANDA.csv from the raw
Google SERP capture (docs/seo-plan/serp/*.json), Search Console (query x page, 90 days)
and a hand-written judgement file (target URL, entities, gap, can-win) keyed by query.
Usage: python3 scripts/seo-demand-map.py serp.json gsc_query_page.json judgement.json out.csv"""
import csv, json, re, statistics, sys
from collections import Counter, defaultdict

serp_path, gsc_path, judge_path, out_path = sys.argv[1:5]
serp = json.load(open(serp_path))
pages = serp.get('pages', {})
judge = json.load(open(judge_path)) if judge_path != '-' else {}

def norm_q(q): return re.sub(r'\s+', ' ', q.lower().strip())
gsc = defaultdict(lambda: {'imp': 0, 'clk': 0, 'pos_w': 0.0, 'pages': Counter()})
for x in json.load(open(gsc_path)):
    g = gsc[norm_q(x['query'])]
    g['imp'] += x['impressions']; g['clk'] += x['clicks']; g['pos_w'] += x['position'] * x['impressions']
    g['pages'][x['page'].replace('https://spanishcue.com', '')] += x['impressions']

def fmt(url, p):
    """Dominant format of one ranking page, from what was measured on it."""
    u = url.lower()
    if 'youtube.com' in u or 'tiktok.com' in u: return 'vídeo'
    if u.endswith('.pdf'): return 'pdf'
    if any(d in u for d in ('pinterest.', 'teacherspayteachers', 'tes.com', 'wordwall', 'liveworksheets', 'quizlet')): return 'banco de recursos'
    if any(d in u for d in ('reddit.com', 'quora.com', 'forum')): return 'foro'
    ex = p.get('exercises')
    if (ex.get('has') if isinstance(ex, dict) else ex): return 'ejercicios'
    if p.get('pdf'): return 'ficha pdf'
    if (p.get('words') or 0) >= 1500: return 'guía larga'
    return 'artículo/lista'

fields = ['consulta', 'idioma', 'impresiones_gsc_90d', 'clics_gsc_90d', 'posicion_gsc', 'spanishcue_en_serp',
          'url_objetivo', 'top10_dominios', 'formato_dominante', 'palabras_mediana_top10', 'funciones_serp',
          'preguntas_paa', 'entidades', 'brecha_explotable', 'se_puede_ganar', 'fuente_serp']
with open(out_path, 'w', newline='') as f:
    w = csv.writer(f); w.writerow(fields)
    for q in serp['queries']:
        key = norm_q(q['query']); g = gsc.get(key); j = judge.get(key, {})
        org = q.get('organic') or []
        doms = [o.get('domain') or re.sub(r'^https?://(www\.)?([^/]+).*', r'\2', o['url']) for o in org[:10]]
        measured = [(o['url'], pages.get(o['url'], {})) for o in org[:10]]
        fm = Counter(fmt(u, p) for u, p in measured)
        words = [p['words'] for _, p in measured if isinstance(p.get('words'), int) and p['words'] > 0]
        feats = q.get('features') or {}
        flist = [k for k, v in feats.items() if v and not isinstance(v, (list, dict)) and k not in ('videos_block',)]
        if feats.get('ai_overview') and 'spanishcue.com' in (feats.get('ai_overview_domains') or []): flist.append('AIO cita spanishcue')
        paa = feats.get('paa') or feats.get('people_also_ask') or []
        w.writerow([
            q['query'], q.get('hl', ''), g['imp'] if g else 0, g['clk'] if g else 0,
            round(g['pos_w'] / g['imp'], 1) if g and g['imp'] else '',
            q.get('spanishcue_pos') or 'no',
            j.get('url_objetivo') or (g['pages'].most_common(1)[0][0] if g else ''),
            ' · '.join(f'{i + 1}.{d}' for i, d in enumerate(doms)),
            ', '.join(f'{k} {v}' for k, v in fm.most_common(3)),
            int(statistics.median(words)) if words else '',
            ', '.join(flist), ' | '.join(p if isinstance(p, str) else str(p) for p in paa[:4]),
            j.get('entidades', ''), j.get('brecha', ''), j.get('ganar', ''),
            f"Google hl={q.get('hl')} gl={q.get('gl')} · {serp.get('collected_at', '')} · {q.get('status', '')}",
        ])
print(f"{len(serp['queries'])} consultas → {out_path}")
