// Mundo 3D · the flags of the country worlds, drawn on a 2D canvas.
// The same drawings dress the 3D world (welcome sign, flagpoles, bunting) and
// make the library covers (scripts/flag-previews.mjs), so both always match.

/** Width ÷ height of each flag. */
export const FLAG_RATIO = {
  'estados-unidos': 1.9, mexico: 7 / 4, argentina: 1.6, espana: 1.5, suecia: 1.6,
  'reino-unido': 2, irlanda: 2, australia: 2, suiza: 1, israel: 11 / 8, indonesia: 1.5,
};

/** Two colours that read as the country (signs, bunting, the HUD tint). */
export const FLAG_COLORS = {
  'estados-unidos': ['#b22234', '#3c3b6e'], mexico: ['#006847', '#ce1126'], argentina: ['#74acdf', '#f6b40e'],
  espana: ['#aa151b', '#f1bf00'], suecia: ['#006aa7', '#fecc00'], 'reino-unido': ['#012169', '#c8102e'],
  irlanda: ['#169b62', '#ff883e'], australia: ['#012169', '#e4002b'], suiza: ['#da291c', '#ffffff'],
  israel: ['#0038b8', '#ffffff'], indonesia: ['#ce1126', '#ffffff'],
};

export const hasFlag = id => Object.prototype.hasOwnProperty.call(FLAG_RATIO, id);

function star(ctx, cx, cy, r, points = 5, inner = 0.4) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / points, rr = i % 2 ? r * inner : r;
    ctx.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
  }
  ctx.closePath();
  ctx.fill();
}

function stripes(ctx, w, h, colors, vertical) {
  const n = colors.length;
  colors.forEach((c, i) => {
    ctx.fillStyle = c;
    if (vertical) ctx.fillRect(Math.floor((w / n) * i), 0, Math.ceil(w / n) + 1, h);
    else ctx.fillRect(0, Math.floor((h / n) * i), w, Math.ceil(h / n) + 1);
  });
}

function unionJack(ctx, w, h) {
  ctx.save();
  ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
  ctx.fillStyle = '#012169'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h / 2;
  ctx.lineCap = 'butt';
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = h / 5;
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(w, h); ctx.moveTo(w, 0); ctx.lineTo(0, h); ctx.stroke();
  // The red saltire is counterchanged: each arm sits off the diagonal, turning anticlockwise.
  ctx.strokeStyle = '#c8102e'; ctx.lineWidth = h / 15;
  for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const dx = sx * w / 2, dy = sy * h / 2, len = Math.hypot(dx, dy);
    const nx = (dy / len) * (h / 30), ny = (-dx / len) * (h / 30);
    ctx.save();
    ctx.beginPath(); ctx.rect(sx < 0 ? 0 : cx, sy < 0 ? 0 : cy, w / 2, h / 2); ctx.clip();
    ctx.beginPath(); ctx.moveTo(cx + nx, cy + ny); ctx.lineTo(cx + dx + nx, cy + dy + ny); ctx.stroke();
    ctx.restore();
  }
  ctx.fillStyle = '#ffffff'; ctx.fillRect(cx - h / 6, 0, h / 3, h); ctx.fillRect(0, cy - h / 6, w, h / 3);
  ctx.fillStyle = '#c8102e'; ctx.fillRect(cx - h / 10, 0, h / 5, h); ctx.fillRect(0, cy - h / 10, w, h / 5);
  ctx.restore();
}

const DRAW = {
  'estados-unidos'(ctx, w, h) {
    stripes(ctx, w, h, Array.from({ length: 13 }, (_, i) => (i % 2 ? '#ffffff' : '#b22234')), false);
    const cw = w * 0.4, ch = (h * 7) / 13;
    ctx.fillStyle = '#3c3b6e'; ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = '#ffffff';
    for (let row = 0; row < 9; row++) {
      const n = row % 2 ? 5 : 6;
      for (let i = 0; i < n; i++) star(ctx, (cw / 12) * (row % 2 ? 2 + i * 2 : 1 + i * 2), (ch / 10) * (row + 1), ch * 0.05);
    }
  },
  mexico(ctx, w, h) {
    stripes(ctx, w, h, ['#006847', '#ffffff', '#ce1126'], true);
    const cx = w / 2, cy = h / 2, r = h * 0.27;
    // A simple emblem: the wreath, the nopal and the eagle with open wings.
    ctx.strokeStyle = '#3c7d32'; ctx.lineWidth = r * 0.12; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(cx, cy + r * 0.05, r * 0.95, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
    ctx.fillStyle = '#4c8f3a';
    for (let i = 0; i < 9; i++) { const a = Math.PI * (0.18 + i * 0.08); ctx.beginPath(); ctx.ellipse(cx + Math.cos(a) * r, cy + Math.sin(a) * r, r * 0.13, r * 0.06, a + Math.PI / 2, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = '#5a9b3e';
    ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.45, r * 0.22, r * 0.3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx - r * 0.3, cy + r * 0.35, r * 0.14, r * 0.2, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + r * 0.3, cy + r * 0.35, r * 0.14, r * 0.2, 0.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#7a4a1e';
    ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.05, r * 0.2, r * 0.32, 0.2, 0, Math.PI * 2); ctx.fill();
    for (const s of [-1, 1]) {
      ctx.beginPath(); ctx.moveTo(cx + s * r * 0.1, cy - r * 0.15);
      ctx.quadraticCurveTo(cx + s * r * 0.75, cy - r * 0.75, cx + s * r * 0.6, cy - r * 0.05);
      ctx.quadraticCurveTo(cx + s * r * 0.4, cy - r * 0.1, cx + s * r * 0.1, cy + r * 0.05); ctx.fill();
    }
    ctx.beginPath(); ctx.arc(cx - r * 0.12, cy - r * 0.42, r * 0.11, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#c99a2e'; ctx.beginPath(); ctx.moveTo(cx - r * 0.2, cy - r * 0.44); ctx.lineTo(cx - r * 0.33, cy - r * 0.38); ctx.lineTo(cx - r * 0.2, cy - r * 0.36); ctx.fill();
  },
  argentina(ctx, w, h) {
    stripes(ctx, w, h, ['#74acdf', '#ffffff', '#74acdf'], false);
    const cx = w / 2, cy = h / 2, r = h * 0.085;
    ctx.fillStyle = '#f6b40e';
    for (let i = 0; i < 32; i++) {
      const a = (i * Math.PI) / 16, len = i % 2 ? r * 1.75 : r * 2.05, half = 0.07;
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(a - half) * r * 0.95, cy + Math.sin(a - half) * r * 0.95);
      ctx.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
      ctx.lineTo(cx + Math.cos(a + half) * r * 0.95, cy + Math.sin(a + half) * r * 0.95); ctx.fill();
    }
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#85340a'; ctx.lineWidth = r * 0.08; ctx.stroke();
  },
  espana(ctx, w, h) {
    ctx.fillStyle = '#aa151b'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f1bf00'; ctx.fillRect(0, h / 4, w, h / 2);
    // A small, simple coat of arms: two pillars, the crowned shield.
    const cx = w * 0.33, cy = h / 2, s = h * 0.17;
    for (const px of [-1, 1]) {
      ctx.fillStyle = '#e8e2d4'; ctx.fillRect(cx + px * s * 0.95 - s * 0.09, cy - s * 0.6, s * 0.18, s * 1.25);
      ctx.fillStyle = '#c8a24a'; ctx.fillRect(cx + px * s * 0.95 - s * 0.14, cy - s * 0.7, s * 0.28, s * 0.12); ctx.fillRect(cx + px * s * 0.95 - s * 0.14, cy + s * 0.62, s * 0.28, s * 0.12);
    }
    ctx.save();
    ctx.beginPath(); ctx.moveTo(cx - s * 0.6, cy - s * 0.55); ctx.lineTo(cx + s * 0.6, cy - s * 0.55); ctx.lineTo(cx + s * 0.6, cy + s * 0.25);
    ctx.quadraticCurveTo(cx + s * 0.6, cy + s * 0.85, cx, cy + s * 0.85); ctx.quadraticCurveTo(cx - s * 0.6, cy + s * 0.85, cx - s * 0.6, cy + s * 0.25); ctx.closePath();
    ctx.clip();
    ctx.fillStyle = '#c8102e'; ctx.fillRect(cx - s, cy - s, s, s * 0.8);
    ctx.fillStyle = '#ece7da'; ctx.fillRect(cx, cy - s, s, s * 0.8);
    ctx.fillStyle = '#ece7da'; ctx.fillRect(cx - s, cy - s * 0.2, s, s * 1.2);
    ctx.fillStyle = '#c8102e'; ctx.fillRect(cx, cy - s * 0.2, s, s * 1.2);
    ctx.fillStyle = '#f1bf00'; ctx.fillRect(cx - s * 0.18, cy - s * 0.78, s * 0.36, s * 0.36);
    ctx.restore();
    ctx.fillStyle = '#c8a24a';
    ctx.beginPath(); ctx.moveTo(cx - s * 0.5, cy - s * 0.62); ctx.lineTo(cx - s * 0.55, cy - s * 0.95); ctx.lineTo(cx - s * 0.25, cy - s * 0.8); ctx.lineTo(cx, cy - s * 1.05);
    ctx.lineTo(cx + s * 0.25, cy - s * 0.8); ctx.lineTo(cx + s * 0.55, cy - s * 0.95); ctx.lineTo(cx + s * 0.5, cy - s * 0.62); ctx.closePath(); ctx.fill();
  },
  suecia(ctx, w, h) {
    ctx.fillStyle = '#006aa7'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#fecc00'; ctx.fillRect((w * 5) / 16, 0, (w * 2) / 16, h); ctx.fillRect(0, (h * 4) / 10, w, (h * 2) / 10);
  },
  'reino-unido'(ctx, w, h) { unionJack(ctx, w, h); },
  irlanda(ctx, w, h) { stripes(ctx, w, h, ['#169b62', '#ffffff', '#ff883e'], true); },
  australia(ctx, w, h) {
    ctx.fillStyle = '#012169'; ctx.fillRect(0, 0, w, h);
    unionJack(ctx, w / 2, h / 2);
    ctx.fillStyle = '#ffffff';
    star(ctx, w / 4, h * 0.75, h * 0.15, 7, 0.45);
    star(ctx, w * 0.75, h * 0.86, h * 0.072, 7, 0.45);
    star(ctx, w * 0.75, h * 0.17, h * 0.072, 7, 0.45);
    star(ctx, w * 0.625, h * 0.44, h * 0.072, 7, 0.45);
    star(ctx, w * 0.875, h * 0.375, h * 0.072, 7, 0.45);
    star(ctx, w * 0.81, h * 0.56, h * 0.042, 5, 0.45);
  },
  suiza(ctx, w, h) {
    ctx.fillStyle = '#da291c'; ctx.fillRect(0, 0, w, h);
    const s = Math.min(w, h), cx = w / 2, cy = h / 2, arm = (s * 6) / 32, len = (s * 20) / 32;
    ctx.fillStyle = '#ffffff'; ctx.fillRect(cx - arm / 2, cy - len / 2, arm, len); ctx.fillRect(cx - len / 2, cy - arm / 2, len, arm);
  },
  israel(ctx, w, h) {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#0038b8'; ctx.fillRect(0, h * 0.1, w, h * 0.15); ctx.fillRect(0, h * 0.75, w, h * 0.15);
    const cx = w / 2, cy = h / 2, r = h * 0.19;
    ctx.strokeStyle = '#0038b8'; ctx.lineWidth = h * 0.035; ctx.lineJoin = 'miter';
    for (const turn of [0, Math.PI]) {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + turn + (i * Math.PI * 2) / 3; ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
      ctx.closePath(); ctx.stroke();
    }
  },
  indonesia(ctx, w, h) { stripes(ctx, w, h, ['#ce1126', '#ffffff'], false); },
};

/** Draw the flag of a country world (its CountryInfo id) at the origin, w × h. */
export function drawFlag(ctx, id, w, h) {
  const draw = DRAW[id];
  if (!draw) return false;
  ctx.save();
  draw(ctx, w, h);
  ctx.restore();
  return true;
}
