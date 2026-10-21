/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  मंदिर के देवता / DEITIES
 * ─────────────────────────────────────────────────────────────────────────────
 *  भूमि बाबा और परित बाबा पृथक देव स्वरूप हैं। इनकी जानकारी अलग-अलग रखें।
 *  Bhoomi Baba and Parit Baba are distinct deities. Keep their information
 *  separate. All descriptions below are editable and avoid invented legends.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { resolveImage } from './gallery.js'

export const deities = [
  {
    slug: 'bhoomi-baba',
    name: { hi: 'भूमिया बाबा', en: 'Bhumiya Baba' },
    title: { hi: 'ग्राम-आस्था के देव', en: 'Deity of the village soil' },
    image: resolveImage('deity-bhoomi', 'images/deity-bhoomi.webp'),
    imagePosition: '50% 70%',
    accent: '#B45309',
    short: {
      hi: 'भूमिया बाबा गाँव की भूमि और उससे जुड़े जीवन की आस्था के प्रतीक हैं। पचेरा में उनका स्थान ग्राम-परंपरा का महत्वपूर्ण हिस्सा है।',
      en: 'Bhumiya Baba is associated with the land of the village and the life that grows from it. In Pachera, his place is an important part of village tradition.',
    },
    description: {
      hi: 'भूमि बाबा को समर्पित यह स्थान गाँव की भूमि के प्रति कृतज्ञता और संरक्षण की भावना से जोड़कर देखा जाता है। भक्त यहाँ अपनी फ़सल, परिवार और गाँव की सुख-समृद्धि के लिए प्रार्थना करते हैं।',
      en: 'The shrine of Bhoomi Baba is seen as a gesture of gratitude toward, and care for, the village land. Devotees pray here for the wellbeing of their crops, families and the village.',
    },
    details: {
      hi: 'भूमि बाबा से जुड़ी स्थानीय मान्यता, पूजा-विधि और पर्व की विस्तृत जानकारी अभी प्रामाणिक रूप से उपलब्ध नहीं है। कोई कथा या ऐतिहासिक दावा यहाँ नहीं जोड़ा गया है। ग्रामवासियों से जानकारी मिलने पर इसे इसी स्थान पर जोड़ा जाएगा।',
      en: 'Detailed verified information about Bhoomi Baba’s local belief, worship and festival is not yet available. No legend or historical claim has been added here. It will be added in this space once provided by the village community.',
    },
    tradition: {
      title: { hi: 'स्थानीय परंपरा', en: 'Local tradition' },
      body: {
        hi: 'भूमि बाबा की पूजा की तिथि, विधि और नैवेद्य के बारे में जानकारी अपेक्षित है। (यह अनुभाग संपादन योग्य है।)',
        en: 'Details of the worship date, method and offerings for Bhoomi Baba are awaited. (This section is editable.)',
      },
      isPlaceholder: true,
    },
    festival: {
      name: { hi: 'भूमि बाबा का पूजन', en: 'Bhoomi Baba Pujan' },
      body: {
        hi: 'वार्षिक पूजन की तिथि एवं समय की पुष्टि होना शेष है।',
        en: 'The date and time of the annual pujan are yet to be confirmed.',
      },
      isPlaceholder: true,
    },
    tags: [
      { hi: 'भूमि', en: 'Land' },
      { hi: 'कृतज्ञता', en: 'Gratitude' },
      { hi: 'ग्राम-आस्था', en: 'Village faith' },
    ],
  },
  {
    slug: 'parit-baba',
    name: { hi: 'परित बाबा', en: 'Parit Baba' },
    title: { hi: 'मंदिर से जुड़ी पृथक आस्था', en: 'A distinct devotional presence' },
    image: resolveImage('deity-parit', 'images/deity-parit.webp'),
    imagePosition: '50% 62%',
    accent: '#9A3412',
    short: {
      hi: 'परित बाबा मंदिर परिसर से जुड़े एक पृथक देव स्वरूप हैं। उनकी आस्था और परंपरा को भूमि बाबा से अलग रखा गया है।',
      en: 'Parit Baba is a distinct devotional presence associated with the temple campus. His tradition is kept separate from that of Bhoomi Baba.',
    },
    description: {
      hi: 'परित बाबा का स्थान पचेरा मंदिर की आस्था-परंपरा का स्वतंत्र हिस्सा है। भक्त यहाँ श्रद्धा और समर्पण के साथ दर्शन एवं पूजन करते हैं।',
      en: 'The shrine of Parit Baba is an independent part of the devotional tradition of Pachera temple. Devotees offer darshan and worship here with faith and dedication.',
    },
    details: {
      hi: 'परित बाबा की स्थानीय कथा, पूजा-विधि एवं पर्व से संबंधित प्रामाणिक विवरण अभी उपलब्ध नहीं है। इस वेबसाइट पर उन्हें भूमि बाबा का ही रूप नहीं माना गया है; दोनों की जानकारी अलग रखी गई है। उपलब्ध विवरण बाद में जोड़ा जाएगा।',
      en: 'Verified details of Parit Baba’s local story, worship and festival are not yet available. This website does not treat him as a form of Bhoomi Baba; the two are kept separate. Verified details will be added later.',
    },
    tradition: {
      title: { hi: 'स्थानीय परंपरा', en: 'Local tradition' },
      body: {
        hi: 'इस अनुभाग में परित बाबा की पूजा-पद्धति और स्थानीय मान्यताएँ जोड़ी जाएँगी। (संपादन योग्य स्थान।)',
        en: 'This section will contain Parit Baba’s worship practices and local beliefs. (Editable space.)',
      },
      isPlaceholder: true,
    },
    festival: {
      name: { hi: 'परित बाबा पूजन', en: 'Parit Baba Pujan' },
      body: {
        hi: 'विशेष पूजन की तिथि की पुष्टि होना शेष है।',
        en: 'The date of the special pujan is yet to be confirmed.',
      },
      isPlaceholder: true,
    },
    tags: [
      { hi: 'आस्था', en: 'Faith' },
      { hi: 'पृथक परंपरा', en: 'Distinct tradition' },
      { hi: 'दर्शन', en: 'Darshan' },
    ],
  },
  {
    slug: 'mahadev',
    name: { hi: 'भगवान शिव (महादेव)', en: 'Lord Shiva (Mahadev)' },
    title: { hi: 'शिवलिंग स्वरूप में पूज्य', en: 'Revered as the Shivling' },
    image: resolveImage('deity-shiva', 'images/deity-shiva.webp'),
    imagePosition: '50% 66%',
    accent: '#334155',
    featured: true,
    short: {
      hi: 'मंदिर में महादेव शिवलिंग स्वरूप में विराजमान हैं। जल, बिल्वपत्र और ध्यान से उनकी आराधना की परंपरा है।',
      en: 'Mahadev is present in the temple as the Shivling. He is worshipped with water, bilva leaves and meditation.',
    },
    description: {
      hi: 'शिव आराधना के केंद्र में शिवलिंग है — अनादि, निराकार और सहज उपस्थिति का प्रतीक। भक्त जल अर्पित कर, बिल्वपत्र चढ़ाकर और ध्यान में डूबकर महादेव का स्मरण करते हैं।',
      en: 'The Shivling stands at the heart of Shiva worship — a symbol of the timeless, formless and ever-present. Devotees offer water and bilva leaves, and remember Mahadev in quiet meditation.',
    },
    details: {
      hi: 'मंदिर में महाशिवरात्रि एवं श्रावण मास की विशेष पूजा-परंपरा के बारे में जानकारी दर्ज की जानी है। कृपया किसी भी विशेष अनुष्ठान के समय की पुष्टि स्थानीय रूप से करें। (यह विवरण संपादन योग्य है।)',
      en: 'The temple’s special worship traditions for Maha Shivratri and the month of Shravan are yet to be documented. Please confirm locally before planning around any special ritual. (This detail is editable.)',
    },
    tradition: {
      title: { hi: 'महाशिवरात्रि', en: 'Maha Shivratri' },
      body: {
        hi: 'महाशिवरात्रि पर विशेष दर्शन एवं पूजन की व्यवस्था हो सकती है। वर्ष-विशेष की तिथि, समय और कार्यक्रम की पुष्टि मंदिर प्रबंधन से करें।',
        en: 'Special darshan and pujan may be arranged on Maha Shivratri. Please confirm the year’s date, timings and programme with the temple management.',
      },
      isPlaceholder: true,
    },
    festival: {
      name: { hi: 'महाशिवरात्रि', en: 'Maha Shivratri' },
      body: {
        hi: 'विशेष पूजा एवं रात्रि जागरण का कार्यक्रम अपेक्षित है — पुष्टि होने पर अद्यतन किया जाएगा।',
        en: 'A special puja and night vigil are expected — details will be updated once confirmed.',
      },
      isPlaceholder: true,
    },
    tags: [
      { hi: 'शिवलिंग', en: 'Shivling' },
      { hi: 'जल अर्पण', en: 'Water offering' },
      { hi: 'ध्यान', en: 'Meditation' },
    ],
  },
  {
    slug: 'ram-janaki',
    name: { hi: 'श्री राम जानकी', en: 'Shri Ram Janaki' },
    title: { hi: 'साथ विराजमान श्री राम एवं माता जानकी', en: 'Shri Ram and Mata Janaki together' },
    image: resolveImage('deity-ram', 'images/deity-ram.webp'),
    imagePosition: '50% 64%',
    accent: '#92400E',
    short: {
      hi: 'श्री राम और माता जानकी की संयुक्त उपासना मर्यादा, प्रेम और धर्म का स्मरण कराती है।',
      en: 'The joint worship of Shri Ram and Mata Janaki recalls dignity, love and dharma.',
    },
    description: {
      hi: 'मंदिर में श्री राम एवं जानकी की संयुक्त उपस्थिति है। भक्त दर्शन के समय “श्री राम जय राम जय जय राम” का स्मरण करते हैं और सुखी पारिवारिक जीवन की प्रार्थना करते हैं।',
      en: 'Shri Ram and Janaki are honoured together in the temple. During darshan, devotees remember “Shri Ram Jai Ram Jai Jai Ram” and pray for peaceful family life.',
    },
    details: {
      hi: 'राम दरबार की मूर्तियों, पूजा-विधि एवं राम नवमी उत्सव की प्रामाणिक जानकारी अभी दर्ज होना शेष है। कोई कथा वर्णित नहीं की गई है। (संपादन योग्य अनुभाग।)',
      en: 'Verified details of the Ram Darbar murtis, worship and Ram Navami celebration are yet to be recorded. No legend has been described. (Editable section.)',
    },
    tradition: {
      title: { hi: 'राम नवमी', en: 'Ram Navami' },
      body: {
        hi: 'राम नवमी पर विशेष पूजा एवं भजन की परंपरा हो सकती है। तिथि एवं कार्यक्रम की पुष्टि स्थानीय मंदिर से करें।',
        en: 'Special puja and bhajan may be held on Ram Navami. Please confirm the date and programme with the local temple.',
      },
      isPlaceholder: true,
    },
    festival: {
      name: { hi: 'राम नवमी', en: 'Ram Navami' },
      body: {
        hi: 'उत्सव का कार्यक्रम एवं समय घोषित होने पर जोड़ा जाएगा।',
        en: 'The festival programme and timings will be added when announced.',
      },
      isPlaceholder: true,
    },
    tags: [
      { hi: 'श्री राम', en: 'Shri Ram' },
      { hi: 'जानकी', en: 'Janaki' },
      { hi: 'मर्यादा', en: 'Dharma' },
    ],
  },
  {
    slug: 'balaji',
    name: { hi: 'श्री बालाजी (हनुमान जी)', en: 'Shri Balaji (Hanuman Ji)' },
    title: { hi: 'भक्ति, बल और सेवा के प्रतीक', en: 'Devotion, strength and service' },
    image: resolveImage('deity-balaji', 'images/deity-balaji.webp'),
    imagePosition: '50% 58%',
    accent: '#C2410C',
    short: {
      hi: 'श्री बालाजी यानी हनुमान जी की भक्ति साहस, सेवा और प्रभु-स्मरण का बल देती है।',
      en: 'Devotion to Shri Balaji, Hanuman Ji, lends strength through courage, service and remembrance of God.',
    },
    description: {
      hi: 'मंदिर में श्री बालाजी हनुमान जी की उपासना की जाती है। भक्त संकट से रक्षा, साहस और सेवा-भाव के लिए उनका स्मरण करते हैं।',
      en: 'Shri Balaji, Hanuman Ji, is worshipped at the temple. Devotees remember him for protection, courage and a spirit of service.',
    },
    details: {
      hi: 'हनुमान जयंती एवं मंगलवार की विशेष पूजा से जुड़ी स्थानीय परंपरा की पुष्टि होना शेष है। (यह जानकारी संपादन योग्य है।)',
      en: 'The local tradition of Hanuman Jayanti and Tuesday worship is yet to be confirmed. (This information is editable.)',
    },
    tradition: {
      title: { hi: 'हनुमान जयंती', en: 'Hanuman Jayanti' },
      body: {
        hi: 'हनुमान जयंती पर विशेष पाठ एवं आरती की परंपरा हो सकती है। कार्यक्रम की पुष्टि मंदिर प्रबंधन से करें।',
        en: 'Special recitation and aarti may be held on Hanuman Jayanti. Please confirm the programme with the temple management.',
      },
      isPlaceholder: true,
    },
    festival: {
      name: { hi: 'हनुमान जयंती', en: 'Hanuman Jayanti' },
      body: {
        hi: 'तिथि एवं समय की पुष्टि होने पर उत्सव विवरण जोड़ा जाएगा।',
        en: 'Festival details will be added once the date and time are confirmed.',
      },
      isPlaceholder: true,
    },
    tags: [
      { hi: 'भक्ति', en: 'Devotion' },
      { hi: 'साहस', en: 'Courage' },
      { hi: 'सेवा', en: 'Service' },
    ],
  },
]

export const getDeity = (slug) => deities.find((deity) => deity.slug === slug)
