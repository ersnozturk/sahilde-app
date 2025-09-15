'use client';

import { useState } from 'react';
import { packageCategories } from '@/data/packages';
import { packageSurveys, PackageSurvey } from '@/data/surveys';
import SurveyModal from '@/components/SurveyModal';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    emoji: string;
    color: string;
    packages: Array<{
      id: string;
      name: string;
      emoji: string;
    }>;
  };
  onSelectCategory: (categoryId: string) => void;
}

function CategoryCard({ category, onSelectCategory }: CategoryCardProps) {
  return (
    <div 
      onClick={() => onSelectCategory(category.id)}
      className="group relative h-80 cursor-pointer"
    >
      <div className={`relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform -translate-y-2 hover:-translate-y-4 border-2 border-gray-100/60 hover:border-orange-300/30 h-full`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-8 rounded-3xl`}></div>
      
        <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${category.color} opacity-25 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-orange-200/20 to-yellow-200/15 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
      
        <div className="relative z-10 h-full flex flex-col">
          <div className="relative mb-4 flex justify-center">
            <div className="relative">
              <div 
                className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="text-3xl relative z-10 drop-shadow-lg">{category.emoji}</div>
              </div>
            </div>
          </div>
        
          <h3 className={`text-lg font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300`}>
            {category.name}
          </h3>
        
          <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
            {category.description}
          </p>
        
          {/* Paket içerikleri önizlemesi */}
          <div className="flex flex-wrap gap-1 mb-4">
            {category.packages.slice(0, 3).map((pkg, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {pkg.emoji} {pkg.name.split(' ')[0]}
              </span>
            ))}
            {category.packages.length > 3 && (
              <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs rounded-full">
                +{category.packages.length - 3}
              </span>
            )}
          </div>
        
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className={`text-orange-600 text-sm font-semibold flex items-center hover:opacity-80 transition-colors`}>
              Anketi Başlat 
              <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActivityCardProps {
  title: string;
  description: string;
  emoji: string;
  packageId: string;
  tags: Array<{
    text: string;
    color: string;
  }>;
  gradientFrom: string;
  gradientTo: string;
  hoverColor: string;
  iconShape: 'circle' | 'rounded-square' | 'hexagon' | 'oval';
  onSelectCategory: () => void;
}

function ActivityCard({ title, description, emoji, tags, gradientFrom, gradientTo, hoverColor, iconShape, onSelectCategory }: ActivityCardProps) {
  const getIconShapeClasses = () => {
    switch (iconShape) {
      case 'circle':
        return 'rounded-full';
      case 'rounded-square':
        return 'rounded-2xl transform rotate-3';
      case 'hexagon':
        return 'hexagon-shape';
      case 'oval':
        return 'rounded-full';
      default:
        return 'rounded-full';
    }
  };

  const getIconShapeStyle = () => {
    if (iconShape === 'hexagon') {
      return { clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' };
    }
    return {};
  };

  return (
    <div className="group relative h-80">
      <div 
        onClick={onSelectCategory}
        className={`relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform -translate-y-2 hover:-translate-y-4 border-2 border-gray-100/60 hover:border-${hoverColor}/30 h-full cursor-pointer`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom}/8 via-transparent to-${gradientTo}/8 rounded-3xl`}></div>
      
        <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-${gradientFrom}/25 to-${gradientTo}/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#B3D8A8]/20 to-[#A0D683]/15 rounded-full blur-lg group-hover:scale-125 transition-transform duration-700"></div>
      
        <div className="relative z-10 h-full flex flex-col">
          <div className="relative mb-4 flex justify-center">
            <div className="relative">
              <div 
                className={`w-20 h-20 bg-gradient-to-br from-${gradientFrom} via-${gradientFrom} to-${gradientTo} ${getIconShapeClasses()} flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}
                style={getIconShapeStyle()}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="text-3xl relative z-10 drop-shadow-lg">{emoji}</div>
              </div>
            </div>
          </div>
        
          <h3 className={`text-lg font-bold mb-2 text-gray-800 group-hover:text-${hoverColor} transition-colors duration-300`}>{title}</h3>
        
          <p className="text-gray-600 text-sm mb-4 leading-relaxed h-10 overflow-hidden">
            {description}
          </p>
        
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className={`px-3 py-1.5 bg-gradient-to-r ${tag.color} text-xs rounded-full font-semibold border backdrop-blur-sm`}>
                {tag.text}
              </span>
            ))}
          </div>
        
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className={`text-${hoverColor} text-sm font-semibold flex items-center hover:opacity-80 transition-colors`}>
              Anketi Başlat 
              <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ActivitiesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function ActivitiesSection({ onSelectCategory }: ActivitiesSectionProps) {
  const [selectedSurvey, setSelectedSurvey] = useState<PackageSurvey | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectCategory = (categoryId: string) => {
    // İlgili kategorinin anketini bul
    const survey = packageSurveys.find(s => s.packageId === categoryId);
    if (survey) {
      setSelectedSurvey(survey);
      setIsModalOpen(true);
    } else {
      // Kategori anket yoksa genel anket göster
      setSelectedSurvey(packageSurveys[0]);
      setIsModalOpen(true);
    }
  };

  const handleSurveySubmit = (data: Record<string, unknown>) => {
    console.log('Kategori Anketi Cevapları:', data);
    console.log('Seçilen Kategori:', selectedSurvey?.packageId);
    
    // Burada Firebase'e veri gönderebilirsiniz
    // NOT: onSelectCategory çağrısını kaldırdık - sayfa değişmesin
    
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSurvey(null);
  };

  const activities = [
    {
      title: "Spor Yapıyorum",
      description: "Enerji ve protein dolu paketlerle\nperformansını zirveye taşı",
      emoji: "🏃‍♂️",
      packageId: "spor",
      tags: [
        { text: "⚡ Enerji Boost", color: "from-[#FD8B51]/15 to-[#FFDC7F]/10 text-[#FD8B51] border-[#FD8B51]/30" },
        { text: "💪 Protein", color: "from-[#B3D8A8]/15 to-[#A0D683]/10 text-[#A0D683] border-[#A0D683]/30" }
      ],
      gradientFrom: "[#FD8B51]",
      gradientTo: "[#FFDC7F]",
      hoverColor: "[#FD8B51]",
      iconShape: "circle" as const
    },
    {
      title: "Arkadaşlarla Takılıyorum",
      description: "Paylaşımlık lezzetlerle\nsohbeti daha da renklendir",
      emoji: "👥",
      packageId: "sosyal",
      tags: [
        { text: "🗣️ Sohbet", color: "from-[#FADA7A]/15 to-[#FFDC7F]/10 text-[#FFDC7F] border-[#FFDC7F]/30" },
        { text: "👨‍👩‍👧‍👦 Aile", color: "from-[#B3D8A8]/15 to-[#A0D683]/10 text-[#B3D8A8] border-[#B3D8A8]/30" }
      ],
      gradientFrom: "[#FADA7A]",
      gradientTo: "[#FFDC7F]",
      hoverColor: "[#FFDC7F]",
      iconShape: "rounded-square" as const
    },
    {
      title: "Ders Çalışıyorum",
      description: "Beyin gücünü artıran\natıştırmalıklarla odaklan",
      emoji: "📚",
      packageId: "ders",
      tags: [
        { text: "🧠 Odaklanma", color: "from-[#FFDC7F]/15 to-[#A0D683]/10 text-[#FFDC7F] border-[#FFDC7F]/30" }
      ],
      gradientFrom: "[#FFDC7F]",
      gradientTo: "[#A0D683]",
      hoverColor: "[#FFDC7F]",
      iconShape: "hexagon" as const
    },
    {
      title: "Acıktım",
      description: "Tok tutma ve hafif paketlerle\naçlığını gider",
      emoji: "🍽️",
      packageId: "aciktim",
      tags: [
        { text: "🥗 Doyurucu", color: "from-[#A0D683]/15 to-[#B3D8A8]/10 text-[#A0D683] border-[#A0D683]/30" },
        { text: "🍃 Hafif", color: "from-[#FADA7A]/15 to-[#FFDC7F]/10 text-[#FADA7A] border-[#FADA7A]/30" }
      ],
      gradientFrom: "[#A0D683]",
      gradientTo: "[#B3D8A8]",
      hoverColor: "[#A0D683]",
      iconShape: "oval" as const
    }
  ];

  return (
    <>
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
          
          <div className="pt-6 pb-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
              {activities.map((activity, index) => (
                <ActivityCard 
                  key={index} 
                  {...activity} 
                  onSelectCategory={() => onSelectCategory(activity.packageId)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Survey Modal */}
      {selectedSurvey && (
        <SurveyModal
          survey={selectedSurvey}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSurveySubmit}
        />
      )}
    </>
  );
}