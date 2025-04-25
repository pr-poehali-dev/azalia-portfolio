import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import PhilosophySection from "@/components/philosophy-section";
import WorkSection from "@/components/work-section";
import GallerySection from "@/components/gallery-section";
import NewsletterSection from "@/components/newsletter-section";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <WorkSection />
      <GallerySection />
      <NewsletterSection />
    </>
  );
};

export default Index;
