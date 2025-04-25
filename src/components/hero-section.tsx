import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.2 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div className="space-y-8 md:pr-8">
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="fade-in"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-balance">
              Творчество как <span className="text-primary font-medium">путь</span> к осознанной жизни
            </h1>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[1] = el)} 
            className="fade-in"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Я исследую мир через искусство, находя красоту в простых вещах и 
              делясь этим опытом с теми, кто ищет свой творческий путь.
            </p>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[2] = el)} 
            className="fade-in pt-4"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/courses">
                  Мои курсы <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[3] = el)} 
          className="fade-in"
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80" 
              alt="Азалия" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
