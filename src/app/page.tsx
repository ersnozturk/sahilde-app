import { sahilPackages } from '@/data/packages';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FADA7A]/20 via-white to-[#B3D8A8]/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFDC7F]/10 to-[#A0D683]/10"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">

            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#FD8B51] via-[#FFDC7F] to-[#A0D683] bg-clip-text text-transparent mb-6">
              Sahilde
            </h1>
          
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Spor, sohbet, çalışma... wNe yapıyorsan yap,<br />
              <span className="font-semibold text-[#FD8B51]">ihtiyacına özel paketler</span> yanında!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-[#FD8B51] to-[#FFDC7F] hover:from-[#E07B47] hover:to-[#F5D26B] text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Paketleri Keşfet
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="group bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 font-semibold py-4 px-8 rounded-2xl border border-[#B3D8A8]/30 hover:border-[#B3D8A8]/50 transition-all duration-300">
                <span className="flex items-center">
                  <svg className="mr-2 w-5 h-5 text-[#A0D683]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Konumumu Paylaş
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sahil Aktiviteleri */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Sahilde Ne Yapıyorsun?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aktivitene özel hazırladığımız paketlerle sahildeki zamanını daha da keyifli geçir
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#FD8B51]/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏃‍♂️</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Spor Yapıyorum</h3>
              <p className="text-gray-600 text-sm mb-3">Enerji & protein paketleri</p>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-[#FD8B51]/10 text-[#FD8B51] text-xs rounded-full font-medium">Enerji</span>
                <span className="px-2 py-1 bg-[#B3D8A8]/10 text-[#A0D683] text-xs rounded-full font-medium">Protein</span>
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#FADA7A]/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Arkadaşlarla Takılıyorum</h3>
              <p className="text-gray-600 text-sm mb-3">Paylaşımlık lezzetler</p>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-[#FADA7A]/10 text-[#FFDC7F] text-xs rounded-full font-medium">Sohbet</span>
                <span className="px-2 py-1 bg-[#B3D8A8]/10 text-[#B3D8A8] text-xs rounded-full font-medium">Aile</span>
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#FFDC7F]/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Ders Çalışıyorum</h3>
              <p className="text-gray-600 text-sm mb-3">Odaklanma paketi</p>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-[#FFDC7F]/10 text-[#FFDC7F] text-xs rounded-full font-medium">Odaklanma</span>
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#A0D683]/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🍽️</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Acıktım</h3>
              <p className="text-gray-600 text-sm mb-3">Tok tutma & hafif paketler</p>
              <div className="flex gap-1">
                <span className="px-2 py-1 bg-[#A0D683]/10 text-[#A0D683] text-xs rounded-full font-medium">Doyurucu</span>
                <span className="px-2 py-1 bg-[#FADA7A]/10 text-[#FADA7A] text-xs rounded-full font-medium">Hafif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Özel Paketler */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#B3D8A8]/10 to-[#FADA7A]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Sana Özel Paketler
            </h2>
            <p className="text-lg text-gray-600">İhtiyacına göre hazırlanmış özel kombinasyonlar</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sahilPackages.slice(0, 8).map((pkg) => (
              <div key={pkg.id} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
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
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-xl border border-[#B3D8A8]/30 hover:border-[#B3D8A8]/50 transition-all duration-300">
              Tüm Paketleri Gör
            </button>
          </div>
        </div>
      </section>

      {/* Nasıl Çalışır */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-lg text-gray-600">3 kolay adımda ihtiyacına uygun lezzetler</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Aktiviteni Seç",
                desc: "Sahilde ne yapıyorsun? Spor, sohbet, çalışma...",
                icon: "🎯",
                color: "from-[#FD8B51] to-[#FFDC7F]"
              },
              {
                step: "2", 
                title: "Paketi Belirle",
                desc: "İhtiyacına özel hazırlanmış paketlerden birini seç",
                icon: "📦",
                color: "from-[#B3D8A8] to-[#A0D683]"
              },
              {
                step: "3",
                title: "Keyfini Çıkar",
                desc: "15 dakikada konumuna özel lezzetler geliyor",
                icon: "😋",
                color: "from-[#FADA7A] to-[#FFDC7F]"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-r ${item.color} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#FD8B51] to-[#FFDC7F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Sahildeki Her Anın İçin Özel Lezzetler!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Spor yapıyor, çalışıyor veya arkadaşlarınla takılıyor olsan da - sana özel paketler hazır
          </p>
          <button className="bg-white hover:bg-gray-50 text-[#FD8B51] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Paketi Seç & Sipariş Ver
          </button>
        </div>
      </section>
    </main>
  );
}
