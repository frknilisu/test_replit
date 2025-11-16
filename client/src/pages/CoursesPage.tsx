import ProgramCard from '@/components/ProgramCard';
import { useLanguage } from '@/contexts/LanguageContext';
import beginnerImage from '@assets/generated_images/Educational_drone_product_shot_46f32f6b.png';
import intermediateImage from '@assets/generated_images/Students_coding_drones_workshop_86a71536.png';
import advancedImage from '@assets/generated_images/STEM_classroom_learning_f852a6d6.png';

export default function CoursesPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-testid="text-page-title">
              {t.courses.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.courses.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProgramCard
              title={t.courses.beginner.title}
              duration={t.courses.beginner.duration}
              description={t.courses.beginner.description}
              image={beginnerImage}
              onLearnMore={() => console.log('Beginner course')}
            />
            <ProgramCard
              title={t.courses.intermediate.title}
              duration={t.courses.intermediate.duration}
              description={t.courses.intermediate.description}
              image={intermediateImage}
              onLearnMore={() => console.log('Intermediate course')}
            />
            <ProgramCard
              title={t.courses.advanced.title}
              duration={t.courses.advanced.duration}
              description={t.courses.advanced.description}
              image={advancedImage}
              onLearnMore={() => console.log('Advanced course')}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
