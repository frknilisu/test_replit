import FeatureCard from '@/components/FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Target, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import teamImage from '@assets/generated_images/Corporate_team_building_drones_8ad6d1b9.png';

export default function TeamBuildingPage() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-testid="text-page-title">
                {t.teamBuilding.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t.teamBuilding.description}
              </p>
              <Button size="lg" onClick={() => setLocation('/contact')} data-testid="button-book-event">
                {t.teamBuilding.cta}
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src={teamImage} 
                alt="Team building activity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team-building programs are designed to engage, challenge, and inspire
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Users}
              title={t.teamBuilding.features.collaboration}
            />
            <FeatureCard
              icon={Target}
              title={t.teamBuilding.features.problemSolving}
            />
            <FeatureCard
              icon={Trophy}
              title={t.teamBuilding.features.competition}
            />
            <FeatureCard
              icon={Zap}
              title={t.teamBuilding.features.skills}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
