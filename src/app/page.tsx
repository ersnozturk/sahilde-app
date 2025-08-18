import { sahilPackages } from '@/data/packages';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-yellow-100/30"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">

            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#FD8B51] via-[#FFDC7F] to-[#A0D683] bg-clip-text text-transparent mb-6">
              Sahilde
            </h1>
          
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              Spor, sohbet, çalışma... Ne yapıyorsan yap,<br />
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50/50 via-amber-50/50 to-yellow-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Sahilde Ne Yapıyorsun?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aktivitene özel hazırladığımız paketlerle sahildeki zamanını daha da keyifli geçir
            </p>
          </div>
          
          {/* Kartlar için üst boşluk ekledim */}
          <div className="pt-6 pb-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
              
              {/* Spor Kartı */}
              <div className="group relative h-80">
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform -translate-y-2 hover:-translate-y-4 border-2 border-gray-100/60 hover:border-[#FD8B51]/30 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FD8B51]/8 via-transparent to-[#FFDC7F]/8 rounded-3xl"></div>
                
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FD8B51]/25 to-[#FFDC7F]/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#A0D683]/20 to-[#B3D8A8]/15 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
                
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Güzel şekilli ikon container - Spor için dairesel gradient */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative">
                        {/* Ana ikon container - dairesel gradient */}
                        <div className="w-20 h-20 bg-gradient-to-br from-[#FD8B51] via-[#FF9A5E] to-[#FFDC7F] rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden">
                          {/* İç glow efekti */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                          {/* İkon */}
                          <div className="text-3xl relative z-10 drop-shadow-lg">🏃‍♂️</div>
                        </div>
                        
                        {/* Dekoratif pulse ring */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FD8B51]/30 to-[#FFDC7F]/30 rounded-full animate-pulse"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#FD8B51]/15 to-[#FFDC7F]/15 rounded-full animate-ping opacity-75"></div>
                        
                        {/* Küçük dekoratif noktalar */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFDC7F] rounded-full shadow-lg animate-bounce"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#FD8B51] rounded-full shadow-md"></div>
                      </div>
                    </div>
                  
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#FD8B51] transition-colors duration-300">Spor Yapıyorum</h3>
                  
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
                      Enerji ve protein dolu paketlerle<br />
                      performansını zirveye taşı
                    </p>
                  
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#FD8B51]/15 to-[#FFDC7F]/10 text-[#FD8B51] text-xs rounded-full font-semibold border border-[#FD8B51]/30 backdrop-blur-sm">
                        ⚡ Enerji Boost
                      </span>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#B3D8A8]/15 to-[#A0D683]/10 text-[#A0D683] text-xs rounded-full font-semibold border border-[#A0D683]/30 backdrop-blur-sm">
                        💪 Protein
                      </span>
                    </div>
                  
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-[#FD8B51] text-sm font-semibold flex items-center hover:text-[#E07B47] transition-colors">
                        Paketleri Gör 
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sosyal Kartı */}
              <div className="group relative h-80">
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform -translate-y-2 hover:-translate-y-4 border-2 border-gray-100/60 hover:border-[#FADA7A]/30 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FADA7A]/8 via-transparent to-[#FFDC7F]/8 rounded-3xl"></div>
                
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FADA7A]/25 to-[#FFDC7F]/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#B3D8A8]/20 to-[#A0D683]/15 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
                
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Güzel şekilli ikon container - Sosyal için kalp şekli */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative">
                        {/* Ana ikon container - yumuşak kare gradient */}
                        <div className="w-20 h-20 bg-gradient-to-br from-[#FADA7A] via-[#FFE699] to-[#FFDC7F] rounded-2xl flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden transform rotate-3">
                          {/* İç parlaklık */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/25 to-transparent rounded-2xl"></div>
                          {/* Alt gölge */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl"></div>
                          {/* İkon */}
                          <div className="text-3xl relative z-10 drop-shadow-lg">👥</div>
                        </div>
                        
                        {/* Dekoratif köşe highlight'ları */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#FFDC7F] to-[#FFE699] rounded-full shadow-md"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#FADA7A] to-[#FFE699] rounded-full shadow-sm animate-pulse"></div>
                        
                        {/* Floating particles */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FFDC7F] rounded-full animate-ping opacity-60"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FADA7A] rounded-full animate-bounce opacity-60"></div>
                      </div>
                    </div>
                  
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#FFDC7F] transition-colors duration-300">Arkadaşlarla Takılıyorum</h3>
                  
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
                      Paylaşımlık lezzetlerle<br />
                      sohbeti daha da renklendir
                    </p>
                  
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#FADA7A]/15 to-[#FFDC7F]/10 text-[#FFDC7F] text-xs rounded-full font-semibold border border-[#FFDC7F]/30 backdrop-blur-sm">
                        🗣️ Sohbet
                      </span>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#B3D8A8]/15 to-[#A0D683]/10 text-[#B3D8A8] text-xs rounded-full font-semibold border border-[#B3D8A8]/30 backdrop-blur-sm">
                        👨‍👩‍👧‍👦 Aile
                      </span>
                    </div>
                  
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-[#FFDC7F] text-sm font-semibold flex items-center hover:text-[#F5D26B] transition-colors">
                        Paketleri Gör 
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Çalışma Kartı */}
              <div className="group relative h-80">
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform -translate-y-2 hover:-translate-y-4 border-2 border-gray-100/60 hover:border-[#FFDC7F]/30 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFDC7F]/8 via-transparent to-[#A0D683]/8 rounded-3xl"></div>
                
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FFDC7F]/25 to-[#A0D683]/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#FADA7A]/20 to-[#B3D8A8]/15 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
                
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Güzel şekilli ikon container - Çalışma için hexagon */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative">
                        {/* Ana ikon container - hexagon benzeri */}
                        <div className="w-20 h-20 bg-gradient-to-br from-[#FFDC7F] via-[#F5D26B] to-[#A0D683] flex items-center justify-center group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden" 
                             style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
                          {/* İç glow efekti */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
                          {/* İkon */}
                          <div className="text-3xl relative z-10 drop-shadow-lg">📚</div>
                        </div>
                        
                        {/* Dekoratif çerçeve */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFDC7F]/40 to-[#A0D683]/40 animate-pulse"
                             style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                        
                        {/* Köşe vurgular */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#FFDC7F] rotate-45 shadow-lg"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#A0D683] rotate-45 shadow-md animate-pulse"></div>
                      </div>
                    </div>
                  
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#FFDC7F] transition-colors duration-300">Ders Çalışıyorum</h3>
                  
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
                      Beyin gücünü artıran<br />
                      atıştırmalıklarla odaklan
                    </p>
                  
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#FFDC7F]/15 to-[#A0D683]/10 text-[#FFDC7F] text-xs rounded-full font-semibold border border-[#FFDC7F]/30 backdrop-blur-sm">
                        🧠 Odaklanma
                      </span>
                    </div>
                  
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-[#FFDC7F] text-sm font-semibold flex items-center hover:text-[#F5D26B] transition-colors">
                        Paketleri Gör 
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Beslenme Kartı */}
              <div className="group relative h-80">
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform -translate-y-2 hover:-translate-y-4 border-2 border-gray-100/60 hover:border-[#A0D683]/30 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A0D683]/8 via-transparent to-[#B3D8A8]/8 rounded-3xl"></div>
                
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#A0D683]/25 to-[#B3D8A8]/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#FADA7A]/20 to-[#FFDC7F]/15 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
                
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Güzel şekilli ikon container - Beslenme için yuvarlak üçgen */}
                    <div className="relative mb-4 flex justify-center">
                      <div className="relative">
                        {/* Ana ikon container - oval şekil */}
                        <div className="w-20 h-20 bg-gradient-to-br from-[#A0D683] via-[#B3D8A8] to-[#C8E6C0] rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden">
                          {/* İç parlaklık efekti */}
                          <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-white/5 to-transparent rounded-full"></div>
                          {/* Alt gölge */}
                          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent rounded-b-full"></div>
                          {/* İkon */}
                          <div className="text-3xl relative z-10 drop-shadow-lg">🍽️</div>
                        </div>
                        
                        {/* Yemek temalı dekoratif elementler */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-[#C8E6C0] to-[#A0D683] rounded-full shadow-md"></div>
                        <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-[#B3D8A8] rounded-full shadow-sm animate-bounce"></div>
                        
                        {/* Organik noktalar */}
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
                        
                        {/* Çevre efekti */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#A0D683]/20 to-[#B3D8A8]/20 rounded-full animate-ping opacity-30"></div>
                      </div>
                    </div>
                  
                    <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#A0D683] transition-colors duration-300">Acıktım</h3>
                  
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
                      Tok tutma ve hafif paketlerle<br />
                      açlığını gider
                    </p>
                  
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#A0D683]/15 to-[#B3D8A8]/10 text-[#A0D683] text-xs rounded-full font-semibold border border-[#A0D683]/30 backdrop-blur-sm">
                        🥗 Doyurucu
                      </span>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#FADA7A]/15 to-[#FFDC7F]/10 text-[#FADA7A] text-xs rounded-full font-semibold border border-[#FADA7A]/30 backdrop-blur-sm">
                        🍃 Hafif
                      </span>
                    </div>
                  
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-[#A0D683] text-sm font-semibold flex items-center hover:text-[#8BC474] transition-colors">
                        Paketleri Gör 
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Özel Paketler */}
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-yellow-50/30">
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
