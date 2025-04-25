import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: "01",
    title: "Серия «Отражения»",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    category: "Живопись",
    delay: "0ms"
  },
  {
    id: "02",
    title: "Мини-фильм «Погружение»",
    image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=800&q=80",
    category: "Видео",
    delay: "150ms"
  },
  {
    id: "03",
    title: "Визуальный дневник",
    image: "https://images.unsplash.com/photo-1508179719682-dbc62681c355?auto=format&fit=crop&w=800&q=80",
    category: "Коллаж",
    delay: "300ms"
  },
  {
    id: "04",
    title: "Проект «Сезоны»",
    image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?auto=format&fit=crop&w=800&q=80",
    category: "Фотография",
    delay: "450ms"
  }
];

export default function GallerySection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current[index] = el;
    }
  };

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container max-w-6xl">
        <div 
          ref={titleRef} 
          className="mb-16 fade-in"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            мои работы<span className="red-dot ml-2"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => addToRefs(el, index)}
              className="group relative fade-in overflow-hidden"
              style={{ transitionDelay: project.delay }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/70 text-sm mb-1">{project.category}</span>
                <h3 className="text-white text-lg font-medium">{project.title}</h3>
              </div>
              
              <div className="absolute top-4 left-4">
                <span className="text-primary font-bold text-xl">{project.id}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={buttonRef} 
          className="mt-12 text-center fade-in"
        >
          <Button 
            className="group rounded-none text-base font-normal"
          >
            <span>Смотреть все проекты</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
