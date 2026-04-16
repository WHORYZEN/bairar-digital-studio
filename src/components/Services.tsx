const services = [
  { icon: "🎯", title: "Google Ads Management", desc: "Search, Display, PMax & LSA campaigns optimised for high-CPC verticals like legal and healthcare." },
  { icon: "📱", title: "Meta Ads (Facebook & Instagram)", desc: "Full-funnel campaigns with A/B testing, lookalike audiences, and retargeting for B2B and D2C brands." },
  { icon: "🔍", title: "SEO & Organic Growth", desc: "Technical SEO, content strategy, and local SEO to drive sustainable organic traffic and leads." },
  { icon: "🛒", title: "E-Commerce & Brand Building", desc: "Shopify stores, D2C strategy, brand identity, packaging design, and print collateral." },
  { icon: "📍", title: "Local SEO & Google My Business", desc: "GMB optimization, review management, and multi-location SEO for local service businesses." },
  { icon: "📊", title: "Analytics & Conversion Tracking", desc: "GTM setup, Enhanced Conversions, call tracking, and multi-platform attribution." },
];

const Services = () => (
  <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card">
    <div className="reveal">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
        What I <span className="text-orange">specialise</span> in.
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        From scrappy startups to American enterprises — I bring the same data-first thinking to every campaign.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="reveal bg-background rounded-2xl border border-border p-6 hover:-translate-y-1 hover:border-primary hover:shadow-md transition-all duration-300"
        >
          <div className="text-3xl mb-4">{s.icon}</div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
