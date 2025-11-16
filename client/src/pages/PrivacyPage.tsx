export default function PrivacyPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8" data-testid="text-page-title">
            Privacy Policy
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p>
              At Codiac Labs, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <h2 className="font-heading font-semibold text-2xl mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information that you provide directly to us when you register for workshops or courses, contact us, or use our services.
            </p>
            <h2 className="font-heading font-semibold text-2xl mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
