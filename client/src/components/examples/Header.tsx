import Header from '../Header';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function HeaderExample() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <div className="h-[200vh] pt-32 px-8">
          <h1 className="text-2xl font-bold mb-4">Scroll to see header behavior</h1>
          <p className="text-muted-foreground">The header will change appearance when you scroll down.</p>
        </div>
      </div>
    </LanguageProvider>
  );
}
