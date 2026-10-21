import { GOLD, portrait, mandala, diya, bell, lotus, garland, stars, frame, finish } from './core.mjs'

/**
 * Shared portrait composition: a carved niche, halo, bells, diyas and petals.
 */
function deityScene({ sky, accent = GOLD, children }) {
  const petals = [
    [210, 420, 16],
    [1000, 500, 12],
    [180, 880, 10],
    [1030, 960, 14],
    [330, 260, 9],
    [860, 240, 11],
    [150, 1160, 8],
    [1050, 1180, 9],
  ]

  return portrait({
    sky,
    accent,
    children: `
      <ellipse cx="600" cy="780" rx="560" ry="650" fill="url(#glow)" opacity=".42"/>
      ${stars(46, 11, 560)}
      ${mandala(600, 760, 430, accent, 0.16, 24)}
      <g opacity=".16" stroke="${accent}" stroke-width="1">
        ${Array.from({ length: 24 }, (_, index) => {
          const angle = (Math.PI * 2 * index) / 24
          const x1 = 600 + Math.cos(angle) * 330
          const y1 = 760 + Math.sin(angle) * 330
          const x2 = 600 + Math.cos(angle) * 560
          const y2 = 760 + Math.sin(angle) * 560
          return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}"/>`
        }).join('')}
      </g>

      <path d="M240 1400 L240 720 C240 540 330 420 470 380 C540 300 600 278 600 278 C600 278 660 300 730 380 C870 420 960 540 960 720 L960 1400 Z" fill="#0b0603" fill-opacity=".5" stroke="url(#gold)" stroke-opacity=".5" stroke-width="3.5"/>
      <path d="M282 1400 L282 736 C282 574 364 462 494 422 C556 352 600 334 600 334 C600 334 644 352 706 422 C836 462 918 574 918 736 L918 1400" fill="none" stroke="url(#gold)" stroke-opacity=".18" stroke-width="1.6"/>
      <path d="M322 1400 L322 752 C322 610 394 500 516 460" fill="none" stroke="url(#gold)" stroke-opacity=".1"/>

      <g fill="url(#gold)" fill-opacity=".5">
        <path d="M208 600 h20 v520 h-20 z"/>
        <path d="M204 590 h28 v18 h-28 z M198 1110 h40 v20 h-40 z"/>
        <path d="M972 600 h20 v520 h-20 z"/>
        <path d="M968 590 h28 v18 h-28 z M962 1110 h40 v20 h-40 z"/>
      </g>

      ${bell(248, 110, 1.25, 0.62)}
      ${bell(952, 110, 1.25, 0.62)}
      ${garland(180, 132, 1020, 132, 30, 64, 9)}

      <ellipse cx="600" cy="1300" rx="420" ry="88" fill="#000" opacity=".32"/>
      <path d="M160 1330 Q600 1240 1040 1330 L1040 1500 L160 1500 Z" fill="#140a05" fill-opacity=".78"/>
      <path d="M160 1330 Q600 1240 1040 1330" fill="none" stroke="url(#gold)" stroke-opacity=".22" stroke-width="2"/>

      ${children}

      ${diya(250, 1292, 1.5)}
      ${diya(950, 1292, 1.5)}

      <g opacity=".7">
        ${petals
          .map(
            ([x, y, size], index) => `<g transform="translate(${x} ${y}) rotate(${index * 37})">
              <path d="M0 0 C${size} ${-size * 0.7} ${size * 1.5} ${size * 0.3} 0 ${size * 1.2} C${-size * 1.5} ${size * 0.3} ${-size} ${-size * 0.7} 0 0 Z" fill="${index % 3 === 0 ? '#c95f1f' : '#d9a441'}" opacity=".55"/>
            </g>`,
          )
          .join('')}
      </g>
    `,
  })
}

/* ───────────────────────────── Bhoomi Baba ───────────────────────────── */
export function bhoomiArt() {
  return deityScene({
    sky: ['#191307', '#322510', '#6b4b1c'],
    accent: '#d9b46a',
    children: `
      <g opacity=".55">
        <circle cx="600" cy="560" r="112" fill="url(#glow)"/>
        <circle cx="600" cy="560" r="62" fill="url(#gold)" fill-opacity=".28" stroke="url(#gold)" stroke-width="2"/>
        ${Array.from({ length: 16 }, (_, index) => {
          const angle = (Math.PI * 2 * index) / 16
          return `<path d="M${(600 + Math.cos(angle) * 74).toFixed(1)} ${(560 + Math.sin(angle) * 74).toFixed(1)} L${(600 + Math.cos(angle) * 96).toFixed(1)} ${(560 + Math.sin(angle) * 96).toFixed(1)}" stroke="url(#gold)" stroke-width="2"/>`
        }).join('')}
      </g>

      <g stroke="url(#gold)" stroke-width="3" fill="none">
        <path d="M600 1170 C600 1080 600 1010 600 930"/>
        <path d="M600 1040 C540 1030 492 986 486 918 C558 922 600 968 600 1040 Z" fill="#4c6a42" fill-opacity=".55"/>
        <path d="M600 1000 C660 988 704 940 712 878 C640 884 600 928 600 1000 Z" fill="#5b7a4b" fill-opacity=".5"/>
        <path d="M600 960 C600 900 600 860 600 824" stroke-opacity=".5"/>
      </g>

      <path d="M438 1200 C420 1110 470 1012 600 1004 C730 1012 780 1110 762 1200 Z" fill="#3a2a1b" stroke="url(#gold)" stroke-width="3"/>
      <path d="M470 1168 C490 1100 540 1050 600 1044 C660 1050 710 1100 730 1168" fill="none" stroke="url(#gold)" stroke-opacity=".25" stroke-width="2"/>
      <path d="M600 1064 C612 1072 612 1090 600 1098 C588 1090 588 1072 600 1064 Z" fill="#c2410c"/>
      <path d="M576 1120 Q600 1106 624 1120" stroke="#e6c07a" stroke-opacity=".6" stroke-width="2" fill="none"/>
      <path d="M568 1142 Q600 1126 632 1142" stroke="#e6c07a" stroke-opacity=".4" stroke-width="2" fill="none"/>

      <ellipse cx="600" cy="1202" rx="190" ry="30" fill="#1a1008"/>
      <path d="M370 1210 L830 1210 L800 1252 L400 1252 Z" fill="#2d1d11" stroke="url(#gold)" stroke-width="2.5"/>
      <path d="M402 1252 L798 1252 L770 1288 L430 1288 Z" fill="#24160c" stroke="url(#gold)" stroke-opacity=".5" stroke-width="2"/>

      <g stroke="url(#gold)" stroke-opacity=".3" fill="none">
        <path d="M470 1268 Q540 1252 600 1268 Q660 1284 730 1268"/>
        <path d="M420 1296 Q520 1276 600 1296 Q680 1316 780 1296"/>
      </g>

      ${lotus(400, 1264, 0.9)}
      ${lotus(800, 1264, 0.9)}

      <g stroke="#8a6a35" stroke-width="2" opacity=".35" fill="none">
        <path d="M600 1290 C570 1340 520 1350 500 1400 M600 1290 C640 1330 690 1350 710 1400"/>
        <path d="M560 1320 C540 1360 540 1380 520 1400 M650 1320 C670 1350 680 1370 690 1400"/>
      </g>
    `,
  })
}

/* ───────────────────────────── Parit Baba ───────────────────────────── */
export function paritArt() {
  return deityScene({
    sky: ['#1c0804', '#421107', '#7d2a0e'],
    accent: '#eaa95f',
    children: `
      <g stroke="url(#gold)" stroke-width="2.5" fill="none" opacity=".7">
        <path d="M350 1240 V640 Q350 560 420 540 L420 500 M290 1240 V660 Q290 570 350 545"/>
        <path d="M850 1240 V640 Q850 560 780 540 L780 500 M910 1240 V660 Q910 570 850 545"/>
        <path d="M320 620 h70 M810 620 h70 M320 680 h70 M810 680 h70"/>
      </g>
      ${bell(360, 470, 0.9, 0.5)}
      ${bell(840, 470, 0.9, 0.5)}

      <g>
        <ellipse cx="600" cy="1268" rx="260" ry="42" fill="#000" opacity=".4"/>
        <path d="M370 1250 L830 1250 L800 1288 L400 1288 Z" fill="#2c1a10" stroke="url(#gold)" stroke-width="2"/>
        <path d="M420 1140 L780 1140 L810 1250 L390 1250 Z" fill="#3c2213" stroke="url(#gold)" stroke-width="2.5"/>
        <path d="M455 1150 L745 1150 L768 1236 L432 1236 Z" fill="#160b05"/>
        <path d="M400 1140 L800 1140 L780 1118 L420 1118 Z" fill="#4a2a17" stroke="url(#gold)" stroke-opacity=".55" stroke-width="2"/>
        <path d="M440 1118 L760 1118" stroke="url(#gold)" stroke-opacity=".35"/>
        <g stroke="url(#gold)" stroke-opacity=".3" fill="none">
          <path d="M432 1170 h336 M440 1200 h320"/>
          <path d="M520 1140 v110 M600 1140 v110 M680 1140 v110"/>
        </g>
      </g>

      <ellipse cx="600" cy="1110" rx="160" ry="46" fill="url(#glow)" opacity=".9"/>
      <g>
        <path d="M600 1096 C520 1030 522 930 600 840 C678 930 680 1030 600 1096 Z" fill="url(#flame)" opacity=".95"/>
        <path d="M600 1080 C556 1030 558 966 600 910 C642 966 644 1030 600 1080 Z" fill="#ffd784" opacity=".9"/>
        <path d="M600 1066 C578 1036 580 996 600 968 C620 996 622 1036 600 1066 Z" fill="#fff6d2"/>
        <path d="M520 1100 C480 1058 486 1002 520 968 C554 1002 560 1058 520 1100 Z" fill="url(#flame)" opacity=".72"/>
        <path d="M680 1100 C716 1050 712 1002 680 968 C648 1002 644 1050 680 1100 Z" fill="url(#flame)" opacity=".72"/>
      </g>

      <g fill="#ffcf7d" opacity=".8">
        <circle cx="505" cy="900" r="3"/>
        <circle cx="700" cy="860" r="2.4"/>
        <circle cx="545" cy="800" r="2"/>
        <circle cx="660" cy="760" r="3"/>
        <circle cx="600" cy="700" r="2.2"/>
        <circle cx="730" cy="930" r="2.6"/>
        <circle cx="470" cy="960" r="2"/>
      </g>
      <g stroke="#d9a45c" stroke-opacity=".28" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M560 800 C520 740 570 690 540 630 C515 580 555 540 540 500"/>
        <path d="M650 790 C690 730 640 680 670 620 C700 560 660 520 680 480"/>
      </g>

      <g transform="translate(330 1190) rotate(-16)">
        <ellipse cx="0" cy="0" rx="34" ry="44" fill="#4b2a16" stroke="url(#gold)" stroke-width="2"/>
        <path d="M-34 -8 Q0 10 34 -8" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity=".5"/>
      </g>
      <g transform="translate(870 1190) rotate(16)">
        <ellipse cx="0" cy="0" rx="34" ry="44" fill="#4b2a16" stroke="url(#gold)" stroke-width="2"/>
        <path d="M-34 -8 Q0 10 34 -8" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity=".5"/>
      </g>
    `,
  })
}

/* ───────────────────────────── Lord Shiva ───────────────────────────── */
export function shivaArt() {
  return deityScene({
    sky: ['#060a14', '#0e1830', '#243450'],
    accent: '#d8b26a',
    children: `
      <g stroke="url(#gold)" stroke-width="9" fill="none" stroke-linecap="round" opacity=".9">
        <path d="M600 1280 V700"/>
        <path d="M470 760 C410 720 410 640 450 596 C462 638 498 656 600 648 C702 656 738 638 750 596 C790 640 790 720 730 760"/>
        <path d="M600 700 V596"/>
        <path d="M540 860 h120"/>
        <circle cx="600" cy="586" r="10" fill="url(#gold)" stroke="none"/>
      </g>
      <g fill="url(#gold)" fill-opacity=".25" stroke="url(#gold)" stroke-width="2">
        <path d="M600 860 l-26 46 h52 z"/>
      </g>

      <g transform="translate(880 560)">
        <path d="M10 -52 A54 54 0 1 0 62 18 A46 46 0 1 1 10 -52 Z" fill="url(#gold)" fill-opacity=".7"/>
        <circle cx="72" cy="-34" r="2.4" fill="#f8ecc9" opacity=".8"/>
        <circle cx="86" cy="-8" r="1.7" fill="#f8ecc9" opacity=".6"/>
      </g>

      <g transform="translate(600 1250)">
        <ellipse cx="0" cy="0" rx="244" ry="54" fill="#08090b" opacity=".85"/>
        <path d="M-220 -18 Q-220 -74 0 -74 Q176 -74 216 -34 L262 -12 Q272 -2 250 8 Q204 26 152 34 L-152 34 Q-224 22 -220 -18 Z" fill="#24262d" stroke="url(#gold)" stroke-width="3.2"/>
        <ellipse cx="0" cy="-52" rx="176" ry="35" fill="#17191f" stroke="url(#gold)" stroke-width="2" opacity=".95"/>
        <path d="M-96 -58 C-96 -188 -82 -292 -60 -352 C-40 -406 40 -406 60 -352 C82 -292 96 -188 96 -58 Z" fill="#24262d" stroke="url(#gold)" stroke-width="4"/>
        <ellipse cx="0" cy="-354" rx="63" ry="21" fill="#3b3e47" stroke="url(#gold)" stroke-width="3"/>
        <path d="M-62 -92 C-62 -206 -50 -298 -27 -346" stroke="#f4dfb2" stroke-opacity=".28" stroke-width="9" fill="none" stroke-linecap="round"/>

        <g stroke="#ecd7a5" stroke-opacity=".8" stroke-width="7" stroke-linecap="round">
          <path d="M-58 -220 Q0 -236 58 -220"/>
          <path d="M-63 -192 Q0 -208 63 -192"/>
          <path d="M-58 -164 Q0 -180 58 -164"/>
        </g>
        <circle cx="0" cy="-192" r="8" fill="#b6402e"/>

        <path d="M-104 -96 C-136 -156 -126 -238 -66 -260 C-14 -278 22 -228 -16 -206 C-48 -188 -74 -222 -58 -244" stroke="url(#gold)" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>

        <g transform="translate(-255 -110)">
          <path d="M-34 -12 Q-46 -38 -24 -54 L-26 -74 L26 -74 L24 -54 Q46 -38 34 -12 Q20 12 0 12 Q-20 12 -34 -12 Z" fill="#3a3f4a" stroke="url(#gold)" stroke-width="2"/>
          <path d="M-24 -74 Q0 -86 24 -74" fill="none" stroke="url(#gold)" stroke-width="2"/>
          <path d="M0 -78 V-100" stroke="url(#gold)" stroke-width="2"/>
          <path d="M34 -26 C86 -50 126 -6 104 46" fill="none" stroke="#9fc7d8" stroke-width="5" stroke-linecap="round" opacity=".75"/>
        </g>
      </g>

      <g stroke="#5f7d55" stroke-width="3" fill="#4a6343" fill-opacity=".7">
        <path d="M412 1188 C412 1140 428 1112 452 1092 C454 1136 440 1170 412 1188 Z"/>
        <path d="M788 1188 C788 1140 772 1112 748 1092 C746 1136 760 1170 788 1188 Z"/>
        <path d="M430 1210 C430 1168 444 1144 464 1128 C466 1166 454 1196 430 1210 Z"/>
      </g>

      ${lotus(600, 1318, 1.35)}
    `,
  })
}

/* ───────────────────────────── Shri Ram Janaki ───────────────────────────── */
export function ramArt() {
  return deityScene({
    sky: ['#1a060b', '#3d0f18', '#74291f'],
    accent: '#eccb8c',
    children: `
      <g stroke="url(#gold)" stroke-width="2.5" fill="none" opacity=".85">
        <circle cx="600" cy="670" r="82"/>
        <circle cx="600" cy="670" r="56" opacity=".5"/>
        ${Array.from({ length: 24 }, (_, index) => {
          const angle = (Math.PI * 2 * index) / 24
          return `<path d="M${(600 + Math.cos(angle) * 14).toFixed(1)} ${(670 + Math.sin(angle) * 14).toFixed(1)} L${(600 + Math.cos(angle) * 50).toFixed(1)} ${(670 + Math.sin(angle) * 50).toFixed(1)}" stroke-width="2"/>`
        }).join('')}
        <circle cx="600" cy="670" r="14" fill="url(#gold)" fill-opacity=".5"/>
      </g>

      ${[410, 790]
        .map(
          (x) => `<g transform="translate(${x} 470)">
          <path d="M0 0 V470" stroke="url(#gold)" stroke-opacity=".55" stroke-width="3"/>
          <path d="M-118 20 Q0 -74 118 20 Q60 52 0 54 Q-60 52 -118 20 Z" fill="url(#gold)" fill-opacity=".3" stroke="url(#gold)" stroke-width="2.5"/>
          <path d="M-118 20 Q-90 4 -62 18 M118 20 Q90 4 62 18" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity=".6"/>
          <circle cx="0" cy="-58" r="8" fill="url(#gold)"/>
          <path d="M0 -58 V-86" stroke="url(#gold)" stroke-width="2"/>
          <g fill="#d9a441">
            <circle cx="-84" cy="44" r="4"/><circle cx="-56" cy="54" r="3.4"/><circle cx="-28" cy="58" r="3"/>
            <circle cx="28" cy="58" r="3"/><circle cx="56" cy="54" r="3.4"/><circle cx="84" cy="44" r="4"/>
          </g>
        </g>`,
        )
        .join('')}

      ${[410, 790]
        .map(
          (x) => `<g transform="translate(${x} 900)">
          <path d="M-84 0 L84 0 L72 34 L-72 34 Z" fill="#5b1e1c" stroke="url(#gold)" stroke-width="2"/>
          <path d="M-64 34 L64 34 L58 92 L-58 92 Z" fill="#3d1214" stroke="url(#gold)" stroke-width="2"/>
          <path d="M-64 0 L-56 -18 L56 -18 L64 0" fill="#7a2a24" stroke="url(#gold)" stroke-width="2"/>
          <path d="M-48 92 v38 M48 92 v38 M-48 130 h96" fill="none" stroke="url(#gold)" stroke-width="3"/>
          <path d="M-70 24 Q0 40 70 24" fill="none" stroke="url(#gold)" stroke-width="1.4" opacity=".55"/>

          <g transform="translate(0 -112)">
            <path d="M-48 60 L-48 18 L-30 -6 L-20 -44 L0 -74 L20 -44 L30 -6 L48 18 L48 60 Z" fill="url(#gold)" fill-opacity=".42" stroke="url(#gold)" stroke-width="2.4"/>
            <path d="M-20 60 V34 Q0 22 20 34 V60" fill="none" stroke="url(#gold)" stroke-width="1.6"/>
            <circle cx="0" cy="-86" r="7" fill="url(#gold)"/>
            <circle cx="-14" cy="20" r="3" fill="#b6402e"/>
            <circle cx="14" cy="20" r="3" fill="#b6402e"/>
          </g>
        </g>`,
        )
        .join('')}

      <g transform="translate(600 1260) rotate(-4)">
        <path d="M-330 0 C-250 -150 -90 -166 10 0 C-100 166 -252 150 -330 0 Z" fill="none" stroke="url(#gold)" stroke-width="7" stroke-linecap="round"/>
        <path d="M-318 0 L300 0" stroke="#f1d9a3" stroke-width="2" stroke-opacity=".8"/>
        <path d="M300 0 L350 0" stroke="url(#gold)" stroke-width="5"/>
        <path d="M350 0 l-24 -12 v24 z" fill="url(#gold)"/>
        <path d="M-330 0 l-22 -10 v20 z" fill="url(#gold)" opacity=".8"/>
        <g stroke="url(#gold)" stroke-width="2" opacity=".7">
          <path d="M-210 -70 q30 -24 56 0 M-210 70 q30 24 56 0"/>
        </g>
      </g>

      <g transform="translate(870 760)">
        <path d="M-28 26 Q-44 -10 -18 -30 Q8 -48 20 -18 Q30 8 4 22 Q-14 30 -18 4 Q-20 -12 -2 -16" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linecap="round"/>
        <path d="M-6 28 Q-34 52 -62 36" fill="none" stroke="url(#gold)" stroke-width="2" opacity=".6"/>
      </g>

      ${lotus(600, 1318, 1.2)}
      ${lotus(300, 1244, 0.8)}
      ${lotus(900, 1244, 0.8)}
    `,
  })
}

/* ───────────────────────────── Shri Balaji ───────────────────────────── */
export function balajiArt() {
  return deityScene({
    sky: ['#1c0803', '#451506', '#8a3110'],
    accent: '#f0bd6a',
    children: `
      <g opacity=".35">
        <path d="M150 1240 L370 940 L520 1120 L690 820 L900 1100 L1040 930 L1200 1240 Z" fill="#2f3f30"/>
        <path d="M240 1240 L420 1010 L540 1150 L700 930 L880 1130 L1000 1000 L1130 1240 Z" fill="#3a4c37" fill-opacity=".7"/>
      </g>

      <g stroke="url(#gold)" stroke-width="3" fill="none">
        <path d="M910 1280 V520"/>
        <path d="M912 540 Q980 520 1040 540 Q1012 590 1044 640 Q978 622 912 636 Z" fill="#d97706" fill-opacity=".85"/>
        <circle cx="972" cy="584" r="19" fill="none" stroke="#f8e2aa" stroke-opacity=".8" stroke-width="2"/>
        ${Array.from({ length: 12 }, (_, index) => {
          const angle = (Math.PI * 2 * index) / 12
          return `<path d="M${(972 + Math.cos(angle) * 22).toFixed(1)} ${(584 + Math.sin(angle) * 22).toFixed(1)} L${(972 + Math.cos(angle) * 32).toFixed(1)} ${(584 + Math.sin(angle) * 32).toFixed(1)}" stroke="#f8e2aa" stroke-opacity=".55" stroke-width="1.5"/>`
        }).join('')}
      </g>

      <g transform="translate(480 1260)">
        <path d="M0 0 V-470" stroke="url(#gold)" stroke-width="12" stroke-linecap="round"/>
        <path d="M-14 -150 h28 M-18 -300 h36 M-12 -420 h24" stroke="url(#gold)" stroke-width="5" opacity=".7"/>
        <circle cx="0" cy="-566" r="118" fill="url(#gold)" fill-opacity=".34" stroke="url(#gold)" stroke-width="5"/>
        <circle cx="0" cy="-566" r="94" fill="none" stroke="url(#gold)" stroke-opacity=".5" stroke-width="2"/>
        <circle cx="0" cy="-566" r="66" fill="none" stroke="url(#gold)" stroke-opacity=".4" stroke-width="2"/>
        <path d="M-118 -566 h236" stroke="url(#gold)" stroke-opacity=".4" stroke-width="2"/>
        <path d="M0 -684 v236" stroke="url(#gold)" stroke-opacity=".3" stroke-width="2"/>
        <g fill="url(#gold)" opacity=".75">
          ${Array.from({ length: 12 }, (_, index) => {
            const angle = (Math.PI * 2 * index) / 12
            return `<circle cx="${(Math.cos(angle) * 106).toFixed(1)}" cy="${(-566 + Math.sin(angle) * 106).toFixed(1)}" r="4.5"/>`
          }).join('')}
        </g>
        <path d="M-26 -704 h52" stroke="url(#gold)" stroke-width="5"/>
        <path d="M-46 -400 Q0 -378 46 -400" fill="none" stroke="url(#gold)" stroke-opacity=".6" stroke-width="3"/>
      </g>

      <g stroke="#6f8f5a" stroke-width="3" fill="#547247" fill-opacity=".7">
        <path d="M280 1240 C280 1190 298 1162 324 1140 C326 1188 310 1220 280 1240 Z"/>
        <path d="M740 1240 C740 1190 722 1162 696 1140 C694 1188 710 1220 740 1240 Z"/>
        <path d="M330 1256 C330 1218 344 1196 362 1180 C364 1216 352 1244 330 1256 Z"/>
        <path d="M690 1256 C690 1218 676 1196 658 1180 C656 1216 668 1244 690 1256 Z"/>
      </g>

      <g transform="translate(600 1318)">
        <path d="M-240 0 Q-200 -40 0 -40 Q200 -40 240 0 Q200 30 0 30 Q-200 30 -240 0 Z" fill="#2c1a10" stroke="url(#gold)" stroke-opacity=".5" stroke-width="2"/>
      </g>
      ${lotus(600, 1320, 1.4)}
      ${lotus(300, 1250, 0.8)}
    `,
  })
}
