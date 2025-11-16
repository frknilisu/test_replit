import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center hover-elevate transition-all duration-200" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="pt-8 pb-6 px-6 space-y-4">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-7 w-7 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-lg" data-testid="text-title">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground" data-testid="text-description">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
