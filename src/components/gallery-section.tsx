import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

// Image data with unsplash links
const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    title: "Визуальная концепция",
    number: "1",
    delay: "0ms"
  },
  {
    image: "https://images.unsplash.com/photo-1581343600721-f4ea1318eccc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    title: "Документальная серия",
    number: "2",
    delay: "100ms"
  },
  {
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1756&q=80",
    title: "Художественный проект",
    number: "3",
    delay: "200ms"
  },
  {
    image: "https://images.unsplash.com/photo-1585508855751-7122ff0acee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
    title: "Фотодневник",
    number: "4",
    delay: "300ms"
  }
];

function GalleryItem({ image, title, number, delay }: typeof galleryItems[0]) {
  const itemRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className="fade-in group cursor-pointer"
      style={{ transitionDelay: delay }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-[3/4] md:aspect-[5/6] object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <p className="text-white/70 text-sm">{number}</p>
          <h3 className="text-white text-xl font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-5xl font-serif font-bold text-primary fade-in"
          >
            последние работы
            <span className="red-dot ml-2"></span>
          </h2>
          <div 
            ref={buttonRef} 
            className="fade-in"
            style={{ transitionDelay: "200ms" }}
          >
            <Button 
              variant="link" 
              className="text-foreground group p-0 h-auto text-lg font-normal"
            >
              <span>Смотреть все проекты</span>
              <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
