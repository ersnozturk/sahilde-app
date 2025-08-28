'use client';

import { useState } from 'react';
import { packageCategories } from '@/data/packages';
import { packageSurveys, PackageSurvey } from '@/data/surveys';
import SurveyModal from '@/components/SurveyModal';

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

interface ActivitiesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function ActivitiesSection({ onSelectCategory: _onSelectCategory }: ActivitiesSectionProps) {
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

  return (
    <>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50/50 via-amber-50/50 to-yellow-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Sahile İnince Ne Yapıyorsun?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sahil keyfinizi doruğa çıkaracak, aktivitenize özel hazırladığımız lezzetli paketlerle tanışın
            </p>
          </div>
          
          <div className="pt-6 pb-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
              {packageCategories.map((category) => (
                <CategoryCard 
                  key={category.id} 
                  category={category}
                  onSelectCategory={handleSelectCategory}
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