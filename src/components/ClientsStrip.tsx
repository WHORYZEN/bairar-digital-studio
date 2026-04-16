const clients = [
  { name: "Upakarma Ayurveda", dot: "bg-purple", industry: "E-Commerce · Wellness" },
  { name: "Buzzmeeh", dot: "bg-green", industry: "Device Repair · SEO" },
  { name: "Intec Infonet / QkrBiz", dot: "bg-blue", industry: "HR Software · B2B" },
  { name: "Accident Centres of TX", dot: "bg-amber", industry: "Healthcare · USA" },
  { name: "Jouri Law", dot: "bg-pink", industry: "Legal · Texas" },
];

const ClientsStrip = () => (
  <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto reveal">
    <p className="text-center text-sm text-muted-foreground mb-6 font-medium">Brands I've Worked With</p>
    <div className="flex flex-wrap justify-center gap-3">
      {clients.map((c) => (
        <div
          key={c.name}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-card border border-border text-sm"
        >
          <span className={`w-2 h-2 rounded-full ${c.dot}`} />
          <span className="font-medium text-foreground">{c.name}</span>
          <span className="text-muted-foreground">— {c.industry}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ClientsStrip;
