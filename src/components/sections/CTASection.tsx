export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#FD8B51] via-[#FFDC7F] to-[#A0D683]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sahil Macerası Başlasın! 🏖️
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lokasyonunu paylaş, ihtiyacına özel paketini seç,<br />
            15 dakikada kapında olsun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-[#FD8B51] font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Hemen Başla
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300">
              Nasıl Çalışır?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}