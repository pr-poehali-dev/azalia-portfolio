import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container">
        <div 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="fade-in text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Чем я занимаюсь</h2>
          <p className="text-muted-foreground">
            Основные направления моей творческой деятельности
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {workAreas.map((area, index) => (
            <Card 
              key={area.title}
              ref={(el) => (elementsRef.current[index + 1] = el)} 
              className="fade-in overflow-hidden group"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl mb-2">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <Link 
                  to={area.link} 
                  className="text-sm font-medium text-primary flex items-center hover:underline"
                >
                  Узнать больше <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const workAreas = [
  {
    title: "Визуальное искусство",
    description: "Создание произведений в различных техниках, исследование цвета, формы и композиции.",
    image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/about"
  },
  {
    title: "Видеография",
    description: "Создание видеоконтента для образовательных и творческих проектов, документирование процессов.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/courses"
  },
  {
    title: "Дизайн",
    description: "Разработка визуальных концепций, брендинг, создание презентаций и лендингов.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "/collaboration"
  }
];

export default WorkSection;
