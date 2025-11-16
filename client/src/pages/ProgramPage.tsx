import FeatureCard from '@/components/FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Lightbulb, MessageCircle, Users, Code } from 'lucide-react';
import stemImage from '@assets/generated_images/STEM_classroom_learning_f852a6d6.png';

export default function ProgramPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-testid="text-page-title">
              {t.theProgram.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t.theProgram.subtitle}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden mb-12">
            <img 
              src={stemImage} 
              alt="STEM Program"
              className="w-full h-96 object-cover"
            />
          </div>

          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            {t.theProgram.description}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Core Skills Developed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our program focuses on building essential competencies for the future
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <FeatureCard
              icon={Target}
              title={t.theProgram.skills.problemSolving}
            />
            <FeatureCard
              icon={Lightbulb}
              title={t.theProgram.skills.creativity}
            />
            <FeatureCard
              icon={MessageCircle}
              title={t.theProgram.skills.communication}
            />
            <FeatureCard
              icon={Users}
              title={t.theProgram.skills.collaboration}
            />
            <FeatureCard
              icon={Code}
              title={t.theProgram.skills.coding}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
