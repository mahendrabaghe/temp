/**
 * Core SVG helpers for the site artwork.
 */
export const GOLD = '#e7bd72'
export const CREAM = '#f7e8c8'

export function defs(sky, accent = GOLD) {
  return `<defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      ${sky.map((color, index) => `<stop offset="${Math.round((index / (sky.length - 1)) * 100)}%" stop-color="${color}"/>`).join('')}
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.9"/>
      <stop offset="38%" stop-color="${accent}" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f9e6b4"/>
      <stop offset="40%" stop-color="${GOLD}"/>
      <stop offset="72%" stop-color="#b4842f"/>
      <stop offset="100%" stop-color="#8a6120"/>
    </linearGradient>
    <linearGradient id="goldV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8e2aa"/>
      <stop offset="55%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="#9a6b22"/>
    </linearGradient>
    <radialGradient id="flame" cx="50%" cy="68%" r="62%">
      <stop offset="0%" stop-color="#fff8d8"/>
      <stop offset="36%" stop-color="#ffd271"/>
      <stop offset="70%" stop-color="#f08a2e"/>
      <stop offset="100%" stop-color="#c9501a"/>
    </radialGradient>
    <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff4cd" stop-opacity="1"/>
      <stop offset="55%" stop-color="${accent}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx="50%" cy="46%" r="74%">
      <stop offset="52%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.52"/>
    </radialGradient>
    <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a1c0e" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#120804" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.92" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="blur"><feGaussianBlur stdDeviation="26"/></filter>
    <filter id="blurSoft"><feGaussianBlur stdDeviation="7"/></filter>
  </defs>`
}

function cornerMark(x, y, rotate) {
  return `<g transform="translate(${x} ${y}) rotate(${rotate})" stroke="url(#gold)" stroke-opacity="0.55" fill="none">
    <path d="M0 46 V0 H46" stroke-width="1.5"/>
    <path d="M10 30 V10 H30" stroke-width="1"/>
    <path d="M18 18 l7 -7 7 7 -7 7 z" fill="url(#gold)" fill-opacity="0.45" stroke="none"/>
  </g>`
}

export function frame(w, h) {
  return `<g>
    <rect x="28" y="28" width="${w - 56}" height="${h - 56}" rx="4" fill="none" stroke="url(#gold)" stroke-opacity="0.42" stroke-width="1.6"/>
    <rect x="40" y="40" width="${w - 80}" height="${h - 80}" rx="2" fill="none" stroke="url(#gold)" stroke-opacity="0.18"/>
    ${cornerMark(40, 40, 0)}
    ${cornerMark(w - 40, 40, 90)}
    ${cornerMark(w - 40, h - 40, 180)}
    ${cornerMark(40, h - 40, 270)}
  </g>`
}

export function finish(w, h, border = true) {
  return `<rect width="${w}" height="${h}" fill="url(#vig)"/>
  <rect width="${w}" height="${h}" filter="url(#grain)" opacity="0.055" style="mix-blend-mode:overlay"/>
  ${border ? frame(w, h) : ''}`
}

export function stars(count, seed = 7, maxY = 620) {
  let state = seed
  const random = () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
  let output = ''
  for (let index = 0; index < count; index += 1) {
    const x = Math.round(random() * 1500) + 50
    const y = Math.round(random() * maxY) + 40
    const radius = (random() * 2.1 + 0.5).toFixed(2)
    const opacity = (random() * 0.55 + 0.2).toFixed(2)
    output += `<circle cx="${x}" cy="${y}" r="${radius}" fill="#f8ecc9" opacity="${opacity}"/>`
  }
  return output
}

export function mandala(cx, cy, r, color = 'url(#gold)', opacity = 0.25, petals = 16) {
  let output = `<g opacity="${opacity}" fill="none" stroke="${color}" stroke-width="1.3">`
  output += `<circle cx="${cx}" cy="${cy}" r="${r}"/>`
  output += `<circle cx="${cx}" cy="${cy}" r="${r * 0.82}" opacity=".6"/>`
  output += `<circle cx="${cx}" cy="${cy}" r="${r * 0.4}" opacity=".7"/>`
  for (let index = 0; index < petals; index += 1) {
    output += `<g transform="rotate(${(360 / petals) * index} ${cx} ${cy})">
      <ellipse cx="${cx}" cy="${cy - r * 0.62}" rx="${r * 0.075}" ry="${r * 0.22}"/>
      <circle cx="${cx}" cy="${cy - r * 0.94}" r="${Math.max(1.6, r * 0.012)}" fill="${color}" stroke="none"/>
    </g>`
  }
  output += '</g>'
  return output
}

export function diya(x, y, scale = 1, flame = true) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <ellipse cx="0" cy="10" rx="34" ry="9" fill="#000" opacity=".32"/>
    <path d="M-32 0 Q0 22 32 0 Q18 15 0 15 Q-18 15 -32 0 Z" fill="#8f3f20"/>
    <path d="M-32 0 Q0 -11 32 0 Q0 10 -32 0 Z" fill="#cf7a37"/>
    <ellipse cx="0" cy="-2" rx="21" ry="4" fill="#f4c67c" opacity=".4"/>
    ${flame ? `<ellipse cx="0" cy="-20" rx="22" ry="30" fill="url(#glow)" opacity=".8"/>
    <path d="M0 -8 C11 -19 10 -34 0 -44 C-10 -34 -11 -19 0 -8 Z" fill="url(#flame)"/>
    <path d="M0 -12 C4 -18 4 -27 0 -33 C-4 -27 -4 -18 0 -12 Z" fill="#fff4c8" opacity=".9"/>` : ''}
  </g>`
}

export function bell(x, y, scale = 1, opacity = 0.7) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" opacity="${opacity}">
    <path d="M0 0 V36" stroke="url(#gold)" stroke-width="2"/>
    <path d="M-17 76 Q-17 42 0 38 Q17 42 17 76 Z" fill="url(#gold)" fill-opacity=".28" stroke="url(#gold)" stroke-width="2"/>
    <path d="M-24 76 h48" stroke="url(#gold)" stroke-width="2"/>
    <circle cx="0" cy="86" r="5" fill="url(#gold)" opacity=".7"/>
  </g>`
}

export function temple({ x = 800, base = 820, scale = 1, color = '#2a120a', accent = GOLD, opacity = 1, flag = true }) {
  return `<g transform="translate(${x} ${base}) scale(${scale})" opacity="${opacity}">
    <ellipse cx="0" cy="6" rx="336" ry="28" fill="#000" opacity=".25"/>
    <rect x="-312" y="-16" width="624" height="16" rx="3" fill="${color}"/>
    <rect x="-266" y="-30" width="532" height="16" rx="2" fill="${color}" opacity=".92"/>
    <rect x="-238" y="-96" width="476" height="66" fill="${color}"/>

    ${[-1, 1]
      .map(
        (sign) => `<g transform="translate(${sign * 238} -96)">
        <path d="M-78 0 L-78 -20 Q-78 -46 -58 -64 L-38 -110 Q-28 -146 0 -168 Q28 -146 38 -110 L58 -64 Q78 -46 78 -20 L78 0 Z" fill="${color}"/>
        <path d="M-52 -60 Q0 -54 52 -60 M-34 -116 Q0 -110 34 -116" stroke="${accent}" stroke-opacity=".26" stroke-width="2" fill="none"/>
        <rect x="-11" y="-52" width="22" height="34" rx="10" fill="${accent}" opacity=".22"/>
        <path d="M0 -168 V-198" stroke="${accent}" stroke-opacity=".65" stroke-width="2"/>
        <circle cx="0" cy="-202" r="5" fill="${accent}" fill-opacity=".65"/>
      </g>`,
      )
      .join('')}

    <path d="M-118 -96 L-118 -176 Q-118 -198 -102 -216 L-78 -278 Q-68 -304 -64 -354 Q-60 -404 -30 -438 L0 -470 L30 -438 Q60 -404 64 -354 Q68 -304 78 -278 L102 -216 Q118 -198 118 -176 L118 -96 Z" fill="${color}"/>
    <g stroke="${accent}" fill="none" stroke-linecap="round">
      <path d="M-108 -190 Q0 -176 108 -190" stroke-opacity=".28"/>
      <path d="M-92 -260 Q0 -246 92 -260" stroke-opacity=".24"/>
      <path d="M-78 -330 Q0 -316 78 -330" stroke-opacity=".2"/>
      <path d="M-56 -398 Q0 -386 56 -398" stroke-opacity=".16"/>
      <path d="M-118 -96 L-118 -176 Q-118 -198 -102 -216 L-78 -278 Q-68 -304 -64 -354 Q-60 -404 -30 -438 L0 -470" stroke-opacity=".45"/>
    </g>

    <path d="M-48 -8 L-48 -62 Q-48 -92 0 -92 Q48 -92 48 -62 L48 -8 Z" fill="#0c0603"/>
    <path d="M-48 -8 L-48 -62 Q-48 -92 0 -92 Q48 -92 48 -62 L48 -8" fill="none" stroke="${accent}" stroke-opacity=".55" stroke-width="2.5"/>
    <ellipse cx="0" cy="-38" rx="21" ry="27" fill="${accent}" opacity=".32"/>
    <path d="M-84 -96 V-8 M84 -96 V-8" stroke="${accent}" stroke-opacity=".18" stroke-width="2"/>

    <g stroke="${accent}" stroke-width="2.4" fill="none" stroke-opacity=".85">
      <path d="M0 -470 V-548"/>
      <circle cx="0" cy="-490" r="9" fill="${accent}" fill-opacity=".5" stroke="none"/>
      <circle cx="0" cy="-516" r="6" fill="${accent}" fill-opacity=".6" stroke="none"/>
      <path d="M-14 -548 h28 M-8 -556 h16"/>
    </g>
    ${flag ? `<path d="M2 -545 Q40 -556 74 -544 Q56 -526 76 -508 Q40 -514 2 -508 Z" fill="${accent}" fill-opacity=".82"/>` : ''}

    <g fill="${color}">
      <rect x="-92" y="0" width="184" height="10"/>
      <rect x="-108" y="10" width="216" height="10"/>
      <rect x="-126" y="20" width="252" height="10"/>
      <rect x="-146" y="30" width="292" height="10"/>
    </g>
    <g stroke="${accent}" stroke-opacity=".2" stroke-width="1" fill="none">
      <path d="M-92 10 h184 M-108 20 h216 M-126 30 h252 M-146 40 h292"/>
    </g>
  </g>`
}

export function tree(x, base, scale = 1, color = '#26150c') {
  return `<g transform="translate(${x} ${base}) scale(${scale})" fill="${color}">
    <path d="M-6 0 L-3 -46 Q-3 -76 -14 -96 L-4 -92 Q4 -110 12 -126 L10 -92 Q20 -102 28 -96 Q14 -74 10 -46 L12 0 Z"/>
    <ellipse cx="0" cy="-142" rx="62" ry="44"/>
    <ellipse cx="-42" cy="-116" rx="46" ry="32"/>
    <ellipse cx="44" cy="-118" rx="42" ry="30"/>
    <ellipse cx="8" cy="-176" rx="44" ry="30"/>
  </g>`
}

export function hills(y = 720, color = '#3b1a12', opacity = 1, rise = 130) {
  return `<path d="M0 ${y} C160 ${y - rise * 0.8} 300 ${y - rise * 0.35} 460 ${y - 18} C620 ${y - rise * 0.75} 760 ${y - rise * 1.15} 920 ${y - rise * 0.3} C1100 ${y - rise * 0.95} 1260 ${y - rise * 0.45} 1400 ${y - rise * 0.8} C1480 ${y - rise * 0.65} 1540 ${y - rise * 0.15} 1600 ${y - 26} L1600 1000 L0 1000 Z" fill="${color}" opacity="${opacity}"/>`
}

export function birds(y = 260, color = '#2b1409', opacity = 0.5) {
  return `<g stroke="${color}" stroke-width="2.4" fill="none" opacity="${opacity}" stroke-linecap="round">
    <path d="M300 ${y} q12 -10 24 0 q12 -10 24 0"/>
    <path d="M380 ${y + 40} q9 -8 18 0 q9 -8 18 0"/>
    <path d="M1180 ${y + 20} q10 -9 20 0 q10 -9 20 0"/>
    <path d="M1240 ${y - 30} q7 -6 14 0 q7 -6 14 0"/>
  </g>`
}

export function garland(x1, y1, x2, y2, count = 20, sag = 50, radius = 8) {
  const cx = (x1 + x2) / 2
  const cy = (y1 + y2) / 2 + sag * 2
  const colors = ['#e08b2e', '#f2b14b', '#c95f1f', '#e8a13a']
  let output = `<g>`
  for (let index = 0; index <= count; index += 1) {
    const t = index / count
    const x = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * cx + t ** 2 * x2
    const y = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * cy + t ** 2 * y2
    const r = radius * (0.82 + 0.18 * Math.sin(index * 1.7))
    output += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${colors[index % colors.length]}"/>
      <circle cx="${(x - 2).toFixed(1)}" cy="${(y - 2).toFixed(1)}" r="${(r * 0.45).toFixed(1)}" fill="#ffd489" opacity=".45"/>`
    if (index % 5 === 2) {
      output += `<path d="M${(x + 4).toFixed(1)} ${(y + 2).toFixed(1)} q8 8 2 16 q-10 -2 -8 -12z" fill="#3d5a36" opacity=".8"/>`
    }
  }
  output += '</g>'
  return output
}

export function lotus(cx, cy, scale = 1, color = GOLD) {
  return `<g transform="translate(${cx} ${cy}) scale(${scale})" fill="${color}" fill-opacity=".4" stroke="${color}" stroke-width="1.4">
    <ellipse cx="0" cy="-20" rx="12" ry="28"/>
    <ellipse cx="0" cy="-20" rx="12" ry="28" transform="rotate(32)"/>
    <ellipse cx="0" cy="-20" rx="12" ry="28" transform="rotate(-32)"/>
    <ellipse cx="0" cy="-20" rx="12" ry="28" transform="rotate(64)"/>
    <ellipse cx="0" cy="-20" rx="12" ry="28" transform="rotate(-64)"/>
    <ellipse cx="0" cy="-11" rx="8" ry="20" fill="#f3d391" fill-opacity=".7"/>
  </g>`
}

export function kalash(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-30 -6 Q-40 -28 -22 -42 L-24 -58 L24 -58 L22 -42 Q40 -28 30 -6 Q18 16 0 16 Q-18 16 -30 -6 Z" fill="url(#gold)" fill-opacity=".35" stroke="url(#gold)" stroke-width="2"/>
    <path d="M-24 -58 Q0 -68 24 -58" fill="none" stroke="url(#gold)" stroke-width="2"/>
    <circle cx="0" cy="-70" r="10" fill="none" stroke="url(#gold)" stroke-width="2"/>
    <path d="M-12 -78 Q-30 -100 -46 -98 M12 -78 Q30 -100 46 -98 M0 -82 V-108" fill="none" stroke="#5f7a4a" stroke-width="3" stroke-linecap="round"/>
    <path d="M-34 -76 Q0 -90 34 -76" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity=".6"/>
  </g>`
}

export function rangoli(cx, cy, r) {
  const colors = ['#c2410c', '#d9a441', '#8c2430', '#f4e3bd', '#2f6146']
  let output = `<g transform="translate(${cx} ${cy})">`
  output += `<circle r="${r}" fill="#2a150c" opacity=".55"/>`
  output += `<circle r="${r}" fill="none" stroke="url(#gold)" stroke-width="3" opacity=".5"/>`
  for (let ring = 0; ring < 4; ring += 1) {
    const radius = r * (0.88 - ring * 0.19)
    const petals = 16 - ring * 2
    output += `<circle r="${radius}" fill="none" stroke="${colors[ring % colors.length]}" stroke-width="${radius * 0.12}" opacity=".8"/>`
    output += `<g fill="${colors[(ring + 2) % colors.length]}" opacity=".85">`
    for (let index = 0; index < petals; index += 1) {
      const angle = (360 / petals) * index
      output += `<ellipse cx="0" cy="${-radius}" rx="${radius * 0.13}" ry="${radius * 0.26}" transform="rotate(${angle})"/>`
    }
    output += '</g>'
  }
  output += `<circle r="${r * 0.12}" fill="#e4b45c"/>`
  output += '</g>'
  return output
}

export function portrait({ sky, accent = GOLD, children, border = true }) {
  const width = 1200
  const height = 1500
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    ${defs(sky, accent)}
    <rect width="${width}" height="${height}" fill="url(#sky)"/>
    ${children}
    ${finish(width, height, border)}
  </svg>`
}

export function landscape({ sky, accent = GOLD, children, border = true }) {
  const width = 1600
  const height = 1000
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    ${defs(sky, accent)}
    <rect width="${width}" height="${height}" fill="url(#sky)"/>
    ${children}
    ${finish(width, height, border)}
  </svg>`
}
