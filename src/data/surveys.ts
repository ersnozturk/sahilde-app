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
    packageId: 'beach-comfort',
    title: 'Plaj Konforu Paketi Anketi',
    description: 'Size en uygun plaj deneyimini sunabilmek için birkaç soru yanıtlayın',
    questions: [
      {
        id: 'group-size',
        type: 'radio',
        question: 'Kaç kişilik bir grup için sipariş veriyorsunuz?',
        options: ['1-2 kişi', '3-4 kişi', '5-6 kişi', '7+ kişi'],
        required: true
      },
      {
        id: 'dietary-preferences',
        type: 'multiple-choice',
        question: 'Beslenme tercihleriniz nelerdir? (Birden fazla seçebilirsiniz)',
        options: ['Vejetaryen', 'Vegan', 'Glutensiz', 'Helal', 'Özel diyet yok'],
        required: true
      },
      {
        id: 'preferred-time',
        type: 'radio',
        question: 'Tercih ettiğiniz teslimat saati?',
        options: ['09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00'],
        required: true
      },
      {
        id: 'location',
        type: 'text',
        question: 'Plajdaki konumunuz (örn: şemsiye no, işaret noktası)',
        placeholder: 'Mavi şemsiye, 15 numaralı şezlong yanı...',
        required: true
      },
      {
        id: 'special-requests',
        type: 'textarea',
        question: 'Özel istekleriniz var mı?',
        placeholder: 'Ekstra sos, soğuk içecek tercihi, alerji durumu vb...',
        required: false
      }
    ]
  },
  {
    packageId: 'water-sports',
    title: 'Su Sporları Enerji Paketi Anketi',
    description: 'Su sporları aktiviteniz için enerji paketinizi özelleştirelim',
    questions: [
      {
        id: 'activity-type',
        type: 'multiple-choice',
        question: 'Hangi su sporları aktivitelerini yapıyorsunuz?',
        options: ['Sörf', 'Jet-ski', 'Parasailing', 'Dalış', 'Yüzme', 'Diğer'],
        required: true
      },
      {
        id: 'energy-level',
        type: 'radio',
        question: 'Enerji ihtiyacınız nasıl?',
        options: ['Hafif atıştırmalık', 'Orta düzey beslenme', 'Yoğun enerji desteği'],
        required: true
      },
      {
        id: 'hydration-preference',
        type: 'radio',
        question: 'Hidrasyon tercihiniz?',
        options: ['Su', 'Sporcu içecekleri', 'Taze meyve suyu', 'Karışık'],
        required: true
      },
      {
        id: 'timing',
        type: 'radio',
        question: 'Ne zaman tüketmeyi planlıyorsunuz?',
        options: ['Aktivite öncesi', 'Aktivite arası', 'Aktivite sonrası'],
        required: true
      },
      {
        id: 'contact',
        type: 'text',
        question: 'İletişim numaranız',
        placeholder: '+90 5XX XXX XX XX',
        required: true
      }
    ]
  },
  {
    packageId: 'family-fun',
    title: 'Aile Eğlence Paketi Anketi',
    description: 'Ailenizin plaj gününü mükemmel hale getirelim',
    questions: [
      {
        id: 'children-ages',
        type: 'text',
        question: 'Çocukların yaşları (varsa)',
        placeholder: 'Örn: 5, 8, 12 yaş',
        required: false
      },
      {
        id: 'food-preferences',
        type: 'multiple-choice',
        question: 'Aile üyelerinin yemek tercihleri?',
        options: ['Çocuk dostu', 'Sağlıklı seçenekler', 'Geleneksel tatlar', 'Uluslararası lezzetler'],
        required: true
      },
      {
        id: 'package-size',
        type: 'radio',
        question: 'Paket boyutu tercihiniz?',
        options: ['Küçük aile (2-3 kişi)', 'Orta aile (4-5 kişi)', 'Büyük aile (6+ kişi)'],
        required: true
      },
      {
        id: 'entertainment',
        type: 'multiple-choice',
        question: 'Hangi eğlence aktivitelerine katılmak istiyorsunuz?',
        options: ['Plaj oyunları', 'Müzik', 'Çocuk animasyonu', 'Fotoğraf çekimi'],
        required: false
      },
      {
        id: 'delivery-time',
        type: 'radio',
        question: 'Tercih ettiğiniz teslimat zamanı?',
        options: ['Sabah (09:00-12:00)', 'Öğle (12:00-15:00)', 'İkindi (15:00-18:00)'],
        required: true
      }
    ]
  }
];