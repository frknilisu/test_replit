import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';
import workshopImage from '@assets/generated_images/Students_coding_drones_workshop_86a71536.png';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-testid="text-page-title">
              {t.aboutUs.title}
            </h1>
          </div>

          <div className="rounded-xl overflow-hidden mb-16">
            <img 
              src={workshopImage} 
              alt="About Codiac Labs"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-8 pb-6 px-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="font-heading font-semibold text-2xl text-center">
                    {t.aboutUs.mission}
                  </h2>
                  <p className="text-muted-foreground text-center">
                    {t.aboutUs.missionText}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6 px-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h2 className="font-heading font-semibold text-2xl text-center">
                    {t.aboutUs.vision}
                  </h2>
                  <p className="text-muted-foreground text-center">
                    {t.aboutUs.visionText}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
