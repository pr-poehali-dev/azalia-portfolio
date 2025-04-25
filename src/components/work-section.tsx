import { useEffect, useRef } from "react";
import { Palette, Film, Layout } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Искусство",
    description: "Создаю живопись и графику, исследую смешанные техники и экспериментирую с материалами.",
    icon: <Palette className="h-10 w-10 text-primary" />,
    delay: "0ms"
  },
  {
    title: "Видеография",
    description: "Документирую творческий путь, создаю обучающие материалы и визуальные истории.",
    icon: <Film className="h-10 w-10 text-primary" />,
    delay: "150ms"
  },
  {
    title: "Дизайн",
    description: "Разрабатываю концепции брендов, создаю визуальные идентичности и работаю с пространством.",
    icon: <Layout className="h-10 w-10 text-primary" />,
    delay: "300ms"
  }
];

export default function WorkSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <div 
          ref={titleRef} 
          className="mb-16 fade-in"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            чем я занимаюсь<span className="red-dot ml-2"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => addToRefs(el, index)}
              className="bg-card p-8 border border-border hover:border-primary/30 transition-all fade-in"
              style={{ transitionDelay: service.delay }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">
                {`0${index + 1}`}<span className="mx-2">/</span>{service.title}
              </h3>
              <p className="text-foreground/80 mb-6">
                {service.description}
              </p>
              <Button 
                variant="link" 
                className="p-0 text-primary font-normal hover:text-primary/80"
              >
                Узнать больше &rarr;
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
