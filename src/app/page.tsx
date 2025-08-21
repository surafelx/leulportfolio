import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <AboutSection />

      {/* Featured Work - Key Visuals */}
      <PortfolioGrid
        title="Featured Key Visuals"
        subtitle="Strategic visual campaigns that capture attention and drive engagement"
        category="KV"
        limit={8}
      />

      <TestimonialsSection />

      {/* Branding Projects */}
      <PortfolioGrid
        title="Brand Identity Work"
        subtitle="Complete brand systems that tell compelling stories"
        category="Branding"
        limit={8}
      />

      {/* Motion Graphics */}
      <div className="bg-gray-50">
        <PortfolioGrid
          title="Motion & Animation"
          subtitle="Dynamic visual storytelling through motion graphics and animation"
          category="Motion Graphics"
          limit={8}
        />
      </div>

      {/* Recent Projects - All Categories */}
      <PortfolioGrid
        title="Recent Projects"
        subtitle="Latest creative work across all disciplines"
        limit={12}
        showViewAll={true}
      />
    </div>
  );
}
