import { sahilPackages } from '@/data/packages';

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
        <div className="flex flex-wrap gap-1 mb-4">
          {pkg.tags.slice(0, 2).map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#FD8B51] font-bold text-xl mb-4">{pkg.price}₺</p>
        <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg`}>
          Paketi Seç
        </button>
      </div>
    </div>
  );
}

export default function PackagesSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-yellow-100/40 to-amber-100/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Sana Özel Paketler
          </h2>
          <p className="text-lg text-gray-600">İhtiyacına göre hazırlanmış özel kombinasyonlar</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sahilPackages.slice(0, 8).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-xl border border-[#B3D8A8]/30 hover:border-[#B3D8A8]/50 transition-all duration-300">
            Tüm Paketleri Gör
          </button>
        </div>
      </div>
    </section>
  );
}