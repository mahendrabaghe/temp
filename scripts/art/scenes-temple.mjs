import {
  GOLD,
  landscape,
  temple,
  tree,
  hills,
  birds,
  diya,
  mandala,
  garland,
  rangoli,
  lotus,
  stars,
  bell,
} from './core.mjs'

/* ───────────────────────────── Temple exterior ───────────────────────────── */
export function templeExterior() {
  return landscape({
    sky: ['#2a0b06', '#6f2410', '#c15a1c', '#efb35a', '#f8e0a8'],
    accent: '#f4cb84',
    children: `
      <ellipse cx="1150" cy="360" rx="460" ry="430" fill="url(#glow)" opacity=".75"/>
      <circle cx="1150" cy="360" r="124" fill="#ffe9b3" opacity=".96"/>
      <circle cx="1150" cy="360" r="164" fill="none" stroke="#ffe9b3" stroke-opacity=".22" stroke-width="2"/>
      ${birds(270, '#3a1a0b', 0.45)}
      ${hills(700, '#5b2410', 0.9, 150)}
      ${hills(752, '#39150a', 1, 100)}

      <path d="M0 820 Q400 782 800 818 T1600 826 L1600 1000 H0 Z" fill="#33180b"/>
      <path d="M0 890 Q400 852 800 888 T1600 892 L1600 1000 H0 Z" fill="#200e06"/>
      <path d="M716 1000 Q762 930 782 880 L818 880 Q842 930 888 1000 Z" fill="#432413" opacity=".8"/>

      ${tree(130, 830, 1.8, '#2a1209')}
      ${tree(1480, 860, 2, '#240f07')}
      ${tree(300, 838, 1.1, '#2a1209')}
      <g fill="#241006" opacity=".85">
        <ellipse cx="1440" cy="900" rx="120" ry="46"/>
        <ellipse cx="1520" cy="930" rx="90" ry="34"/>
        <ellipse cx="120" cy="930" rx="110" ry="40"/>
      </g>

      <ellipse cx="800" cy="760" rx="520" ry="290" fill="url(#glow)" opacity=".22"/>
      ${temple({ x: 800, base: 840, scale: 1.16, color: '#2a1008', accent: '#f0c97e' })}

      <g stroke="#7d4a24" stroke-width="2" opacity=".35" fill="none">
        <path d="M40 960 Q300 930 520 960 M1080 968 Q1320 940 1560 966"/>
        <path d="M120 980 Q360 958 560 982 M1040 990 Q1280 968 1480 988"/>
      </g>
      ${diya(520, 922, 1.45)}
      ${diya(1080, 922, 1.45)}

      <g fill="#e4a34e" opacity=".65">
        <path d="M420 760 C430 748 444 750 446 762 C434 768 424 766 420 760 Z"/>
        <path d="M1180 700 C1190 688 1204 690 1206 702 C1194 708 1184 706 1180 700 Z"/>
        <path d="M640 690 C648 680 660 682 662 692 C652 698 644 696 640 690 Z"/>
      </g>
    `,
  })
}

/* ───────────────────────────── Temple entrance ───────────────────────────── */
function entranceArch(inset) {
  const l = 330 + inset
  const r = 1270 - inset
  const b = 940 - inset * 3
  const t = 140 + inset * 1.15
  return `M${l} ${b} L${l} 570 C${l} ${400 + inset} ${l + 130} ${255 + inset * 1.4} ${l + 280} ${215 + inset * 1.4} C${l + 390} ${168 + inset * 1.4} 800 ${t} 800 ${t} C800 ${t} ${r - 390} ${168 + inset * 1.4} ${r - 280} ${215 + inset * 1.4} C${r - 130} ${255 + inset * 1.4} ${r} ${400 + inset} ${r} 570 L${r} ${b}`
}

export function templeEntrance() {
  return landscape({
    sky: ['#2a120a', '#4a2110', '#6e3618'],
    accent: '#efc77f',
    children: `
      <rect x="0" y="0" width="1600" height="1000" fill="#2a120a" opacity=".22"/>
      <g stroke="#efc77f" stroke-opacity=".08" stroke-width="1">
        ${Array.from({ length: 18 }, (_, index) => `<path d="M${index * 95} 0 V1000"/>`).join('')}
        ${Array.from({ length: 10 }, (_, index) => `<path d="M0 ${index * 100} H1600"/>`).join('')}
      </g>
      <ellipse cx="800" cy="620" rx="620" ry="520" fill="url(#glow)" opacity=".4"/>

      <g>
        <path d="${entranceArch(0)}" fill="#2c160c" stroke="url(#gold)" stroke-width="5" stroke-opacity=".9"/>
        <path d="${entranceArch(26)}" fill="#3a1d10" stroke="url(#gold)" stroke-width="3" stroke-opacity=".65"/>
        <path d="${entranceArch(52)}" fill="#472514" stroke="url(#gold)" stroke-width="2" stroke-opacity=".45"/>
        <path d="${entranceArch(80)}" fill="#1c0e07" stroke="url(#gold)" stroke-width="1.5" stroke-opacity=".3"/>
      </g>

      <ellipse cx="800" cy="690" rx="340" ry="310" fill="url(#glow)" opacity=".62"/>
      <path d="M690 940 L690 690 Q690 590 800 570 Q910 590 910 690 L910 940 Z" fill="#140a05"/>
      <path d="M690 940 L690 690 Q690 590 800 570 Q910 590 910 690 L910 940" fill="none" stroke="url(#gold)" stroke-opacity=".65" stroke-width="3"/>
      <path d="M720 940 V700 Q720 630 800 612 Q880 630 880 700 V940" fill="none" stroke="url(#gold)" stroke-opacity=".28"/>
      ${bell(760, 470, 0.72, 0.5)}
      ${bell(840, 470, 0.72, 0.5)}

      <g fill="url(#gold)" fill-opacity=".35" stroke="url(#gold)" stroke-width="2">
        <rect x="742" y="840" width="116" height="100" rx="3"/>
        <rect x="764" y="864" width="72" height="76" rx="2" fill="#0b0503" fill-opacity=".8"/>
        <path d="M742 840 h116 l-10 -18 h-96 z"/>
      </g>
      ${diya(760, 828, 0.9)}
      ${diya(840, 828, 0.9)}

      <g fill="#3b1c0e" stroke="url(#gold)" stroke-width="2">
        <rect x="250" y="360" width="100" height="580"/>
        <rect x="1250" y="360" width="100" height="580"/>
        <rect x="232" y="330" width="136" height="38"/>
        <rect x="1232" y="330" width="136" height="38"/>
        <rect x="244" y="920" width="112" height="34"/>
        <rect x="1244" y="920" width="112" height="34"/>
      </g>
      <g stroke="url(#gold)" stroke-opacity=".28" fill="none">
        <path d="M275 400 V900 M300 390 V910 M325 400 V900"/>
        <path d="M1275 400 V900 M1300 390 V910 M1325 400 V900"/>
        <path d="M250 430 h100 M1250 430 h100 M250 860 h100 M1250 860 h100"/>
      </g>

      ${mandala(250, 300, 130, GOLD, 0.18, 12)}
      ${mandala(1350, 300, 130, GOLD, 0.18, 12)}

      ${garland(230, 200, 1370, 200, 40, 34, 11)}
      <g fill="#3f5c39" opacity=".9">
        ${Array.from({ length: 24 }, (_, index) => {
          const x = 260 + index * 47
          return `<path d="M${x} 200 q12 24 4 42 q-16 -8 -12 -32 z"/>`
        }).join('')}
      </g>
      ${bell(520, 236, 1.05, 0.65)}
      ${bell(800, 248, 1.25, 0.7)}
      ${bell(1080, 236, 1.05, 0.65)}

      <g>
        <path d="M430 930 L1170 930 L1170 962 L430 962 Z" fill="#2b160c" stroke="url(#gold)" stroke-opacity=".4"/>
        <path d="M400 962 L1200 962 L1200 1000 L400 1000 Z" fill="#1d0e07" stroke="url(#gold)" stroke-opacity=".25"/>
      </g>
      ${diya(400, 936, 1.3)}
      ${diya(1200, 936, 1.3)}

      <g fill="#e6a34d" opacity=".55">
        <path d="M380 760 C390 746 406 748 408 762 C394 770 384 768 380 760 Z"/>
        <path d="M1210 700 C1220 686 1236 688 1238 702 C1224 710 1214 708 1210 700 Z"/>
        <path d="M1110 820 C1118 810 1130 812 1132 822 C1122 828 1114 826 1110 820 Z"/>
      </g>
    `,
  })
}

/* ───────────────────────────── Temple interior ───────────────────────────── */
export function templeInterior() {
  const frames = [0, 1, 2, 3].map((index) => {
    const left = 50 + index * 150
    const right = 1550 - index * 150
    const top = 70 + index * 70
    const bottom = 880 - index * 50
    const opacity = 0.38 - index * 0.07
    return `<g>
      <path d="M${left} ${bottom} L${left} ${top + 300} Q${left} ${top + 80} 800 ${top} Q${right} ${top + 80} ${right} ${top + 300} L${right} ${bottom}" fill="none" stroke="url(#gold)" stroke-opacity="${opacity}" stroke-width="${4 - index * 0.5}"/>
      <path d="M${left} ${top + 300} V${bottom} M${right} ${top + 300} V${bottom}" stroke="url(#gold)" stroke-opacity="${opacity * 0.8}" stroke-width="${10 - index * 1.5}"/>
    </g>`
  })

  return landscape({
    sky: ['#140b07', '#2a150c', '#4a2614'],
    accent: '#efc77f',
    children: `
      ${frames.join('')}
      <ellipse cx="800" cy="620" rx="560" ry="470" fill="url(#glow)" opacity=".34"/>
      <ellipse cx="800" cy="700" rx="280" ry="230" fill="url(#glow)" opacity=".32"/>

      <g transform="translate(800 600)">
        <path d="M-150 280 L-150 40 Q-150 -120 0 -160 Q150 -120 150 40 L150 280 Z" fill="#170c07" stroke="url(#gold)" stroke-opacity=".65" stroke-width="3"/>
        <path d="M-118 280 L-118 52 Q-118 -92 0 -126 Q118 -92 118 52 L118 280" fill="none" stroke="url(#gold)" stroke-opacity=".28"/>
        <ellipse cx="0" cy="180" rx="190" ry="120" fill="url(#glow)" opacity=".8"/>
        <rect x="-150" y="220" width="300" height="16" fill="#3a1e0f" stroke="url(#gold)" stroke-opacity=".5"/>
        <rect x="-170" y="236" width="340" height="14" fill="#2a150b" stroke="url(#gold)" stroke-opacity=".3"/>
        ${[-80, -40, 0, 40, 80].map((x) => diya(800 + x, 660, 0.62)).join('')}
        <path d="M0 -126 V-190" stroke="url(#gold)" stroke-width="2" opacity=".7"/>
        <circle cx="0" cy="-200" r="7" fill="url(#gold)" opacity=".8"/>
      </g>

      ${[
        [300, 210],
        [540, 180],
        [1060, 180],
        [1300, 210],
      ]
        .map(
          ([x, y]) => `<g>
          <path d="M${x} 0 V${y}" stroke="url(#gold)" stroke-opacity=".5" stroke-width="2"/>
          <path d="M${x - 26} ${y} h52 l-8 34 h-36 z" fill="url(#gold)" fill-opacity=".22" stroke="url(#gold)" stroke-opacity=".6" stroke-width="1.5"/>
          <ellipse cx="${x}" cy="${y + 52}" rx="34" ry="44" fill="url(#glow)" opacity=".9"/>
          <circle cx="${x}" cy="${y + 46}" r="7" fill="#ffdf9c"/>
        </g>`,
        )
        .join('')}

      <path d="M0 620 L800 560 L1600 620 L1600 1000 L0 1000 Z" fill="#24130b" opacity=".92"/>
      <g stroke="url(#gold)" stroke-opacity=".18" fill="none">
        <path d="M800 560 L0 1000 M800 560 L400 1000 M800 560 L800 1000 M800 560 L1200 1000 M800 560 L1600 1000"/>
        <path d="M0 720 Q800 660 1600 720 M0 840 Q800 770 1600 840 M0 940 Q800 880 1600 940"/>
      </g>
      <g transform="translate(800 830) scale(1 0.5)">
        ${rangoli(0, 0, 250)}
      </g>

      <g fill="#f4dca6" opacity=".4">
        <circle cx="360" cy="400" r="2"/>
        <circle cx="500" cy="300" r="1.6"/>
        <circle cx="1180" cy="360" r="2.2"/>
        <circle cx="960" cy="470" r="1.4"/>
        <circle cx="680" cy="260" r="1.8"/>
      </g>
      ${lotus(260, 930, 0.9)}
      ${lotus(1340, 930, 0.9)}
    `,
  })
}

/* ───────────────────────────── Village sunset ───────────────────────────── */
function hut(x, base, scale, color) {
  return `<g transform="translate(${x} ${base}) scale(${scale})">
    <rect x="-70" y="-90" width="140" height="90" fill="${color}" stroke="url(#gold)" stroke-opacity=".18"/>
    <path d="M-100 -86 L0 -170 L100 -86 Z" fill="#2e180d" stroke="url(#gold)" stroke-opacity=".2"/>
    <path d="M-82 -90 L0 -158 L82 -90" fill="none" stroke="url(#gold)" stroke-opacity=".15"/>
    <path d="M-18 0 V-52 Q0 -66 18 -52 V0 Z" fill="#120904"/>
    <rect x="34" y="-64" width="20" height="20" fill="#e8a14b" opacity=".55"/>
  </g>`
}

export function villageSunset() {
  return landscape({
    sky: ['#2b0d08', '#732812', '#cf6c28', '#f1bb6f', '#f9e2b0'],
    accent: '#f4c87c',
    children: `
      <ellipse cx="1040" cy="470" rx="430" ry="380" fill="url(#glow)" opacity=".7"/>
      <circle cx="1040" cy="470" r="118" fill="#ffe6ae" opacity=".95"/>
      ${birds(250, '#3b1a0b', 0.45)}
      ${hills(610, '#6b2a13', 0.7, 130)}
      ${hills(660, '#4a1c0c', 0.85, 90)}
      <path d="M0 690 Q400 650 800 690 T1600 700 L1600 1000 H0 Z" fill="#6b4a1e"/>
      <path d="M0 740 Q400 700 800 744 T1600 750 L1600 1000 H0 Z" fill="#4f3a16"/>
      <path d="M0 800 Q400 760 800 806 T1600 812 L1600 1000 H0 Z" fill="#3a2a10"/>
      <path d="M0 880 Q400 840 800 886 T1600 890 L1600 1000 H0 Z" fill="#241a09"/>

      <g stroke="#c79a45" stroke-opacity=".35" fill="none" stroke-width="2">
        ${Array.from({ length: 8 }, (_, index) => `<path d="M0 ${760 + index * 22} Q400 ${716 + index * 22} 800 ${760 + index * 22} T1600 ${766 + index * 22}"/>`).join('')}
        ${Array.from({ length: 10 }, (_, index) => `<path d="M${140 + index * 150} 700 Q${170 + index * 150} 820 ${120 + index * 150} 1000" stroke-opacity=".12"/>`).join('')}
      </g>

      <path d="M740 1000 Q790 900 900 812 Q930 790 960 770" fill="none" stroke="#a97b38" stroke-width="46" stroke-linecap="round" opacity=".35"/>

      ${hut(230, 790, 1.15, '#2a160b')}
      ${hut(430, 805, 0.9, '#2a160b')}
      ${temple({ x: 1150, base: 770, scale: 0.72, color: '#2a1409', accent: '#eec172' })}

      ${tree(80, 820, 1.7, '#241006')}
      ${tree(620, 805, 1.15, '#241006')}
      ${tree(1450, 840, 1.8, '#200d05')}

      <g transform="translate(930 830)">
        <ellipse cx="0" cy="16" rx="66" ry="18" fill="#1c1208" opacity=".6"/>
        <path d="M-46 10 Q-52 -30 -30 -46 L30 -46 Q52 -30 46 10 Q20 24 -46 10 Z" fill="#3a2614" stroke="url(#gold)" stroke-opacity=".25"/>
        <path d="M-30 -46 Q0 -58 30 -46" fill="none" stroke="url(#gold)" stroke-opacity=".3"/>
        <path d="M-56 10 h112" stroke="url(#gold)" stroke-opacity=".2"/>
        <path d="M-40 -50 L-40 -100 M40 -50 L40 -100 M-40 -100 H40" stroke="#3a2614" stroke-width="5" fill="none"/>
        <path d="M-58 -104 L0 -142 L58 -104 Z" fill="#2a1a0d"/>
      </g>

      <g stroke="#d4a952" stroke-opacity=".3" fill="none" stroke-width="2">
        <path d="M40 960 Q90 930 130 966 M180 980 Q230 946 280 984 M1300 970 Q1360 940 1420 974"/>
      </g>
      ${diya(650, 890, 0.9)}
      ${diya(1210, 888, 0.9)}
      <g fill="#e0a34f" opacity=".6">
        <path d="M360 900 C370 888 384 890 386 902 C374 908 364 906 360 900 Z"/>
        <path d="M1080 920 C1090 908 1104 910 1106 922 C1094 928 1084 926 1080 920 Z"/>
      </g>
    `,
  })
}

/* ───────────────────────────── Rangoli courtyard ───────────────────────────── */
export function rangoliScene() {
  const positions = Array.from({ length: 10 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 10
    return [800 + Math.cos(angle) * 330, 800 + Math.sin(angle) * 120]
  })

  return landscape({
    sky: ['#0b0913', '#1c1120', '#3a1a1e'],
    accent: '#e9bd73',
    children: `
      ${stars(80, 4, 480)}
      <circle cx="300" cy="190" r="58" fill="#ffe9b5" opacity=".8"/>
      <circle cx="300" cy="190" r="88" fill="url(#glow)" opacity=".35"/>
      ${temple({ x: 800, base: 560, scale: 0.78, color: '#1c0c08', accent: '#ecc57b', opacity: 0.95 })}
      ${hills(560, '#170b07', 1, 70)}
      <path d="M0 580 Q800 530 1600 580 L1600 1000 L0 1000 Z" fill="#2c160d"/>
      <path d="M0 660 Q800 610 1600 660 L1600 1000 L0 1000 Z" fill="#22110a"/>

      <g transform="translate(800 810) scale(1 0.48)">
        ${rangoli(0, 0, 480)}
      </g>

      ${positions.map(([x, y]) => diya(x, y, 1.1)).join('')}
      ${diya(200, 700, 1.2)}
      ${diya(1400, 700, 1.2)}
      ${diya(330, 920, 1.5)}
      ${diya(1270, 920, 1.5)}

      <g>
        <path d="M150 580 V330" stroke="url(#gold)" stroke-width="4" opacity=".6"/>
        <path d="M120 330 Q150 300 180 330 L170 380 H130 Z" fill="url(#gold)" fill-opacity=".25" stroke="url(#gold)" stroke-width="2"/>
        <ellipse cx="150" cy="392" rx="40" ry="50" fill="url(#glow)" opacity=".7"/>
        <circle cx="150" cy="386" r="8" fill="#ffdf9c"/>
      </g>
      <g>
        <path d="M1450 580 V330" stroke="url(#gold)" stroke-width="4" opacity=".6"/>
        <path d="M1420 330 Q1450 300 1480 330 L1470 380 H1430 Z" fill="url(#gold)" fill-opacity=".25" stroke="url(#gold)" stroke-width="2"/>
        <ellipse cx="1450" cy="392" rx="40" ry="50" fill="url(#glow)" opacity=".7"/>
        <circle cx="1450" cy="386" r="8" fill="#ffdf9c"/>
      </g>

      ${garland(140, 580, 1460, 580, 34, 26, 8)}
      <g fill="#e8a34b" opacity=".55">
        ${Array.from({ length: 16 }, (_, index) => `<path d="M${180 + index * 84} ${600 + (index % 4) * 26} C${190 + index * 84} ${588 + (index % 4) * 26} ${202 + index * 84} ${590 + (index % 4) * 26} ${204 + index * 84} ${602 + (index % 4) * 26} C${192 + index * 84} ${608 + (index % 4) * 26} ${184 + index * 84} ${606 + (index % 4) * 26} ${180 + index * 84} ${600 + (index % 4) * 26} Z"/>`).join('')}
      </g>
    `,
  })
}

/* ───────────────────────────── Aarti thali ───────────────────────────── */
export function aartiScene() {
  const lamps = [
    [800, 320, 1.55],
    [1005, 470, 1.5],
    [935, 700, 1.45],
    [665, 700, 1.45],
    [595, 470, 1.5],
  ]

  return landscape({
    sky: ['#120704', '#2a1009', '#4a1b0d'],
    accent: '#f0bd6a',
    children: `
      <ellipse cx="800" cy="540" rx="620" ry="520" fill="url(#glow)" opacity=".32"/>
      <g fill="#e6a34d" opacity=".14">
        <circle cx="220" cy="240" r="50"/>
        <circle cx="1380" cy="300" r="70"/>
        <circle cx="300" cy="760" r="38"/>
        <circle cx="1300" cy="800" r="54"/>
        <circle cx="1120" cy="170" r="26"/>
      </g>
      ${garland(80, 90, 1520, 90, 40, 40, 10)}

      <g>
        <circle cx="800" cy="540" r="392" fill="#3a1a0e" opacity=".55"/>
        <circle cx="800" cy="540" r="372" fill="none" stroke="url(#gold)" stroke-width="30" opacity=".85"/>
        <circle cx="800" cy="540" r="344" fill="#4a2411" stroke="#1e0e06" stroke-width="4"/>
        <circle cx="800" cy="540" r="320" fill="none" stroke="url(#gold)" stroke-width="2" opacity=".5"/>
        <circle cx="800" cy="540" r="286" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity=".3"/>
        <g stroke="url(#gold)" stroke-opacity=".3" fill="none">
          ${Array.from({ length: 36 }, (_, index) => {
            const angle = (Math.PI * 2 * index) / 36
            return `<path d="M${(800 + Math.cos(angle) * 326).toFixed(1)} ${(540 + Math.sin(angle) * 326).toFixed(1)} L${(800 + Math.cos(angle) * 344).toFixed(1)} ${(540 + Math.sin(angle) * 344).toFixed(1)}"/>`
          }).join('')}
        </g>

        ${lamps.map(([x, y, s]) => diya(x, y, s)).join('')}

        <g transform="translate(800 540)">
          <circle r="96" fill="#5a2a12" stroke="url(#gold)" stroke-width="3"/>
          <circle r="72" fill="#2b1208" stroke="url(#gold)" stroke-opacity=".5" stroke-width="1.5"/>
          ${lotus(0, 18, 1.9)}
          <circle r="14" fill="#c2410c" opacity=".8"/>
          <circle cx="-28" cy="-20" r="5" fill="#f2c66e" opacity=".8"/>
          <circle cx="26" cy="-24" r="4" fill="#f2c66e" opacity=".7"/>
        </g>

        <g fill="#e8a34b" opacity=".55">
          ${Array.from({ length: 24 }, (_, index) => {
            const angle = (Math.PI * 2 * index) / 24 + 0.2
            const radius = 300 + (index % 4) * 12
            const x = 800 + Math.cos(angle) * radius
            const y = 540 + Math.sin(angle) * radius
            return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} C${(x + 12).toFixed(1)} ${(y - 8).toFixed(1)} ${(x + 16).toFixed(1)} ${(y + 4).toFixed(1)} ${x.toFixed(1)} ${(y + 8).toFixed(1)} C${(x - 12).toFixed(1)} ${(y + 4).toFixed(1)} ${(x - 8).toFixed(1)} ${(y - 6).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)} Z"/>`
          }).join('')}
        </g>
      </g>

      <g fill="#f6d49a" opacity=".5">
        <circle cx="420" cy="880" r="2"/>
        <circle cx="1180" cy="860" r="1.6"/>
        <circle cx="300" cy="520" r="1.8"/>
        <circle cx="1260" cy="480" r="2"/>
      </g>
    `,
  })
}

/* ───────────────────────────── Festival lights ───────────────────────────── */
export function festivalLights() {
  const rows = [
    { y: 660, count: 9, scale: 0.55, x: 220, gap: 145 },
    { y: 750, count: 8, scale: 0.85, x: 160, gap: 180 },
    { y: 870, count: 7, scale: 1.2, x: 240, gap: 190 },
  ]

  return landscape({
    sky: ['#070914', '#111a2e', '#2a2033'],
    accent: '#f0bd6a',
    children: `
      ${stars(120, 9, 520)}
      <circle cx="1250" cy="190" r="72" fill="#ffe9b5" opacity=".9"/>
      <circle cx="1250" cy="190" r="120" fill="url(#glow)" opacity=".35"/>
      ${hills(560, '#0e1420', 1, 100)}
      ${temple({ x: 800, base: 610, scale: 0.6, color: '#0c0a0c', accent: '#dfb56d', opacity: 0.95 })}
      <path d="M0 600 Q800 550 1600 600 L1600 1000 L0 1000 Z" fill="#1a110c"/>
      <path d="M0 700 Q800 650 1600 700 L1600 1000 L0 1000 Z" fill="#120b07"/>

      ${rows
        .map((row) =>
          Array.from({ length: row.count }, (_, index) =>
            diya(row.x + index * row.gap, row.y + (index % 2) * 10, row.scale),
          ).join(''),
        )
        .join('')}

      <g transform="translate(800 930) scale(1 0.4)">${rangoli(0, 0, 210)}</g>

      <g fill="#e6a34d" opacity=".18">
        <circle cx="180" cy="300" r="34"/>
        <circle cx="420" cy="180" r="18"/>
        <circle cx="1440" cy="400" r="42"/>
        <circle cx="1150" cy="500" r="22"/>
        <circle cx="700" cy="240" r="14"/>
      </g>

      ${garland(40, 70, 500, 110, 16, 40, 8)}
      ${garland(1100, 100, 1560, 60, 16, 40, 8)}
    `,
  })
}
