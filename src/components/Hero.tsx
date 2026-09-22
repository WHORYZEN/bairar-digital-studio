import bhaaratHero from "@/assets/bhaarat-hero.png";

const stats = [
  { value: "27+", label: "Brands Grown" },
  { value: "$1K+", label: "Daily Budget" },
  { value: "7", label: "Countries" },
  { value: "50+", label: "Industries" },
];

const tags = ["Google Ads", "Meta Ads", "SEO", "E-Commerce"];

const Hero = () => {
  return (
    <section className="pt-28 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-green-light text-green text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
            Open to new projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Performance <span className="text-primary">Marketing</span> Manager.
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            I turn ad budgets into real business results — from competing with enterprise HR giants in India to running $1,000/day campaigns for law firms in Texas.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#work");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-pill bg-foreground text-card font-medium hover:opacity-90 transition-opacity"
            >
              View Case Studies
            </a>
            <a
              href="https://wa.me/917982263521"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-pill border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              📱 WhatsApp Me
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile card */}
        <div className="relative reveal order-first lg:order-last mb-8 lg:mb-0">
          <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
            {/* Gradient bg */}
            <div className="h-[420px] bg-gradient-to-br from-purple-light via-blue-light to-pink-light relative">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-card text-green text-xs font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
                Available Now
              </div>
              <img
                src={bhaaratHero}
                alt="Bhaarat Bariar — Performance Marketing Manager"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "50% 35%" }}
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground">Bhaarat Bariar</h3>
              <p className="text-sm text-muted-foreground mb-3">Performance Marketing Manager</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-pill bg-secondary text-xs font-medium text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-lg border border-border p-4 max-w-[200px] animate-float">
            <div className="text-xs text-muted-foreground mb-1">Monthly Budget</div>
            <div className="text-lg font-bold text-foreground">$150,000+</div>
            <div className="text-xs text-muted-foreground">Managed across clients</div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-lg border border-border p-4 max-w-[200px] animate-float-delayed">
            <div className="text-xs text-muted-foreground mb-1">Top Industry</div>
            <div className="text-lg font-bold text-foreground">Legal · TX 🇺🇸</div>
            <div className="text-xs text-muted-foreground">$610 CPC managed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
