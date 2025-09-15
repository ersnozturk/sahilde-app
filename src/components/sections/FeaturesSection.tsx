export default function FeaturesSection() {
  const features = [
    {
      icon: "🏖️",
      title: "Sahile Özel",
      description: "Her sahilin kendine özgü lezzetleri"
    },
    {
      icon: "⚡",
      title: "Anında Teslimat",
      description: "Sahildeyken 15 dakikada yanında"
    },
    {
      icon: "🎯",
      title: "Aktivite Bazlı",
      description: "Ne yapıyorsan ona özel paketler"
    },
    {
      icon: "🌊",
      title: "Sahil Tecrübesi",
      description: "Sahil keyfini maksimuma çıkar"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Neden Sahile.in?
          </h2>
          <p className="text-lg text-gray-600">Sahil deneyimini mükemmel kılan özelliklerle yanınızdayız</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FD8B51]/10 to-[#FFDC7F]/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}