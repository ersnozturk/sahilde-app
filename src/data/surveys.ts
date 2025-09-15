export interface SurveyQuestion {
  id: string;
  type: 'multiple-choice' | 'text' | 'radio' | 'textarea';
  question: string;
  options?: string[];
  required: boolean;
  placeholder?: string;
}

export interface PackageSurvey {
  packageId: string;
  title: string;
  description: string;
  questions: SurveyQuestion[];
}

export const packageSurveys: PackageSurvey[] = [
  {
    packageId: 'spor',
    title: 'Spor Aktiviteleri Anketi',
    description: 'Size en uygun spor beslenme paketini hazırlayabilmek için birkaç soru yanıtlayın',
    questions: [
      {
        id: 'sport-type',
        type: 'radio',
        question: 'Hangi spor aktivitesini yapıyorsunuz?',
        options: ['Yüzme', 'Voleybol', 'Futbol', 'Koşu', 'Fitness', 'Su sporları'],
        required: true
      },
      {
        id: 'sport-equipment',
        type: 'multiple-choice',
        question: 'Bu spor için hangi ekipmanları almak istiyorsunuz?',
        options: [], // Dinamik olarak doldurulacak
        required: false
      },
      {
        id: 'intensity',
        type: 'radio',
        question: 'Spor yoğunluğunuz nasıl?',
        options: ['Hafif', 'Orta', 'Yoğun', 'Profesyonel'],
        required: true
      },
      {
        id: 'timing',
        type: 'radio',
        question: 'Genellikle hangi saatlerde spor yapıyorsunuz?',
        options: ['Sabah (06:00-10:00)', 'Öğle (10:00-14:00)', 'İkindi (14:00-18:00)', 'Akşam (18:00-22:00)'],
        required: true
      },
      {
        id: 'nutrition-goal',
        type: 'radio',
        question: 'Beslenme hedefiniz nedir?',
        options: ['Enerji artışı', 'Kas gelişimi', 'Toparlanma', 'Kilo kontrolü'],
        required: true
      },
      {
        id: 'dietary-restrictions',
        type: 'multiple-choice',
        question: 'Beslenme kısıtlarınız var mı?',
        options: ['Vejetaryen', 'Vegan', 'Glutensiz', 'Laktozsuz', 'Yok'],
        required: false
      }
    ]
  },
  {
    packageId: 'ders',
    title: 'Ders Çalışma Anketi',
    description: 'Çalışma veriminizi artıracak beslenme paketini özelleştirelim',
    questions: [
      {
        id: 'study-duration',
        type: 'radio',
        question: 'Genellikle ne kadar süre ders çalışıyorsunuz?',
        options: ['1-2 saat', '2-4 saat', '4-6 saat', '6+ saat'],
        required: true
      },
      {
        id: 'study-time',
        type: 'multiple-choice',
        question: 'Hangi saatlerde çalışıyorsunuz?',
        options: ['Sabah (06:00-12:00)', 'Öğle (12:00-18:00)', 'Akşam (18:00-24:00)', 'Gece (24:00-06:00)'],
        required: true
      },
      {
        id: 'focus-issues',
        type: 'multiple-choice',
        question: 'Odaklanma konusunda hangi sorunlarınız var?',
        options: ['Çabuk yorulma', 'Dikkat dağılması', 'Uykusuzluk', 'Stres', 'Sorun yok'],
        required: true
      },
      {
        id: 'caffeine-preference',
        type: 'radio',
        question: 'Kafein tüketiminiz nasıl?',
        options: ['Hiç tüketmem', 'Az tüketirim', 'Orta düzeyde', 'Çok tüketirim'],
        required: true
      },
      {
        id: 'snack-preference',
        type: 'radio',
        question: 'Çalışırken atıştırmalık tercihiniz?',
        options: ['Tatlı', 'Tuzlu', 'Sağlıklı', 'Karışık'],
        required: true
      }
    ]
  },
  {
    packageId: 'sosyal',
    title: 'Sosyal Aktiviteler Anketi',
    description: 'Arkadaşlarınızla geçireceğiniz keyifli zamanlar için paketinizi özelleştirelim',
    questions: [
      {
        id: 'group-size',
        type: 'radio',
        question: 'Kaç kişilik bir grup olarak geliyorsunuz?',
        options: ['2-3 kişi', '4-6 kişi', '7-10 kişi', '10+ kişi'],
        required: true
      },
      {
        id: 'activity-type',
        type: 'multiple-choice',
        question: 'Hangi sosyal aktiviteleri yapıyorsunuz?',
        options: ['Sohbet', 'Oyun oynama', 'Müzik dinleme', 'Fotoğraf çekimi', 'Piknik'],
        required: true
      },
      {
        id: 'sharing-preference',
        type: 'radio',
        question: 'Paylaşım tercihiniz nasıl?',
        options: ['Herkes kendi yemeğini yer', 'Paylaşımlı büyük tabaklar', 'Karışık', 'Önemli değil'],
        required: true
      },
      {
        id: 'occasion',
        type: 'radio',
        question: 'Özel bir durum var mı?',
        options: ['Doğum günü', 'Mezuniyet', 'Buluşma', 'Sadece eğlence'],
        required: false
      },
      {
        id: 'budget-range',
        type: 'radio',
        question: 'Bütçe aralığınız?',
        options: ['Ekonomik', 'Orta', 'Premium', 'Önemli değil'],
        required: true
      }
    ]
  },
  {
    packageId: 'aciktim',
    title: 'Açlık Giderme Anketi', 
    description: 'Açlığınızı en iyi şekilde giderecek paketinizi belirleyelim',
    questions: [
      {
        id: 'hunger-level',
        type: 'radio',
        question: 'Açlık seviyeniz nasıl?',
        options: ['Hafif atıştırmalık', 'Orta düzey açlık', 'Çok açım', 'Aşırı açım'],
        required: true
      },
      {
        id: 'meal-timing',
        type: 'radio',
        question: 'Bu hangi öğününüzün yerini tutuyor?',
        options: ['Kahvaltı', 'Ara öğün', 'Öğle yemeği', 'Akşam yemeği', 'Gece atıştırması'],
        required: true
      },
      {
        id: 'food-preference',
        type: 'multiple-choice',
        question: 'Hangi tür yiyecekleri tercih ediyorsunuz?',
        options: ['Tatlı', 'Tuzlu', 'Sıcak yemek', 'Soğuk yemek', 'Meyve', 'Protein ağırlıklı'],
        required: true
      },
      {
        id: 'portion-size',
        type: 'radio',
        question: 'Porsiyon boyutu tercihiniz?',
        options: ['Küçük', 'Orta', 'Büyük', 'Çok büyük'],
        required: true
      },
      {
        id: 'eating-speed',
        type: 'radio',
        question: 'Ne kadar çabuk yemek istiyorsunuz?',
        options: ['Hemen (5 dk)', 'Çabuk (10 dk)', 'Normal (15 dk)', 'Rahat rahat'],
        required: true
      }
    ]
  }
];

// Spora özel ekipman anketleri
export const equipmentSurveys: PackageSurvey[] = [
  {
    packageId: 'yuzme-ekipman',
    title: 'Yüzme Ekipmanları',
    description: 'Yüzme için hangi ekipmanları almak istiyorsunuz?',
    questions: [
      {
        id: 'swimming-equipment',
        type: 'multiple-choice',
        question: 'Yüzme için hangi ekipmanları almak istiyorsunuz?',
        options: [
          '🥽 Yüzücü gözlüğü',
          '🏊‍♂️ Mayo/Şort',
          '🧴 Su geçirmez güneş kremi',
          '🩴 Havuz terliği',
          '🏊‍♀️ Bone',
          '💧 Su matarası',
          'Hiçbirini istemiyorum'
        ],
        required: true
      }
    ]
  },
  {
    packageId: 'voleybol-ekipman',
    title: 'Voleybol Ekipmanları',
    description: 'Voleybol için hangi ekipmanları almak istiyorsunuz?',
    questions: [
      {
        id: 'volleyball-equipment',
        type: 'multiple-choice',
        question: 'Voleybol için hangi ekipmanları almak istiyorsunuz?',
        options: [
          '🏐 Voleybol topu',
          '👕 Spor forması',
          '👟 Voleybol ayakkabısı',
          '🧤 Dizlik',
          '🧢 Şapka',
          '💧 Su matarası',
          'Hiçbirini istemiyorum'
        ],
        required: true
      }
    ]
  },
  {
    packageId: 'futbol-ekipman',
    title: 'Futbol Ekipmanları',
    description: 'Futbol için hangi ekipmanları almak istiyorsunuz?',
    questions: [
      {
        id: 'football-equipment',
        type: 'multiple-choice',
        question: 'Futbol için hangi ekipmanları almak istiyorsunuz?',
        options: [
          '⚽ Futbol topu',
          '👕 Futbol forması',
          '👟 Krampon',
          '🧤 Kaleci eldiveni',
          '🦵 Tekmelik',
          '💧 Su matarası',
          'Hiçbirini istemiyorum'
        ],
        required: true
      }
    ]
  },
  {
    packageId: 'kosu-ekipman',
    title: 'Koşu Ekipmanları',
    description: 'Koşu için hangi ekipmanları almak istiyorsunuz?',
    questions: [
      {
        id: 'running-equipment',
        type: 'multiple-choice',
        question: 'Koşu için hangi ekipmanları almak istiyorsunuz?',
        options: [
          '👟 Koşu ayakkabısı',
          '👕 Nefes alabilir tişört',
          '⌚ Spor saati',
          '💧 Su matarası',
          '🎧 Kablosuz kulaklık',
          '🧢 Koşu şapkası',
          'Hiçbirini istemiyorum'
        ],
        required: true
      }
    ]
  },
  {
    packageId: 'fitness-ekipman',
    title: 'Fitness Ekipmanları',
    description: 'Fitness için hangi ekipmanları almak istiyorsunuz?',
    questions: [
      {
        id: 'fitness-equipment',
        type: 'multiple-choice',
        question: 'Fitness için hangi ekipmanları almak istiyorsunuz?',
        options: [
          '🏋️‍♂️ Antrenman eldiveni',
          '👟 Antrenman ayakkabısı',
          '💧 Protein shaker',
          '🎧 Kulaklık',
          '👕 Spor kıyafeti',
          '🧘‍♀️ Yoga matı',
          'Hiçbirini istemiyorum'
        ],
        required: true
      }
    ]
  },
  {
    packageId: 'su-sporlari-ekipman',
    title: 'Su Sporları Ekipmanları',
    description: 'Su sporları için hangi ekipmanları almak istiyorsunuz?',
    questions: [
      {
        id: 'watersports-equipment',
        type: 'multiple-choice',
        question: 'Su sporları için hangi ekipmanları almak istiyorsunuz?',
        options: [
          '🏄‍♂️ Wetsuit',
          '🥽 Su sporları gözlüğü',
          '🦺 Can yeleği',
          '🧴 Su geçirmez çanta',
          '🧴 Su geçirmez güneş kremi',
          '🩴 Su ayakkabısı',
          'Hiçbirini istemiyorum'
        ],
        required: true
      }
    ]
  }
];

// Spora göre ekipman seçenekleri
export const sportEquipmentOptions: { [key: string]: string[] } = {
  'Yüzme': [
    '🥽 Yüzücü gözlüğü',
    '🏊‍♂️ Mayo/Şort',
    '🧴 Su geçirmez güneş kremi',
    '🩴 Havuz terliği',
    '🏊‍♀️ Bone',
    '💧 Su matarası',
    'Hiçbirini istemiyorum'
  ],
  'Voleybol': [
    '🏐 Voleybol topu',
    '👕 Spor forması',
    '👟 Voleybol ayakkabısı',
    '🧤 Dizlik',
    '🧢 Şapka',
    '💧 Su matarası',
    'Hiçbirini istemiyorum'
  ],
  'Futbol': [
    '⚽ Futbol topu',
    '👕 Futbol forması',
    '👟 Krampon',
    '🧤 Kaleci eldiveni',
    '🦵 Tekmelik',
    '💧 Su matarası',
    'Hiçbirini istemiyorum'
  ],
  'Koşu': [
    '👟 Koşu ayakkabısı',
    '👕 Nefes alabilir tişört',
    '⌚ Spor saati',
    '💧 Su matarası',
    '🎧 Kablosuz kulaklık',
    '🧢 Koşu şapkası',
    'Hiçbirini istemiyorum'
  ],
  'Fitness': [
    '🏋️‍♂️ Antrenman eldiveni',
    '👟 Antrenman ayakkabısı',
    '💧 Protein shaker',
    '🎧 Kulaklık',
    '👕 Spor kıyafeti',
    '🧘‍♀️ Yoga matı',
    'Hiçbirini istemiyorum'
  ],
  'Su sporları': [
    '🏄‍♂️ Wetsuit',
    '🥽 Su sporları gözlüğü',
    '🦺 Can yeleği',
    '🧴 Su geçirmez çanta',
    '🧴 Su geçirmez güneş kremi',
    '🩴 Su ayakkabısı',
    'Hiçbirini istemiyorum'
  ]
};