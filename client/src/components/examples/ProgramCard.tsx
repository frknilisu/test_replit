import ProgramCard from '../ProgramCard';
import blocklyImage from '@assets/generated_images/Blockly_programming_closeup_72bb0b1d.png';

export default function ProgramCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProgramCard
        title="Blockly Basics"
        duration="2 hours"
        description="Visual block-based programming introduction perfect for beginners"
        image={blocklyImage}
        onLearnMore={() => console.log('Learn more clicked')}
      />
    </div>
  );
}
