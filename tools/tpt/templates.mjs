// HTML templates for the printable TPT PDFs (A4, no site chrome).
import { BRAND, esc, rich } from './lib.mjs';

const PRINT_CSS = `
@page { size: A4; margin: 16mm 15mm 18mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 10.5pt/1.45 "Helvetica Neue", Arial, sans-serif; color: #1d2433; }
h1 { font-size: 21pt; line-height: 1.15; margin: 0 0 4pt; }
h2 { font-size: 14pt; margin: 18pt 0 6pt; padding-bottom: 3pt; border-bottom: 2px solid #e8590c; break-after: avoid; }
h3 { font-size: 11.5pt; margin: 12pt 0 4pt; break-after: avoid; }
p { margin: 0 0 6pt; }
ul, ol { margin: 0 0 6pt; padding-left: 16pt; }
li { margin: 0 0 2pt; }
.brand { font-weight: 800; letter-spacing: .18em; font-size: 8.5pt; color: #e8590c; }
.meta { color: #5b6475; font-size: 9pt; margin-bottom: 10pt; }
.pill { display: inline-block; border: 1px solid #c9cfdb; border-radius: 99px; padding: 0 7pt; margin-right: 4pt; font-size: 8.5pt; }
.lesson { break-before: page; }
.lesson:first-of-type { break-before: auto; }
table.plan { width: 100%; border-collapse: collapse; margin: 4pt 0 8pt; }
table.plan th, table.plan td { border: 1px solid #d5dae4; padding: 4pt 6pt; vertical-align: top; text-align: left; }
table.plan th { background: #f3f5f9; font-size: 9pt; }
table.plan td.min { width: 52pt; white-space: nowrap; font-weight: 700; }
table.plan td.stage { width: 95pt; font-weight: 700; }
tr, .item, .box, .section { break-inside: avoid; }
.box { border: 2px solid #1c7ed6; border-radius: 6pt; padding: 8pt 10pt; margin: 8pt 0; background: #f1f7ff; }
.box strong.t { display: block; margin-bottom: 3pt; }
.key { columns: 2; column-gap: 18pt; }
.key .section { margin-bottom: 6pt; }
.key ol { padding-left: 14pt; }
.namebar { display: flex; gap: 10pt; margin: 6pt 0 10pt; font-size: 10pt; }
.namebar span { flex: 1; border-bottom: 1px solid #333; padding-bottom: 2pt; }
.namebar span.short { flex: .45; }
.section { margin: 10pt 0 6pt; }
.section .ins { font-style: italic; color: #3b4456; margin-bottom: 4pt; }
.item { margin: 0 0 6pt; }
.opts { display: flex; flex-wrap: wrap; gap: 4pt 14pt; margin: 2pt 0 0 12pt; }
.opts span::before { content: "○ "; }
.line { border-bottom: 1px solid #8a93a6; height: 19pt; }
.bank { border: 1px dashed #8a93a6; padding: 4pt 8pt; margin: 4pt 0 6pt; border-radius: 4pt; }
.passage { background: #f7f8fb; border-left: 3px solid #e8590c; padding: 6pt 10pt; margin: 4pt 0 8pt; }
table.sort { border-collapse: collapse; width: 100%; }
table.sort td, table.sort th { border: 1px solid #c9cfdb; padding: 3pt 6pt; }
table.sort td.c { width: 70pt; text-align: center; }
.footer { margin-top: 14pt; font-size: 8pt; color: #7a8294; border-top: 1px solid #e2e6ee; padding-top: 4pt; }
`;

function page(title, body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${PRINT_CSS}</style></head><body>${body}</body></html>`;
}

function header(resource, kind) {
  return `<div class="brand">${BRAND} · ${esc(kind)}</div>
<h1>${esc(resource.title)}</h1>
<div class="meta"><span class="pill">Grades ${esc(resource.grade_range)}</span><span class="pill">${esc(resource.level_label)}</span><span class="pill">${esc(resource.time_label || '60 minutes')}</span></div>`;
}

function worldBox(source) {
  if (!source.world3d) return '';
  const url = `https://spanishcue.com${source.path}`;
  return `<div class="box"><strong class="t">Optional: the interactive 3D version</strong>
<p>${esc(url)}</p>
<ol><li>Open the link on the classroom projector or smartboard (Chrome or Safari, sound on).</li>
<li>Choose the level and the mode (Conversation or Listening) at the start screen.</li>
<li>Students tell you where to go and what to say; you move through the world while they speak Spanish.</li></ol>
<p>The printable lesson works without it.</p></div>`;
}

function answerLines(section) {
  const items = section.items || [];
  switch (section.type) {
    case 'choice': return items.map((it) => `<li>${esc(it.options[it.answer])}</li>`).join('');
    case 'sort': return items.map((it) => `<li>${esc(it.text)} → ${esc(section.columns[it.answer])}</li>`).join('');
    case 'match': return items.map((it, i) => `<li>${esc(it.left)} → ${String.fromCharCode(97 + matchOrder(items.length).indexOf(i))}) ${esc(it.right)}</li>`).join('');
    case 'write': return section.model ? `<li>Model: ${rich(section.model)}</li>` : '';
    case 'read': return '';
    default: return items.map((it) => `<li>${rich(it.answer)}</li>`).join('');
  }
}

/** Deterministic rotation for matching columns (same order in worksheet and key). */
function matchOrder(n) {
  const shift = n > 2 ? 2 : n - 1;
  return [...Array(n).keys()].map((i) => (i + shift) % n);
}

export function teacherGuideHtml(resource) {
  const lessons = resource.lessons.map((lesson, li) => {
    const key = (lesson.worksheet || []).map((s, si) => {
      const lines = answerLines(s);
      return lines ? `<div class="section"><strong>${String.fromCharCode(65 + si)}. ${esc(s.title)}</strong><ol>${lines}</ol></div>` : '';
    }).join('');
    return `<section class="lesson">
${resource.lessons.length > 1 ? `<h2>Lesson ${li + 1}: ${esc(lesson.title)}</h2>` : `<h2>${esc(lesson.title)}</h2>`}
<h3>Objectives</h3><p>Students will be able to:</p><ul>${lesson.objectives.map((o) => `<li>${rich(o)}</li>`).join('')}</ul>
${lesson.materials ? `<h3>Materials</h3><ul>${lesson.materials.map((m) => `<li>${rich(m)}</li>`).join('')}</ul>` : ''}
<h3>60-minute script</h3>
<table class="plan"><thead><tr><th>Time</th><th>Stage</th><th>What you do and say</th></tr></thead><tbody>
${lesson.plan.map((p) => `<tr><td class="min">${esc(p.min)}</td><td class="stage">${esc(p.stage)}</td><td>${rich(p.do)}</td></tr>`).join('')}
</tbody></table>
${(lesson.sources || []).map(worldBox).join('')}
${lesson.notes ? `<h3>Teacher notes</h3><ul>${lesson.notes.map((n) => `<li>${rich(n)}</li>`).join('')}</ul>` : ''}
<h3>Answer key</h3><div class="key">${key}</div>
${lesson.extraAnswers ? `<h3>Model answers for open tasks</h3><ul>${lesson.extraAnswers.map((a) => `<li>${rich(a)}</li>`).join('')}</ul>` : ''}
</section>`;
  }).join('');
  const intro = resource.guide_intro ? `<p>${rich(resource.guide_intro)}</p>` : '';
  return page(`${resource.title} · Teacher Guide`, `${header(resource, 'Teacher Guide')}${intro}${lessons}
<div class="footer">© ${new Date().getFullYear()} ${BRAND} (spanishcue.com). Licensed for use by one teacher in their own classes. See terms.pdf.</div>`);
}

function worksheetSection(section, si) {
  const n = String.fromCharCode(65 + si);
  const head = `<h3>${n}. ${esc(section.title)}</h3>${section.instructions ? `<div class="ins">${rich(section.instructions)}</div>` : ''}`;
  const bank = section.wordBank ? `<div class="bank"><strong>Word bank:</strong> ${section.wordBank.map(esc).join(' · ')}</div>` : '';
  const items = section.items || [];
  let body = '';
  switch (section.type) {
    case 'read':
      body = `<div class="passage">${section.text.map((p) => `<p>${rich(p)}</p>`).join('')}</div>`;
      break;
    case 'choice':
      body = `<ol>${items.map((it) => `<li class="item">${rich(it.q)}<div class="opts">${it.options.map((o) => `<span>${esc(o)}</span>`).join('')}</div></li>`).join('')}</ol>`;
      break;
    case 'sort':
      body = `<table class="sort"><thead><tr><th>Sentence</th>${section.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${items.map((it) => `<tr><td>${esc(it.text)}</td>${section.columns.map(() => '<td class="c">☐</td>').join('')}</tr>`).join('')}</tbody></table>`;
      break;
    case 'match': {
      const order = matchOrder(items.length);
      body = `<table class="sort"><tbody>${items.map((it, i) => `<tr><td>${i + 1}. ${esc(it.left)}</td><td class="c">____</td><td>${String.fromCharCode(97 + i)}) ${esc(items[order[i]].right)}</td></tr>`).join('')}</tbody></table>`;
      break;
    }
    case 'write':
      body = `${section.prompt ? `<p>${rich(section.prompt)}</p>` : ''}${'<div class="line"></div>'.repeat(section.lines || 6)}`;
      break;
    case 'fix':
      body = `<ol>${items.map((it) => `<li class="item">${rich(it.q)}<div class="line"></div></li>`).join('')}</ol>`;
      break;
    default:
      body = `<ol>${items.map((it) => `<li class="item">${rich(it.q)}${section.lineAfter ? '<div class="line"></div>' : ''}</li>`).join('')}</ol>`;
  }
  return `<div class="section">${head}${bank}${body}</div>`;
}

export function worksheetHtml(resource) {
  const lessons = resource.lessons.map((lesson, li) => `<section class="lesson">
<div class="brand">${BRAND} · Student Worksheet${resource.lessons.length > 1 ? ` · Lesson ${li + 1}` : ''}</div>
<h1>${esc(lesson.worksheetTitle || lesson.title)}</h1>
<div class="namebar"><span>Name:</span><span class="short">Date:</span><span class="short">Period:</span></div>
${(lesson.worksheet || []).map(worksheetSection).join('')}
</section>`).join('');
  return page(`${resource.title} · Worksheet`, lessons);
}

export function termsHtml(resource) {
  const year = new Date().getFullYear();
  return page('Terms of Use', `<div class="brand">${BRAND} · Terms of Use</div>
<h1>Thank you for your purchase!</h1>
<p><strong>${esc(resource.title)}</strong></p>
<h2>You may</h2>
<ul><li>Use this resource with your own students, in your own classes, year after year.</li>
<li>Print and copy the pages for your students.</li>
<li>Share the worksheet with your own students through a password-protected learning platform (for example Google Classroom or Canvas).</li></ul>
<h2>You may not</h2>
<ul><li>Share, sell or give this resource to other teachers, a whole school or a district. Additional licenses are available at a discount on TPT.</li>
<li>Post any part of it on a public website, blog or shared drive.</li>
<li>Claim it as your own work or use it in a product you sell.</li></ul>
<h2>Credits</h2>
<p>Written and designed by ${BRAND} (spanishcue.com), a library of ready-to-teach Spanish lessons for teachers. All text and design © ${year} ${BRAND}. All rights reserved.</p>
<p>Questions or a problem with a file? Use the Q&amp;A tab on the product page and we will answer quickly.</p>`);
}
