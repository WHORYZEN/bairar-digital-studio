const CTABanner = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto reveal">
    <div className="relative bg-foreground rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple/20 rounded-full blur-[100px]" />

      <h2 className="relative text-3xl sm:text-4xl font-bold text-card mb-4">
        Ready to grow <span className="text-indigo">your business?</span>
      </h2>
      <p className="relative text-card/70 mb-8 max-w-lg mx-auto">
        Let's discuss how data-driven marketing can transform your growth. No fluff, just results.
      </p>
      <div className="relative flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/917982263521"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-pill bg-card text-foreground font-medium hover:opacity-90 transition-opacity"
        >
          📱 WhatsApp Me Now
        </a>
        <a
          href="mailto:bhaarat070701@gmail.com"
          className="px-8 py-3 rounded-pill border border-card/30 text-card font-medium hover:bg-card/10 transition-colors"
        >
          ✉️ Send an Email
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
