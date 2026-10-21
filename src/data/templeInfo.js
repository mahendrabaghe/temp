/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  मंदिर की मुख्य जानकारी / CORE TEMPLE INFORMATION
 * ─────────────────────────────────────────────────────────────────────────────
 *  इस फ़ाइल में दी गई जानकारी बदलने के बाद `npm run build` चलाकर साइट को
 *  दोबारा प्रकाशित करना होगा। कोई ऑनलाइन एडमिन पैनल नहीं है।
 *
 *  TO EDIT: Change the Hindi (`hi`) and English (`en`) values below.
 *  Every { hi, en } object is displayed according to the language toggle.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const templeInfo = {
  // मंदिर का नाम — हेडर, हीरो, फुटर और SEO में उपयोग होता है।
  name: {
    hi: 'श्री भूमिया बाबा परित बाबा मंदिर',
    en: 'Shri Bhumiya Baba Parit Baba Mandir',
  },
  shortName: {
    hi: 'भूमिया बाबा परित बाबा मंदिर',
    en: 'Bhumiya Baba Parit Baba Mandir',
  },
  village: { hi: 'पचेरा ग्राम', en: 'Pachera Village' },
  district: { hi: 'भिंड', en: 'Bhind' },
  state: { hi: 'मध्य प्रदेश', en: 'Madhya Pradesh' },
  country: { hi: 'भारत', en: 'India' },
  addressLine: {
    hi: 'पचेरा ग्राम, तहसील गोरमी, जिला भिंड, मध्य प्रदेश',
    en: 'Pachera Village, Tehsil Gormi, District Bhind, Madhya Pradesh',
  },
  mapsUrl: 'https://maps.app.goo.gl/WJZ9tge54CNasCrd9',

  // हीरो सेक्शन की सामग्री
  heroKicker: {
    hi: 'ग्राम आस्था का पावन धाम',
    en: 'The sacred heart of the village',
  },
  tagline: {
    hi: 'श्रद्धा, सेवा और स्मरण का पावन धाम',
    en: 'A sacred abode of faith, service and remembrance',
  },
  mantra: {
    hi: 'ॐ नमः शिवाय · श्री राम जय राम जय जय राम',
    en: 'Om Namah Shivaya · Shri Ram Jai Ram Jai Jai Ram',
  },
  heroDescription: {
    hi: 'पचेरा ग्राम की धरती पर बसा यह मंदिर भूमिया बाबा, परित बाबा, महादेव, श्री राम जानकी और श्री बालाजी की संयुक्त आस्था का केंद्र है।',
    en: 'Set in the soil of Pachera, this temple is a shared home of faith for Bhumiya Baba, Parit Baba, Mahadev, Shri Ram Janaki and Shri Balaji.',
  },

  // परिचय — "मंदिर के बारे में" सेक्शन
  intro: {
    hi: 'पचेरा ग्राम का यह मंदिर गाँव की सामूहिक आस्था, सेवा और सांस्कृतिक जीवन का स्वाभाविक केंद्र है। यहाँ एक साथ पाँच देव स्वरूपों की उपासना की परंपरा है — भूमि बाबा, परित बाबा, महादेव, श्री राम जानकी और श्री बालाजी।',
    en: 'The temple of Pachera village is a natural centre of shared faith, service and cultural life. Five devotional forms are revered here together — Bhoomi Baba, Parit Baba, Mahadev, Shri Ram Janaki and Shri Balaji.',
  },
  about: {
    paragraphs: [
      {
        hi: 'गाँव का मंदिर केवल पूजा का स्थान नहीं, बल्कि सुख-दुःख में एक साथ खड़े होने, पर्व मनाने और पीढ़ियों को संस्कार देने का साझा आँगन है। पचेरा में भी यह मंदिर ग्रामवासियों की श्रद्धा और आपसी जुड़ाव का प्रतीक है।',
        en: 'A village temple is more than a place of worship — it is a shared courtyard for standing together in joy and sorrow, celebrating festivals and passing on values to new generations. In Pachera, too, this temple is a symbol of devotion and community bond.',
      },
      {
        hi: 'यहाँ एक ही परिसर में ग्राम-आस्था के देव, महादेव और श्री राम जानकी-बालाजी विराजमान हैं। यही विविधता इस मंदिर की विशेष पहचान है। दर्शन के समय, पर्वों की परंपरा और स्थानीय विधि-विधान की प्रामाणिक जानकारी ग्रामवासियों से पुष्टि होने पर इस वेबसाइट पर अद्यतन की जाएगी।',
        en: 'Within one campus, the deities of village faith, Mahadev and Shri Ram Janaki–Balaji are honoured together. This diversity is the temple’s own identity. Verified details of darshan hours, festival customs and local rituals will be updated here after confirmation from the village community.',
      },
    ],
    // ऐतिहासिक विवरण — अभी उपलब्ध नहीं है, इसलिए स्पष्ट रूप से चिह्नित placeholder।
    history: {
      title: { hi: 'मंदिर का इतिहास', en: 'Temple history' },
      body: {
        hi: 'मंदिर की स्थापना का वर्ष, निर्माण-काल और ऐतिहासिक विवरण अभी प्रामाणिक रूप से उपलब्ध नहीं है। यहाँ कोई अनुमानित इतिहास नहीं लिखा गया है। प्रामाणिक जानकारी एवं स्थानीय स्मृतियाँ ग्रामवासियों से प्राप्त होने पर इस अनुभाग में जोड़ी जाएँगी।',
        en: 'The founding year, construction period and historical account of the temple are not yet available from a verified source. No estimated history has been written here. Authentic information and local memories will be added to this section once provided by the village community.',
      },
      isPlaceholder: true,
    },
    values: [
      {
        icon: 'flower',
        title: { hi: 'आस्था', en: 'Faith' },
        body: {
          hi: 'दर्शन, पूजा और स्मरण के माध्यम से गाँव का आंतरिक जुड़ाव।',
          en: 'The village’s inner connection through darshan, worship and remembrance.',
        },
      },
      {
        icon: 'users',
        title: { hi: 'समुदाय', en: 'Community' },
        body: {
          hi: 'पर्व, भंडारा और सामूहिक सेवा में एक साथ आना।',
          en: 'Coming together in festivals, bhandara and acts of service.',
        },
      },
      {
        icon: 'landmark',
        title: { hi: 'संस्कृति', en: 'Culture' },
        body: {
          hi: 'पीढ़ियों से चली आ रही स्थानीय परंपराओं का सम्मान।',
          en: 'Respect for local traditions carried across generations.',
        },
      },
    ],
  },

  // तस्वीरों के बारे में पारदर्शी सूचना (गैलरी में दिखाई जाती है)
  imageDisclaimer: {
    hi: 'इस समय गैलरी में मंदिर की वास्तविक तस्वीरों के स्थान पर विशेष रूप से बनाए गए चित्रण (illustrations) प्रदर्शित हैं। मंदिर की असली तस्वीरें मिलने पर public/images/ फ़ोल्डर की फ़ाइलें बदलनी होंगी।',
    en: 'The gallery currently shows custom-made illustrations in place of real temple photographs. When actual photographs are available, replace the files in public/images/.',
  },

  // संपर्क — कोई फ़ोन नंबर, ईमेल या सोशल मीडिया लिंक आविष्कार नहीं किया गया है।
  // जब आधिकारिक विवरण मिले तब नीचे भरें; खाली होने पर साइट "शीघ्र उपलब्ध" दिखाती है।
  contact: {
    heading: { hi: 'संपर्क', en: 'Contact' },
    intro: {
      hi: 'मंदिर से जुड़ी आधिकारिक जानकारी, दर्शन-समय की पुष्टि या किसी सहयोग के लिए ग्रामवासियों से संपर्क करें।',
      en: 'For official information, confirmed darshan hours or any support related to the temple, please reach out to the village community.',
    },
    phone: '', // उदाहरण: '+91 98XXXXXXXX' — केवल आधिकारिक नंबर ही जोड़ें
    email: '', // उदाहरण: 'temple@example.com'
    address: {
      hi: 'पचेरा ग्राम, मध्य प्रदेश, भारत',
      en: 'Pachera Village, Madhya Pradesh, India',
    },
    officialNote: {
      hi: 'यह वेबसाइट स्वतंत्र रूप से, गाँव की आस्था के सम्मान में बनाई गई है। आधिकारिक फ़ोन नंबर और पता उपलब्ध होने पर ही यहाँ प्रकाशित किया जाएगा।',
      en: 'This website has been created independently, in respect of the village’s faith. An official phone number and address will be published here only when available.',
    },
  },

  footer: {
    note: {
      hi: 'मंदिर की प्रामाणिक जानकारी, दर्शन-समय और तस्वीरें धीरे-धीरे जोड़ी जा रही हैं। कृपया महत्वपूर्ण यात्रा से पहले स्थानीय लोगों से समय की पुष्टि करें।',
      en: 'Verified temple details, darshan hours and photographs are being added gradually. Please confirm timings locally before planning an important visit.',
    },
    copyright: {
      hi: 'पचेरा ग्राम, मध्य प्रदेश',
      en: 'Pachera Village, Madhya Pradesh',
    },
  },
}
