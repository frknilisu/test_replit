import FeatureCard from '../FeatureCard';
import { Lightbulb } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <FeatureCard
        icon={Lightbulb}
        title="Creative Thinker"
        description="Develop innovative solutions to complex problems"
      />
    </div>
  );
}
