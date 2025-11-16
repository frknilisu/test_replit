import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language, languageNames } from '@/lib/i18n';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="text-2xl font-heading font-bold text-primary">
              Codiac Labs
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1" data-testid="button-activities-menu">
                  {t.nav.activities}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/workshops" data-testid="link-workshops">
                    {t.nav.workshops}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/courses" data-testid="link-courses">
                    {t.nav.courses}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/team-building" data-testid="link-team-building">
                    {t.nav.teamBuilding}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1" data-testid="button-about-menu">
                  {t.nav.about}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/who-is-codiac" data-testid="link-who-is-codiac">
                    {t.nav.whoIsACodiac}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/program" data-testid="link-program">
                    {t.nav.theProgram}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" data-testid="link-about">
                    {t.nav.aboutUs}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" data-testid="link-contact">
                    {t.nav.contact}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2" data-testid="button-language">
                  <span className="text-sm font-medium">{languageNames[language]}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('en')} data-testid="button-lang-en">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('nl')} data-testid="button-lang-nl">
                  Nederlands
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('tr')} data-testid="button-lang-tr">
                  Türkçe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2" data-testid="mobile-menu">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-muted-foreground px-3 py-2">
                {t.nav.activities}
              </div>
              <Link href="/workshops" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-workshops">
                {t.nav.workshops}
              </Link>
              <Link href="/courses" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-courses">
                {t.nav.courses}
              </Link>
              <Link href="/team-building" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-team-building">
                {t.nav.teamBuilding}
              </Link>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-muted-foreground px-3 py-2">
                {t.nav.about}
              </div>
              <Link href="/who-is-codiac" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-who-is-codiac">
                {t.nav.whoIsACodiac}
              </Link>
              <Link href="/program" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-program">
                {t.nav.theProgram}
              </Link>
              <Link href="/about" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-about">
                {t.nav.aboutUs}
              </Link>
              <Link href="/contact" className="block px-3 py-2 hover-elevate rounded-md" data-testid="link-mobile-contact">
                {t.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
