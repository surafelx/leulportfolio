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

      {/* Social Media */}
      <div className="mt-8 lg:mt-12">
        <PortfolioGrid
          title="Social Media"
          subtitle="Engaging social content that builds communities and drives interaction"
          category="Social Media"
          limit={8}
        />
      </div>

      <TestimonialsSection />

      {/* Presentation Decks */}
      <div className="bg-gray-50">
        <PortfolioGrid
          title="Presentation Decks"
          subtitle="Professional presentations that communicate ideas with impact"
          category="Decks"
          limit={8}
        />
      </div>

      {/* Motion Graphics */}
      <PortfolioGrid
        title="Motion Graphics"
        subtitle="Dynamic visual storytelling through motion graphics and animation"
        category="Motion Graphics"
        limit={8}
      />

      {/* TVC - Coming Soon */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100">
        <PortfolioGrid
          title="TV Commercials"
          subtitle="Professional television commercials and video campaigns"
          category="TVC"
          limit={8}
          comingSoon={true}
        />
      </div>

      {/* Branding Projects */}
      <PortfolioGrid
        title="Branding"
        subtitle="Complete brand systems that tell compelling stories and build lasting connections"
        category="Branding"
        limit={8}
      />
    </div>
  );
}
