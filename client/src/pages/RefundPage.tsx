export default function RefundPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8" data-testid="text-page-title">
            Refund Policy
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p>
              We want you to be completely satisfied with your Codiac Labs experience.
            </p>
            <h2 className="font-heading font-semibold text-2xl mt-8 mb-4">Workshop Cancellations</h2>
            <p className="text-muted-foreground">
              Full refunds are available for cancellations made at least 48 hours before the scheduled workshop.
            </p>
            <h2 className="font-heading font-semibold text-2xl mt-8 mb-4">Course Refunds</h2>
            <p className="text-muted-foreground">
              Course refunds are available within the first week of the program start date, subject to a processing fee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
