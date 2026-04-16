const footerNav = {
  Navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Google Ads", href: "#services" },
    { label: "Meta Ads", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "E-Commerce", href: "#services" },
  ],
  Contact: [
    { label: "WhatsApp", href: "https://wa.me/917982263521" },
    { label: "Email", href: "mailto:bhaarat070701@gmail.com" },
    { label: "Portfolio", href: "https://bhaarat-portfolio.framer.website/" },
  ],
};

const scrollTo = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
  }
};

const Footer = () => (
  <footer className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
    <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] gap-8 mb-12">
      <div>
        <div className="text-xl font-bold text-foreground mb-2">BB<span className="text-primary">.</span></div>
        <p className="text-sm text-muted-foreground max-w-xs">Performance marketing that delivers real results. Data-first, ROI-obsessed.</p>
      </div>
      {Object.entries(footerNav).map(([title, links]) => (
        <div key={title}>
          <h4 className="text-sm font-semibold text-foreground mb-3">{title}</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("#") ? (
                  <button onClick={() => scrollTo(link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </button>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-2">
      <span>© 2026 Bhaarat Bariar</span>
      <span>Built for performance · Designed to convert</span>
    </div>
  </footer>
);

export default Footer;
