const items = [
  { label: "Google Ads", color: "bg-blue" },
  { label: "Meta Ads", color: "bg-primary" },
  { label: "SEO Strategy", color: "bg-green" },
  { label: "E-Commerce", color: "bg-orange" },
  { label: "Brand Building", color: "bg-purple" },
  { label: "Local Services Ads", color: "bg-amber" },
  { label: "Legal Marketing", color: "bg-pink" },
  { label: "Ayurveda Branding", color: "bg-green" },
  { label: "TikTok Ads", color: "bg-pink" },
  { label: "Lead Generation", color: "bg-blue" },
  { label: "Standees & Print", color: "bg-orange" },
  { label: "Device Repair SEO", color: "bg-purple" },
];

const MarqueeTicker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="w-full border-t border-b border-border bg-card py-4 overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className={`w-2 h-2 rounded-full ${item.color}`} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
