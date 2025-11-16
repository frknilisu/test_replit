import FeatureCard from '@/components/FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, Target, Zap, Users } from 'lucide-react';
import droneImage from '@assets/generated_images/Educational_drone_product_shot_46f32f6b.png';

export default function WhoIsACodiacPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={droneImage} 
                alt="CoDrone EDU"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-testid="text-page-title">
                {t.whoIsACodiac.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {t.whoIsACodiac.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Codiac Traits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The characteristics that define a successful Codiac
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Lightbulb}
              title={t.whoIsACodiac.traits.creative}
            />
            <FeatureCard
              icon={Target}
              title={t.whoIsACodiac.traits.problemSolver}
            />
            <FeatureCard
              icon={Zap}
              title={t.whoIsACodiac.traits.techSavvy}
            />
            <FeatureCard
              icon={Users}
              title={t.whoIsACodiac.traits.collaborative}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
