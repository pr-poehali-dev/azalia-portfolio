import { useEffect, useRef } from "react";

export default function PhilosophySection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current[index] = el;
    }
  };

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container max-w-5xl">
        <div className="mb-16">
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-5xl font-serif font-bold text-primary fade-in"
          >
            моя философия
            <span className="red-dot ml-2"></span>
          </h2>
        </div>
        
        <div className="asymmetric-layout">
          <div 
            ref={(el) => addToRefs(el, 0)} 
            className="fade-in" 
            style={{ transitionDelay: "100ms" }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium">01<span className="mx-2">/</span>Осознанность</h3>
              <p className="text-foreground/80">
                Творчество начинается с внимательного наблюдения за миром и собой. 
                Через практику осознанности я нахожу вдохновение в повседневности и 
                создаю работы, наполненные подлинными эмоциями и смыслом.
              </p>
            </div>
          </div>
          
          <div 
            ref={(el) => addToRefs(el, 1)} 
            className="fade-in" 
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium">02<span className="mx-2">/</span>Баланс</h3>
              <p className="text-foreground/80">
                Я верю в гармоничное сочетание творческой свободы и дисциплины, 
                интуиции и анализа, традиций и инноваций. Мой подход основан на поиске 
                баланса между противоположностями, что позволяет создавать работы, 
                резонирующие с широкой аудиторией.
              </p>
            </div>
          </div>
        </div>
        
        <div className="asymmetric-layout mt-12">
          <div 
            ref={(el) => addToRefs(el, 2)} 
            className="fade-in" 
            style={{ transitionDelay: "300ms" }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium">03<span className="mx-2">/</span>Развитие</h3>
              <p className="text-foreground/80">
                Творческий путь — это постоянное развитие. Я ежедневно практикую свои навыки, 
                изучаю новые техники и подходы, черпаю вдохновение из разных источников. 
                Именно через регулярную практику рождается подлинный стиль и мастерство.
              </p>
            </div>
          </div>
          
          <div 
            ref={(el) => addToRefs(el, 3)} 
            className="fade-in" 
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium">04<span className="mx-2">/</span>Аутентичность</h3>
              <p className="text-foreground/80">
                В мире, перенасыщенном информацией и трендами, я выбираю путь аутентичности. 
                Создавать искусство, которое отражает мой внутренний мир и ценности, 
                делиться опытом без фильтров и масок — вот что для меня означает быть 
                настоящим творцом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
