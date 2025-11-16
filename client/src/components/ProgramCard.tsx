import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  duration: string;
  description: string;
  image: string;
  onLearnMore?: () => void;
}

export default function ProgramCard({ title, duration, description, image, onLearnMore }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-200 h-full flex flex-col" data-testid={`card-program-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading font-semibold text-xl" data-testid="text-title">
            {title}
          </h3>
          <Badge variant="secondary" className="gap-1 flex-shrink-0" data-testid="badge-duration">
            <Clock className="h-3 w-3" />
            {duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-muted-foreground" data-testid="text-description">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="w-full justify-between mt-auto"
          onClick={onLearnMore}
          data-testid="button-learn-more"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
