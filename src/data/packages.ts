import { Package } from '@/types';

export interface PackageCategory {
  id: string;
  name: string;
  description: string;
  emoji: string;
  color: string;
  packages: Package[];
}

export const sahilPackages: Package[] = [
  // SPOR PAKETLERİ
  {
    id: 'enerji-paketi',
    name: 'Enerji Paketi',
    description: 'Spor öncesi enerji için ideal atıştırmalıklar',
    emoji: '⚡',
    targetAudience: 'Spor yapmadan önce',
    price: 65,
    category: 'spor',
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
    category: 'spor',
    items: [
      { productId: 'protein-smoothie', quantity: 1 },
      { productId: 'yumurta-sandwich', quantity: 1 },
      { productId: 'badem', quantity: 1 }
    ],
    tags: ['Protein', 'Spor Sonrası', 'Kas Gelişimi'],
    color: 'from-[#B3D8A8] to-[#A0D683]'
  },
  {
    id: 'hidrasyon-paketi',
    name: 'Hidrasyon Paketi',
    description: 'Spor sırasında sıvı dengesini korumak için',
    emoji: '💧',
    targetAudience: 'Spor sırasında',
    price: 45,
    category: 'spor',
    items: [
      { productId: 'isotonic-icecek', quantity: 2 },
      { productId: 'su', quantity: 2 },
      { productId: 'tuz-krakerler', quantity: 1 }
    ],
    tags: ['Hidrasyon', 'Elektrolit', 'Sıvı'],
    color: 'from-[#B3D8A8] to-[#FFDC7F]'
  },

  // DERS ÇALIŞMA PAKETLERİ
  {
    id: 'odaklanma-paketi',
    name: 'Odaklanma Paketi',
    description: 'Ders çalışırken beyin gücünü artıran atıştırmalıklar',
    emoji: '📚',
    targetAudience: 'Ders çalışanlar',
    price: 55,
    category: 'ders',
    items: [
      { productId: 'kuruyemis-karisik', quantity: 1 },
      { productId: 'soguk-kahve', quantity: 1 },
      { productId: 'bitter-cikolata', quantity: 1 }
    ],
    tags: ['Odaklanma', 'Beyin Gücü', 'Kafein'],
    color: 'from-[#FFDC7F] to-[#A0D683]'
  },
  {
    id: 'uyaniklik-paketi',
    name: 'Uyanıklık Paketi',
    description: 'Geç saatlerde çalışma için enerji desteği',
    emoji: '☕',
    targetAudience: 'Gece çalışanları',
    price: 40,
    category: 'ders',
    items: [
      { productId: 'kahve', quantity: 1 },
      { productId: 'enerji-bari', quantity: 1 },
      { productId: 'kuruyemis', quantity: 1 }
    ],
    tags: ['Kafein', 'Uyanıklık', 'Gece'],
    color: 'from-[#FD8B51] to-[#B3D8A8]'
  },
  {
    id: 'hafiza-paketi',
    name: 'Hafıza Paketi',
    description: 'Hafıza güçlendirici besinlerle dolu paket',
    emoji: '🧠',
    targetAudience: 'Sınav hazırlığı',
    price: 70,
    category: 'ders',
    items: [
      { productId: 'ceviz', quantity: 1 },
      { productId: 'badem', quantity: 1 },
      { productId: 'yaban-mersini', quantity: 1 },
      { productId: 'yesil-cay', quantity: 1 }
    ],
    tags: ['Hafıza', 'Antioksidan', 'Beyin'],
    color: 'from-[#A0D683] to-[#FADA7A]'
  },

  // ARKADAŞLARLA TAKILIYOR PAKETLERİ
  {
    id: 'sohbet-paketi',
    name: 'Sohbet Paketi',
    description: 'Arkadaşlarla keyifli sohbet için paylaşımlık lezzetler',
    emoji: '🗣️',
    targetAudience: 'Arkadaş buluşmaları',
    price: 120,
    category: 'sosyal',
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
    id: 'parti-paketi',
    name: 'Parti Paketi',
    description: 'Arkadaş grubu için büyük paylaşım paketi',
    emoji: '🎉',
    targetAudience: 'Grup etkinlikleri',
    price: 200,
    category: 'sosyal',
    items: [
      { productId: 'pizza-dilim', quantity: 4 },
      { productId: 'patates-kizartmasi', quantity: 2 },
      { productId: 'cola', quantity: 4 },
      { productId: 'dips-cesitli', quantity: 1 }
    ],
    tags: ['Grup', 'Parti', 'Büyük Porsiyon'],
    color: 'from-[#FD8B51] to-[#FADA7A]'
  },
  {
    id: 'oyun-paketi',
    name: 'Oyun Paketi',
    description: 'Oyun oynarken atıştırmak için pratik lezzetler',
    emoji: '🎮',
    targetAudience: 'Oyun sevenler',
    price: 80,
    category: 'sosyal',
    items: [
      { productId: 'patlamis-misir', quantity: 1 },
      { productId: 'cips-cesitli', quantity: 2 },
      { productId: 'enerji-icecegi', quantity: 2 }
    ],
    tags: ['Praktik', 'Oyun', 'Atıştırmalık'],
    color: 'from-[#B3D8A8] to-[#FFDC7F]'
  },

  // ACIKIM PAKETLERİ
  {
    id: 'tok-tutma-paketi',
    name: 'Tok Tutma Paketi',
    description: 'Ana öğün yerine geçecek doyurucu ve sağlıklı seçenekler',
    emoji: '🍽️',
    targetAudience: 'Ana öğün arası',
    price: 95,
    category: 'aciktim',
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
    category: 'aciktim',
    items: [
      { productId: 'meyve-dilimleri', quantity: 1 },
      { productId: 'ayran-kucuk', quantity: 1 },
      { productId: 'susam-halkasi', quantity: 2 }
    ],
    tags: ['Hafif', 'Düşük Kalori', 'Çabuk'],
    color: 'from-[#FADA7A] to-[#FFDC7F]'
  },
  {
    id: 'seker-krizi-paketi',
    name: 'Şeker Krizi Paketi',
    description: 'Tatlı isteği geldiğinde vazgeçemeyeceğiniz lezzetler',
    emoji: '🍰',
    targetAudience: 'Tatlı severlere',
    price: 75,
    category: 'aciktim',
    items: [
      { productId: 'waffle', quantity: 1 },
      { productId: 'dondurma', quantity: 1 },
      { productId: 'meyve-suyu', quantity: 1 },
      { productId: 'kurabiye', quantity: 3 }
    ],
    tags: ['Tatlı', 'Şeker', 'Keyif'],
    color: 'from-[#FD8B51] to-[#FADA7A]'
  },
  {
    id: 'asiri-aclik-paketi',
    name: 'Aşırı Açlık Paketi',
    description: 'Çok açken hızlıca doyabilecek mega paket',
    emoji: '😋',
    targetAudience: 'Çok açlar',
    price: 140,
    category: 'aciktim',
    items: [
      { productId: 'sandwich-buyuk', quantity: 1 },
      { productId: 'patates-kizartmasi', quantity: 1 },
      { productId: 'cola', quantity: 1 },
      { productId: 'meyve', quantity: 1 },
      { productId: 'tatli', quantity: 1 }
    ],
    tags: ['Büyük Porsiyon', 'Doyurucu', 'Hızlı'],
    color: 'from-[#FD8B51] to-[#A0D683]'
  }
];

export const packageCategories: PackageCategory[] = [
  {
    id: 'spor',
    name: 'Spor Yapıyorum',
    description: 'Antrenman öncesi, sırası ve sonrası için özel beslenme paketleri',
    emoji: '🏃‍♂️',
    color: 'from-[#FD8B51] to-[#FFDC7F]',
    packages: sahilPackages.filter(pkg => pkg.category === 'spor')
  },
  {
    id: 'ders',
    name: 'Ders Çalışıyorum',
    description: 'Konsantrasyon ve beyin gücünü artıran beslenme paketleri',
    emoji: '📚',
    color: 'from-[#FFDC7F] to-[#A0D683]',
    packages: sahilPackages.filter(pkg => pkg.category === 'ders')
  },
  {
    id: 'sosyal',
    name: 'Arkadaşlarla Takılıyorum',
    description: 'Sosyal aktiviteler için paylaşımlık ve eğlenceli paketler',
    emoji: '👥',
    color: 'from-[#FADA7A] to-[#FD8B51]',
    packages: sahilPackages.filter(pkg => pkg.category === 'sosyal')
  },
  {
    id: 'aciktim',
    name: 'Acıktım',
    description: 'Açlığınızı giderecek hafiften doyurucuya kadar tüm seçenekler',
    emoji: '🍽️',
    color: 'from-[#A0D683] to-[#B3D8A8]',
    packages: sahilPackages.filter(pkg => pkg.category === 'aciktim')
  }
];