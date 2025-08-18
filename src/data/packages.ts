import { Package } from '@/types';

export const sahilPackages: Package[] = [
  // Spor Paketleri
  {
    id: 'enerji-paketi',
    name: 'Enerji Paketi',
    description: 'Spor öncesi enerji için ideal atıştırmalıklar',
    emoji: '⚡',
    targetAudience: 'Spor yapmadan önce',
    price: 65,
    items: [
      { productId: 'muz', quantity: 2 },
      { productId: 'enerji-bari', quantity: 1 },
      { productId: 'isotonic-icecek', quantity: 1 }
    ],
    tags: ['Enerji', 'Spor Öncesi', 'Karbonhidrat'],
    color: 'from-[#FD8B51] to-[#FFDC7F]'
  },
  {
    id: 'protein-paketi',
    name: 'Protein Paketi',
    description: 'Spor sonrası kas gelişimi için protein deposu',
    emoji: '💪',
    targetAudience: 'Spor sonrası toparlanma',
    price: 85,
    items: [
      { productId: 'protein-smoothie', quantity: 1 },
      { productId: 'yumurta-sandwich', quantity: 1 },
      { productId: 'badem', quantity: 1 }
    ],
    tags: ['Protein', 'Spor Sonrası', 'Kas Gelişimi'],
    color: 'from-[#B3D8A8] to-[#A0D683]'
  },

  // Sosyal Paketler
  {
    id: 'sohbet-paketi',
    name: 'Sohbet Paketi',
    description: 'Arkadaşlarla keyifli sohbet için paylaşımlık lezzetler',
    emoji: '🗣️',
    targetAudience: 'Arkadaş buluşmaları',
    price: 120,
    items: [
      { productId: 'karisik-meze', quantity: 1 },
      { productId: 'nachos', quantity: 1 },
      { productId: 'limonata-buyuk', quantity: 2 },
      { productId: 'cikolata', quantity: 1 }
    ],
    tags: ['Paylaşım', 'Sohbet', 'Çeşitli'],
    color: 'from-[#FADA7A] to-[#FD8B51]'
  },
  {
    id: 'aile-paketi',
    name: 'Aile Paketi',
    description: 'Çocuklu aileler için sağlıklı ve lezzetli seçenekler',
    emoji: '👨‍👩‍👧‍👦',
    targetAudience: 'Aile zamanı',
    price: 150,
    items: [
      { productId: 'club-sandwich', quantity: 2 },
      { productId: 'meyve-salata', quantity: 1 },
      { productId: 'cocuk-menusu', quantity: 2 },
      { productId: 'su', quantity: 4 }
    ],
    tags: ['Aile', 'Çocuk Dostu', 'Sağlıklı'],
    color: 'from-[#B3D8A8] to-[#FADA7A]'
  },

  // Çalışma Paketi
  {
    id: 'odaklanma-paketi',
    name: 'Odaklanma Paketi',
    description: 'Ders çalışırken beyin gücünü artıran atıştırmalıklar',
    emoji: '📚',
    targetAudience: 'Ders çalışanlar',
    price: 55,
    items: [
      { productId: 'kuruyemis-karisik', quantity: 1 },
      { productId: 'soguk-kahve', quantity: 1 },
      { productId: 'bitter-cikolata', quantity: 1 }
    ],
    tags: ['Odaklanma', 'Beyin Gücü', 'Kafein'],
    color: 'from-[#FFDC7F] to-[#A0D683]'
  },

  // Beslenme Paketleri
  {
    id: 'tok-tutma-paketi',
    name: 'Tok Tutma Paketi',
    description: 'Ana öğün yerine geçecek doyurucu ve sağlıklı seçenekler',
    emoji: '🍽️',
    targetAudience: 'Ana öğün arası',
    price: 95,
    items: [
      { productId: 'avokado-tost', quantity: 1 },
      { productId: 'protein-salatasi', quantity: 1 },
      { productId: 'ayran', quantity: 1 }
    ],
    tags: ['Doyurucu', 'Sağlıklı', 'Ana Öğün'],
    color: 'from-[#A0D683] to-[#B3D8A8]'
  },
  {
    id: 'hafif-atistirma',
    name: 'Hafif Atıştırma',
    description: 'Küçük acıkma anları için hafif ve lezzetli',
    emoji: '🍃',
    targetAudience: 'Hafif acıkanlar',
    price: 35,
    items: [
      { productId: 'meyve-dilimleri', quantity: 1 },
      { productId: 'ayran-kucuk', quantity: 1 },
      { productId: 'susam-halkasi', quantity: 2 }
    ],
    tags: ['Hafif', 'Düşük Kalori', 'Çabuk'],
    color: 'from-[#FADA7A] to-[#FFDC7F]'
  },

  // Tatlı Paketi
  {
    id: 'seker-krizi-paketi',
    name: 'Şeker Krizi Paketi',
    description: 'Tatlı isteği geldiğinde vazgeçemeyeceğiniz lezzetler',
    emoji: '🍰',
    targetAudience: 'Tatlı severlere',
    price: 75,
    items: [
      { productId: 'waffle', quantity: 1 },
      { productId: 'dondurma', quantity: 1 },
      { productId: 'meyve-suyu', quantity: 1 },
      { productId: 'kurabiye', quantity: 3 }
    ],
    tags: ['Tatlı', 'Şeker', 'Keyif'],
    color: 'from-[#FD8B51] to-[#FADA7A]'
  }
];