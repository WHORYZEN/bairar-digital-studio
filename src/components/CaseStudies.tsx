interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  num: string;
  company: string;
  industry: string;
  location: string;
  website?: string;
  title: string;
  paragraphs: string[];
  tags: string[];
  highlights?: string[];
  metrics: Metric[];
  color: string;
  colorBg: string;
  colorText: string;
}

const caseStudies: CaseStudy[] = [
  {
    num: "01",
    company: "Upakarma Ayurveda",
    industry: "E-Commerce · Wellness",
    location: "India",
    website: "upakarma.com",
    title: "Full Brand Building, E-Commerce & Digital Marketing",
    paragraphs: [
      "Built the entire brand from scratch — logo, packaging, Shopify store, social media, and ad campaigns. Managed everything from product photography to performance marketing.",
      "Created a 360° digital presence including print collateral (standees, brochures) and ran Google + Meta campaigns driving consistent ROAS.",
    ],
    tags: ["Brand Identity", "Shopify", "Google Ads", "Meta Ads", "Print Design"],
    metrics: [
      { value: "Full", label: "Brand Ownership" },
      { value: "3x", label: "ROAS" },
      { value: "360°", label: "Digital + Print" },
    ],
    color: "border-purple",
    colorBg: "bg-purple-light",
    colorText: "text-purple",
  },
  {
    num: "02",
    company: "Buzzmeeh",
    industry: "Device Repair · SEO",
    location: "India",
    website: "buzzmeeh.com",
    title: "Zero Paid Search, Maximum Organic Growth — SEO & Meta",
    paragraphs: [
      "Took a device repair brand from zero organic visibility to ranking for 15+ high-intent keywords, driving profitable leads without any paid search spend.",
      "Complemented SEO with strategic Meta campaigns for brand awareness and retargeting.",
    ],
    tags: ["Technical SEO", "Content Strategy", "Meta Ads", "Local SEO"],
    metrics: [
      { value: "SEO", label: "Primary Channel" },
      { value: "15+", label: "Brands Ranked" },
      { value: "↑", label: "Profitable Without PPC" },
    ],
    color: "border-green",
    colorBg: "bg-green-light",
    colorText: "text-green",
  },
  {
    num: "03",
    company: "Intec Infonet QkrBiz",
    industry: "HR Software · B2B",
    location: "India",
    title: "Beating Enterprise Giants — Meta & Google Ads for HR Software",
    paragraphs: [
      "Competed head-to-head with enterprise HR software brands using data-driven Meta and Google Ads strategies. Achieved 40% lower CPA than industry benchmarks.",
      "Generated 200+ qualified leads per month through precise audience targeting and continuous A/B testing.",
    ],
    tags: ["Google Ads", "Meta Ads", "B2B", "Lead Gen", "A/B Testing"],
    metrics: [
      { value: "40%", label: "Lower CPA" },
      { value: "3.2x", label: "ROAS" },
      { value: "200+", label: "Leads per Month" },
    ],
    color: "border-blue",
    colorBg: "bg-blue-light",
    colorText: "text-blue",
  },
  {
    num: "04",
    company: "Accident Centres of Texas",
    industry: "Healthcare · USA",
    location: "Texas, USA",
    title: "High-Budget Google Ads for Texas #1 Rated Accident Recovery Clinic",
    paragraphs: [
      "Managed $1,000+/day Google Ads budgets for the #1 rated accident recovery clinic in Texas. Navigated highly competitive healthcare keywords with CPCs exceeding $50.",
      "Built campaigns across Search, LSA, and Display to capture intent at every stage of the patient journey.",
    ],
    tags: ["Google Ads", "LSA", "Healthcare", "High CPC", "Call Tracking"],
    metrics: [
      { value: "$1K+", label: "Daily Budget" },
      { value: "#1", label: "Rated TX" },
      { value: "200+", label: "Attorney Network" },
    ],
    color: "border-amber",
    colorBg: "bg-amber-light",
    colorText: "text-amber",
  },
  {
    num: "05",
    company: "Jouri Law",
    industry: "Legal · Texas",
    location: "Texas, USA",
    title: "Full-Funnel Lead Gen for Texas Personal Injury Law Firm — 6 Platforms, $610 CPC",
    paragraphs: [
      "Built and managed campaigns across 6 platforms including Google, Meta, TikTok, and LSA for a personal injury law firm. Managed CPCs as high as $610 in the most competitive legal vertical.",
      "Delivered statewide coverage across Texas with multi-platform attribution and call tracking.",
    ],
    tags: ["Google Ads", "Meta Ads", "TikTok", "LSA", "Legal", "Multi-Platform"],
    metrics: [
      { value: "$610", label: "Max CPC" },
      { value: "6+", label: "Platforms" },
      { value: "TX", label: "Statewide" },
    ],
    color: "border-pink",
    colorBg: "bg-pink-light",
    colorText: "text-pink",
  },
];

const CaseStudies = () => (
  <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 reveal">
      Work that <span className="text-primary">moves</span> the needle.
    </h2>

    <div className="space-y-8">
      {caseStudies.map((cs) => (
        <div
          key={cs.num}
          className={`reveal bg-card rounded-2xl border border-border ${cs.color} border-t-[3px] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden`}
        >
          <div className="grid md:grid-cols-[200px_1fr_220px]">
            {/* Sidebar */}
            <div className={`${cs.colorBg} p-5 flex flex-col justify-between`}>
              <div>
                <div className="text-xs text-muted-foreground mb-1">{cs.industry}</div>
                <div className="font-semibold text-foreground text-sm mb-1">{cs.company}</div>
                <div className="text-xs text-muted-foreground mb-2">{cs.location}</div>
                {cs.website && (
                  <a href={`https://${cs.website}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    {cs.website} ↗
                  </a>
                )}
              </div>
              <div className={`text-6xl font-black ${cs.colorText} opacity-10 mt-4`}>{cs.num}</div>
            </div>

            {/* Body */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">{cs.title}</h3>
              {cs.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground mb-2 leading-relaxed">{p}</p>
              ))}
              <div className="flex flex-wrap gap-2 mt-4">
                {cs.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-pill bg-secondary text-xs font-medium text-foreground">{t}</span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className={`${cs.colorBg} p-5 flex flex-col gap-3 justify-center`}>
              {cs.metrics.map((m) => (
                <div key={m.label} className="bg-card rounded-xl p-3 text-center">
                  <div className={`text-xl font-bold ${cs.colorText}`}>{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudies;
