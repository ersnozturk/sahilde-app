'use client';

import { sahilPackages, packageCategories } from '@/data/packages';

interface PackageCardProps {
  pkg: {
    id: string;
    name: string;
    targetAudience: string;
    description: string;
    tags: string[];
    price: number;
    emoji: string;
    color: string;
    category: string;
    items: { productId: string; quantity: number; }[];
  };
}

function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${pkg.color} opacity-15 rounded-bl-full`}></div>
      <div className="relative">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{pkg.emoji}</div>
        <h4 className="font-bold text-gray-800 mb-2">{pkg.name}</h4>
        <p className="text-sm text-gray-500 mb-2">{pkg.targetAudience}</p>
        <p className="text-xs text-gray-600 mb-3">{pkg.description}</p>
        
        {/* Paket içerikleri */}
        <div className="mb-4">
          <h5 className="text-xs font-semibold text-gray-700 mb-2">Paket İçeriği:</h5>
          <div className="space-y-1">
            {pkg.items.slice(0, 3).map((item, index) => (
              <div key={index} className="text-xs text-gray-600 flex items-center">
                <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                {item.quantity}x {item.productId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
            ))}
            {pkg.items.length > 3 && (
              <div className="text-xs text-gray-500">
                +{pkg.items.length - 3} ürün daha...
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {pkg.tags.slice(0, 2).map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#FD8B51] font-bold text-xl mb-4">{pkg.price}₺</p>
        <button 
          className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg`}
        >
          Paketi Sipariş Et
        </button>
      </div>
    </div>
  );
}

interface PackagesSectionProps {
  selectedCategory?: string;
  onBackToCategories?: () => void;
}

export default function PackagesSection({ selectedCategory, onBackToCategories }: PackagesSectionProps) {
  // Eğer kategori seçilmişse o kategorideki paketleri, yoksa tüm paketleri göster
  const packagesToShow = selectedCategory 
    ? sahilPackages.filter(pkg => pkg.category === selectedCategory)
    : sahilPackages;

  // Seçili kategori bilgisini al
  const selectedCategoryInfo = selectedCategory 
    ? packageCategories.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-yellow-100/40 to-amber-100/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {selectedCategoryInfo ? (
            <>
              {/* Geri dönüş butonu */}
              <div className="flex items-center justify-center mb-6">
                <button 
                  onClick={onBackToCategories}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Kategorilere Dön</span>
                </button>
              </div>

              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedCategoryInfo.color} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-3xl">{selectedCategoryInfo.emoji}</span>
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    {selectedCategoryInfo.name}
                  </h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-4">{selectedCategoryInfo.description}</p>
              <p className="text-lg text-[#FD8B51] font-semibold">Senin İçin Özenle Hazırladık ✨</p>
            </>
          ) : (
            <>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Senin İçin Özenle Hazırladık
              </h2>
              <p className="text-lg text-gray-600">İhtiyacına göre özel olarak seçilmiş lezzetli kombinasyonlar</p>
            </>
          )}
        </div>

        {/* Kategori filtreleri (sadece tüm paketler görünümünde) */}
        {!selectedCategory && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {packageCategories.map((category) => (
              <div
                key={category.id}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-medium shadow-md`}
              >
                {category.emoji} {category.name}
              </div>
            ))}
          </div>
        )}
        
        {/* Paket kartları */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packagesToShow.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              pkg={pkg}
            />
          ))}
        </div>

        {/* Boş durumu */}
        {packagesToShow.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Bu kategoride henüz paket bulunmuyor.</p>
          </div>
        )}
      </div>
    </section>
  );
}