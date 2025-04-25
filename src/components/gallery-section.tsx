import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function GallerySection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-accent/50">
      <div className="container">
        <div 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="fade-in text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Галерея работ</h2>
          <p className="text-muted-foreground">
            Избранные проекты и творческие эксперименты
          </p>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[1] = el)} 
          className="fade-in grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img 
                src={image} 
                alt={`Галерея ${index + 1}`} 
                className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[2] = el)} 
          className="fade-in text-center"
          style={{ transitionDelay: "200ms" }}
        >
          <Button asChild>
            <Link to="/about">
              Смотреть все работы <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1620812097331-511c0fc8d521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1575909812264-6902b55846ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
];

export default GallerySection;
