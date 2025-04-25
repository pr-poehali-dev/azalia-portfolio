import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-7 gap-12 md:gap-6 items-center">
          <div className="md:col-span-4 order-2 md:order-1">
            <div className="space-y-8 max-w-2xl">
              <h1 
                ref={headingRef} 
                className="text-4xl md:text-6xl lg:text-display font-serif font-bold leading-tight text-primary fade-in"
              >
                портфолио
                <span className="red-dot ml-2"></span>
              </h1>
              
              <p 
                ref={textRef} 
                className="text-lg md:text-xl text-foreground/90 max-w-xl fade-in"
                style={{ transitionDelay: "200ms" }}
              >
                Я&nbsp;Азалия, исследую взаимосвязь творчества и&nbsp;осознанности. 
                Через искусство, видеографию и&nbsp;дизайн я&nbsp;делюсь своим 
                опытом и&nbsp;помогаю другим находить свой творческий путь.
              </p>
              
              <div 
                ref={buttonRef} 
                className="fade-in"
                style={{ transitionDelay: "400ms" }}
              >
                <Button 
                  className="group rounded-none mt-4 text-base font-normal"
                >
                  <span>Мои проекты</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="md:col-span-3 order-1 md:order-2 fade-in"
          >
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-primary"></div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                alt="Азалия" 
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border border-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
