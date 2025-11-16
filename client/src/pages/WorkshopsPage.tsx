import ProgramCard from '@/components/ProgramCard';
import { useLanguage } from '@/contexts/LanguageContext';
import blocklyImage from '@assets/generated_images/Blockly_programming_closeup_72bb0b1d.png';
import workshopImage from '@assets/generated_images/Students_coding_drones_workshop_86a71536.png';
import droneImage from '@assets/generated_images/Educational_drone_product_shot_46f32f6b.png';

export default function WorkshopsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-testid="text-page-title">
              {t.workshops.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.workshops.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProgramCard
              title={t.workshops.blockly.title}
              duration={t.workshops.blockly.duration}
              description={t.workshops.blockly.description}
              image={blocklyImage}
              onLearnMore={() => console.log('Blockly workshop')}
            />
            <ProgramCard
              title={t.workshops.python.title}
              duration={t.workshops.python.duration}
              description={t.workshops.python.description}
              image={workshopImage}
              onLearnMore={() => console.log('Python workshop')}
            />
            <ProgramCard
              title={t.workshops.advanced.title}
              duration={t.workshops.advanced.duration}
              description={t.workshops.advanced.description}
              image={droneImage}
              onLearnMore={() => console.log('Advanced workshop')}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
