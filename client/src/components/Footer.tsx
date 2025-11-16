import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-heading font-bold text-primary">
              Codiac Labs
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/workshops" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-workshops">
                  {t.nav.workshops}
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-courses">
                  {t.nav.courses}
                </Link>
              </li>
              <li>
                <Link href="/team-building" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-team-building">
                  {t.nav.teamBuilding}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  {t.nav.aboutUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              {t.nav.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">{t.contact.info.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${t.contact.info.phone}`} className="hover:text-foreground transition-colors" data-testid="link-phone">
                  {t.contact.info.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${t.contact.info.email}`} className="hover:text-foreground transition-colors" data-testid="link-email">
                  {t.contact.info.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-privacy">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-refund">
                  {t.footer.refundPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-terms">
                  {t.footer.termsOfService}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} Codiac Labs. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
