export default function TermsPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8" data-testid="text-page-title">
            Terms of Service
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p>
              Welcome to Codiac Labs. By accessing or using our services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="font-heading font-semibold text-2xl mt-8 mb-4">Use of Services</h2>
            <p className="text-muted-foreground">
              You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
            <h2 className="font-heading font-semibold text-2xl mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, materials, and intellectual property provided through our services remain the property of Codiac Labs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
