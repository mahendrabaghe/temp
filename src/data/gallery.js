import { detectedImages } from './detectedImages.js'

export const galleryCategories = [
  { id: 'all', label: { hi: 'सभी', en: 'All' } },
  { id: 'temple', label: { hi: 'मंदिर', en: 'Temple' } },
  { id: 'deities', label: { hi: 'देव दर्शन', en: 'Deities' } },
  { id: 'festivals', label: { hi: 'पर्व एवं आरती', en: 'Festivals & aarti' } },
  { id: 'village', label: { hi: 'ग्राम परिवेश', en: 'Village' } },
]

// Metadata for standard temple assets
const knownAssets = {
  'temple-exterior': {
    category: 'temple',
    alt: { hi: 'मंदिर का बाहरी दृश्य', en: 'Temple exterior' },
    caption: { hi: 'मंदिर का बाहरी दृश्य', en: 'Temple exterior' },
  },
  'temple-entrance': {
    category: 'temple',
    alt: { hi: 'मंदिर प्रवेश द्वार एवं घंटियाँ', en: 'Temple entrance and bells' },
    caption: { hi: 'प्रवेश द्वार एवं घंटियाँ', en: 'Entrance and bells' },
  },
  'temple-interior': {
    category: 'temple',
    alt: { hi: 'मंदिर का भीतरी भाग', en: 'Temple interior' },
    caption: { hi: 'मंदिर का भीतरी भाग', en: 'Temple interior' },
  },
  'temple-exterior1': {
    category: 'temple',
    alt: { hi: 'मंदिर का भव्य दृश्य', en: 'Temple view' },
    caption: { hi: 'मंदिर प्रांगण दृश्य', en: 'Temple courtyard view' },
  },
  'deity-bhoomi': {
    category: 'deities',
    alt: { hi: 'भूमिया बाबा का पावन स्थान', en: 'Shrine of Bhumiya Baba' },
    caption: { hi: 'भूमिया बाबा', en: 'Bhumiya Baba' },
  },
  'deity-parit': {
    category: 'deities',
    alt: { hi: 'परित बाबा का पावन स्थान', en: 'Shrine of Parit Baba' },
    caption: { hi: 'परित बाबा', en: 'Parit Baba' },
  },
  'deity-shiva': {
    category: 'deities',
    alt: { hi: 'महादेव — शिवलिंग एवं त्रिशूल', en: 'Shivling and trishul' },
    caption: { hi: 'महादेव — शिवलिंग', en: 'Mahadev — Shivling' },
  },
  'deity-ram': {
    category: 'deities',
    alt: { hi: 'श्री राम जानकी दरबार', en: 'Shri Ram Janaki Darbar' },
    caption: { hi: 'श्री राम जानकी', en: 'Shri Ram Janaki' },
  },
  'deity-balaji': {
    category: 'deities',
    alt: { hi: 'श्री बालाजी महाराज', en: 'Shri Balaji Maharaj' },
    caption: { hi: 'श्री बालाजी महाराज', en: 'Shri Balaji Maharaj' },
  },
  'deity-balaji1': {
    category: 'deities',
    alt: { hi: 'श्री बालाजी महाराज दर्शन', en: 'Shri Balaji Maharaj Darshan' },
    caption: { hi: 'श्री बालाजी (दर्शन)', en: 'Shri Balaji (Darshan)' },
  },
  'festival-rangoli': {
    category: 'festivals',
    alt: { hi: 'पर्व पर सजा मंदिर प्रांगण', en: 'Decorated temple courtyard' },
    caption: { hi: 'पर्व पर सजा मंदिर प्रांगण', en: 'Festival decoration' },
  },
  'aarti-thali': {
    category: 'festivals',
    alt: { hi: 'संध्या आरती की थाली एवं दीप', en: 'Evening aarti thali and lamps' },
    caption: { hi: 'संध्या आरती', en: 'Evening aarti' },
  },
  'village-sunset': {
    category: 'village',
    alt: { hi: 'पचेरा ग्राम का परिवेश', en: 'Surroundings of Pachera village' },
    caption: { hi: 'पचेरा ग्राम का परिवेश', en: 'Pachera village surroundings' },
  },
  'festival-lights': {
    category: 'festivals',
    alt: { hi: 'दीपों से जगमगाता मंदिर', en: 'Temple illuminated with lamps' },
    caption: { hi: 'दीपोत्सव — दीपों की रात', en: 'Festival of lamps' },
  },
}

function getBaseName(filename) {
  return filename.replace(/\.[^/.]+$/, '')
}

function detectCategory(filename) {
  const lower = filename.toLowerCase()
  if (/deity|bhoomi|bhumiya|parit|balaji|shiva|shiv|ram|hanuman|baba|murti|darshan|god/.test(lower)) {
    return 'deities'
  }
  if (/festival|utsav|aarti|arti|diya|light|rangoli|puja|pooja|mela|deep/.test(lower)) {
    return 'festivals'
  }
  if (/village|sunset|gram|gaon|khet|pachera|nature|tree|field/.test(lower)) {
    return 'village'
  }
  return 'temple'
}

function createFriendlyCaption(filename) {
  const base = getBaseName(filename)
  const lower = base.toLowerCase()

  if (/whatsapp|img_|dsc_|photo_|screenshot|p_20/i.test(lower)) {
    return {
      hi: 'पचेरा मंदिर दर्शन — पावन छायाचित्र',
      en: 'Pachera Temple Darshan — Sacred Photo',
    }
  }
  if (/balaji/.test(lower)) {
    return { hi: 'श्री बालाजी दर्शन', en: 'Shri Balaji Darshan' }
  }
  if (/bhumiya|bhoomi/.test(lower)) {
    return { hi: 'भूमिया बाबा दर्शन', en: 'Bhumiya Baba Darshan' }
  }
  if (/parit/.test(lower)) {
    return { hi: 'परित बाबा दर्शन', en: 'Parit Baba Darshan' }
  }
  if (/shiva|shiv|mahadev/.test(lower)) {
    return { hi: 'महादेव दर्शन', en: 'Mahadev Darshan' }
  }
  if (/ram/.test(lower)) {
    return { hi: 'श्री राम जानकी दर्शन', en: 'Shri Ram Janaki Darshan' }
  }
  if (/aarti/.test(lower)) {
    return { hi: 'आरती दर्शन', en: 'Aarti Darshan' }
  }
  if (/temple|mandir/.test(lower)) {
    return { hi: 'मंदिर दर्शन', en: 'Temple Darshan' }
  }

  // Format custom names nicely (e.g. "my-temple-photo" -> "My Temple Photo")
  const formatted = base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    hi: `${formatted} — मंदिर दर्शन`,
    en: formatted || 'Temple Darshan',
  }
}

// Build items dynamically from detectedImages
function buildGalleryItems() {
  const customItems = []
  const standardItems = []

  const images = Array.isArray(detectedImages) ? detectedImages : []

  for (const filename of images) {
    const base = getBaseName(filename)
    const known = knownAssets[base]

    if (known) {
      standardItems.push({
        id: `g-${base}`,
        src: `images/${filename}`,
        category: known.category,
        alt: known.alt,
        caption: known.caption,
      })
    } else {
      // User-added custom picture!
      const cat = detectCategory(filename)
      const caption = createFriendlyCaption(filename)
      customItems.push({
        id: `g-${base.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
        src: `images/${filename}`,
        category: cat,
        alt: caption,
        caption: caption,
      })
    }
  }

  // Put custom / newly added photos first so the user sees their new pictures immediately!
  return [...customItems, ...standardItems]
}

export const galleryItems = buildGalleryItems()

/**
 * Helper to resolve an image path by base name from detectedImages.
 * Supports any extension (.webp, .jpg, .png, etc.)
 */
export function resolveImage(baseNameWithOrWithoutExt, fallback) {
  if (!detectedImages || !detectedImages.length) return fallback || `images/${baseNameWithOrWithoutExt}`

  if (detectedImages.includes(baseNameWithOrWithoutExt)) {
    return `images/${baseNameWithOrWithoutExt}`
  }

  const baseOnly = getBaseName(baseNameWithOrWithoutExt).toLowerCase()
  const found = detectedImages.find((f) => getBaseName(f).toLowerCase() === baseOnly)
  if (found) {
    return `images/${found}`
  }
  return fallback || `images/${baseNameWithOrWithoutExt}`
}
