import HeroSection from '@/components/sections/HeroSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <HeroSection />
      <ActivitiesSection />
      <PackagesSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
