import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ClientsStrip from "@/components/ClientsStrip";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import useReveal from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <ClientsStrip />
        <CaseStudies />
        <Services />
        <About />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
