'use client';

import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <HeroSection />
      
      {!selectedCategory ? (
        <>
          <ActivitiesSection onSelectCategory={handleSelectCategory} />
          <PackagesSection />
        </>
      ) : (
        <PackagesSection 
          selectedCategory={selectedCategory}
        />
      )}
      
      <FeaturesSection />
      <CTASection />
      
      {/* Floating Buttons */}
      <FloatingButtons />
    </main>
  );
}
