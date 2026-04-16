import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const serviceOptions = [
  "Google Ads", "Meta Ads", "SEO", "E-Commerce", "Local SEO",
  "Analytics", "Full Strategy", "Legal Marketing", "Healthcare Marketing",
];

const FORMSPREE_URL = ""; // Set your Formspree endpoint here

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (FORMSPREE_URL) {
      setLoading(true);
      try {
        const res = await fetch(FORMSPREE_URL, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          toast.success("Message sent! I'll respond within 24 hours.");
          form.reset();
        } else {
          toast.error("Failed to send. Please try again.");
        }
      } catch {
        toast.error("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback mailto
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${data.get("phone") || "N/A"}\nService: ${data.get("service") || "N/A"}\n\n${message}`);
      window.location.href = `mailto:bhaarat070701@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email client...");
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 reveal">
        Let's work <span className="text-orange">together.</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left info */}
        <div className="reveal">
          <h3 className="text-xl font-semibold text-foreground mb-3">Ready to grow your business?</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you need Google Ads management, SEO strategy, or a full-funnel marketing approach — let's talk about how I can help you grow.
          </p>

          <div className="space-y-3 mb-6">
            <a href="https://wa.me/917982263521" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
              📱 <span>+91 79822 63521</span>
            </a>
            <a href="mailto:bhaarat070701@gmail.com" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
              ✉️ <span>bhaarat070701@gmail.com</span>
            </a>
            <a href="https://bhaarat-portfolio.framer.website/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
              🌐 <span>bhaarat-portfolio.framer.website</span>
            </a>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex items-center gap-2 text-sm text-green">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
              Currently available for new projects
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 reveal">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
              <input name="name" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
              <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="you@example.com" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Phone / WhatsApp</label>
              <input name="phone" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" placeholder="+1 234 567 8900" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Service</label>
              <select name="service" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
            <textarea name="message" required minLength={10} rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none" placeholder="Tell me about your project..." />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 rounded-pill bg-foreground text-card font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
          <p className="text-xs text-muted-foreground">* Required fields. I respond within 24 hours.</p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
