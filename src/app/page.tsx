'use client';

import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import FloatingButtons from '@/components/FloatingButtons';
import SurveyModal from '@/components/SurveyModal';
import { packageSurveys } from '@/data/surveys';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Kategori seçildiğinde anket modalını aç
    const survey = packageSurveys.find(s => s.packageId === categoryId);
    if (survey) {
      setSelectedSurvey(categoryId);
      setIsSurveyOpen(true);
    }
  };

  const handleSurveySubmit = (data: Record<string, unknown>) => {
    console.log('Anket sonuçları:', data);
    // Burada anket verilerini işleyebilirsiniz
  };

  const handleSurveyClose = () => {
    setIsSurveyOpen(false);
    setSelectedSurvey(null);
  };

  const currentSurvey = selectedSurvey ? packageSurveys.find(s => s.packageId === selectedSurvey) : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <HeroSection />
      <ActivitiesSection onSelectCategory={handleSelectCategory} />
      <PackagesSection />
      <FeaturesSection />
      <CTASection />      
      <FloatingButtons />

      {/* Survey Modal */}
      {currentSurvey && (
        <SurveyModal
          survey={currentSurvey}
          isOpen={isSurveyOpen}
          onClose={handleSurveyClose}
          onSubmit={handleSurveySubmit}
        />
      )}
    </main>
  );
}
