export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-yellow-100/30"></div>
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#FD8B51] via-[#FFDC7F] to-[#A0D683] bg-clip-text text-transparent mb-6">
            Sahilde
          </h1>
        
          <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Spor, sohbet, çalışma... Ne yapıyorsan yap,<br />
            <span className="font-semibold text-[#FD8B51]">ihtiyacına özel paketler</span> yanında3!
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
  );
}