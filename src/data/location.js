/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  मंदिर का स्थान / TEMPLE LOCATION
 * ─────────────────────────────────────────────────────────────────────────────
 *  ⚠️  सटीक पता, अक्षांश-देशांतर (latitude/longitude) और Google Maps पिन
 *  उपलब्ध नहीं हैं, इसलिए यहाँ कोई अनुमानित मान नहीं भरा गया है।
 *
 *  सही स्थान मिलने पर केवल इसी फ़ाइल में बदलाव करें:
 *    1. `coordinates` में lat/lng भरें (Google Maps पर pin पर right-click →
 *       coordinates copy करें)
 *    2. `mapEmbedUrl` में Google Maps का embed URL डालें
 *       (Google Maps → Share → Embed a map → src="..." कॉपी करें)
 *    3. `address` में सटीक पता लिखें
 *  जब तक ये खाली हैं, साइट एक सुंदर placeholder और Google Maps पर
 *  "Pachera, Madhya Pradesh" खोजने का लिंक दिखाएगी — यह सटीक पिन नहीं है।
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const location = {
  village: { hi: 'पचेरा', en: 'Pachera' },
  district: { hi: 'भिंड', en: 'Bhind' },
  tehsil: { hi: 'गोरमी', en: 'Gormi' },
  state: { hi: 'मध्य प्रदेश', en: 'Madhya Pradesh' },
  country: { hi: 'भारत', en: 'India' },
  address: {
    hi: 'श्री भूमिया बाबा परित बाबा मंदिर, पचेरा ग्राम, तहसील गोरमी, जिला भिंड, मध्य प्रदेश',
    en: 'Shri Bhumiya Baba Parit Baba Mandir, Pachera Village, Tehsil Gormi, District Bhind, Madhya Pradesh',
  },
  coordinates: {
    lat: 26.632117,
    lng: 78.604433,
  },
  searchQuery: 'Bhumiya Baba Mandir, Pachera, Madhya Pradesh',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=26.6321167,78.6044325&hl=hi&z=15&output=embed',
  directionsUrl: 'https://maps.app.goo.gl/WJZ9tge54CNasCrd9',
  approach: [
    {
      icon: 'map-pin',
      title: { hi: 'गाँव एवं तहसील', en: 'Village & Tehsil' },
      value: { hi: 'पचेरा ग्राम, गोरमी तहसील', en: 'Pachera Village, Gormi Tehsil' },
    },
    {
      icon: 'landmark',
      title: { hi: 'जिला एवं राज्य', en: 'District & State' },
      value: { hi: 'भिंड, मध्य प्रदेश', en: 'Bhind, Madhya Pradesh' },
    },
    {
      icon: 'compass',
      title: { hi: 'GPS निर्देशांक', en: 'GPS coordinates' },
      value: { hi: '26.6321° N, 78.6044° E', en: '26.6321° N, 78.6044° E' },
    },
    {
      icon: 'route',
      title: { hi: 'Google Maps स्थान', en: 'Google Maps location' },
      value: {
        hi: 'Bhumiya Baba Mandir (पचेरा)',
        en: 'Bhumiya Baba Mandir (Pachera)',
      },
    },
  ],
  note: {
    hi: 'Google Maps पर यह स्थान "Bhumiya Baba Mandir" के नाम से पंजीकृत है। नीचे दिए बटन से सीधे नेविगेशन और मार्ग दर्शन प्राप्त करें।',
    en: 'This location is registered on Google Maps as "Bhumiya Baba Mandir". Use the button below to get direct directions and turn-by-turn navigation.',
  },
  mapPlaceholder: {
    hi: 'पचेरा मंदिर स्थान',
    en: 'Pachera Temple Location',
  },
}
