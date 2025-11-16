import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import heroImage from '@assets/generated_images/Hero_drone_in_flight_dd0d1c29.png';

export default function Hero() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" data-testid="text-hero-title">
            {t.hero.title}{' '}
            <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-2xl" data-testid="text-hero-subtitle">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-base px-8"
              onClick={() => setLocation('/workshops')}
              data-testid="button-join-workshop"
            >
              {t.hero.ctaPrimary}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 backdrop-blur-sm bg-background/50"
              onClick={() => setLocation('/courses')}
              data-testid="button-explore-courses"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
