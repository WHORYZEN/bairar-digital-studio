const skills = [
  { label: "Google Ads", color: "bg-blue" },
  { label: "Meta Ads", color: "bg-primary" },
  { label: "SEO Strategy", color: "bg-green" },
  { label: "E-Commerce", color: "bg-orange" },
  { label: "Brand Building", color: "bg-purple" },
  { label: "Analytics & GTM", color: "bg-pink" },
];

const About = () => (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Photo */}
      <div className="hidden lg:block relative reveal">
        <div className="rounded-3xl overflow-hidden h-[480px] bg-gradient-to-br from-blue-light via-purple-light to-pink-light" />
        <div className="absolute bottom-4 right-4 bg-card rounded-2xl shadow-lg border border-border px-4 py-3 animate-float">
          <div className="text-2xl font-bold text-primary">5+</div>
          <div className="text-xs text-muted-foreground">Brands Grown</div>
        </div>
        <div className="absolute top-4 left-4 bg-card rounded-2xl shadow-lg border border-border px-4 py-3 animate-float-delayed">
          <div className="text-2xl font-bold text-pink">$30K+</div>
          <div className="text-xs text-muted-foreground">Monthly Budget</div>
        </div>
      </div>

      {/* Text */}
      <div className="reveal">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">About Me</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Bhaarat <span className="text-primary">Bariar.</span>
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I'm a performance marketing manager specialising in Google Ads, Meta Ads, SEO, and E-Commerce. I've helped 5+ brands across India, the USA, and the Middle East scale their digital marketing.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          From building Upakarma Ayurveda's entire brand identity to managing $1,000+/day budgets for Texas healthcare and legal clients — I bring a data-first, ROI-obsessed approach to every campaign.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Whether it's beating enterprise giants with smart bidding or growing organic traffic from zero — I treat every brand like my own.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {skills.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-sm text-foreground">
              <span className={`w-2 h-2 rounded-full ${s.color}`} />
              {s.label}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="https://wa.me/917982263521" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-pill bg-green text-card text-sm font-medium hover:opacity-90 transition-opacity">
            WhatsApp
          </a>
          <a href="mailto:bhaarat070701@gmail.com" className="px-5 py-2.5 rounded-pill bg-secondary text-foreground text-sm font-medium hover:bg-border transition-colors">
            Email
          </a>
          <a href="https://bhaarat-portfolio.framer.website/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-pill bg-secondary text-foreground text-sm font-medium hover:bg-border transition-colors">
            Portfolio ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
