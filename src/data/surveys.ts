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
        type: 'multiple-choice',
        question: 'Hangi spor aktivitelerini yapıyorsunuz?',
        options: ['Yüzme', 'Voleybol', 'Futbol', 'Koşu', 'Fitness', 'Su sporları'],
        required: true
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