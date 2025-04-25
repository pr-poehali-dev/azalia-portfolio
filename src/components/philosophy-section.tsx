import { useEffect, useRef } from "react";

export function PhilosophySection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="fade-in text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Моя философия</h2>
          <p className="text-muted-foreground">
            Основные принципы, которыми я руководствуюсь в творчестве и жизни
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              ref={(el) => (elementsRef.current[index + 1] = el)} 
              className="fade-in bg-background p-8 rounded-lg border"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-primary mb-4">{principle.icon}</div>
              <h3 className="font-serif text-xl mb-3">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    icon: "✨",
    title: "Осознанность",
    description: "Каждое творческое решение, каждый штрих и линия — результат присутствия в моменте. Практика осознанности позволяет мне находить вдохновение в повседневности."
  },
  {
    icon: "♻️",
    title: "Постоянное развитие",
    description: "Я верю, что творческий путь бесконечен. Каждый день — это возможность узнать что-то новое, расширить границы своих навыков и представлений."
  },
  {
    icon: "🌿",
    title: "Баланс и гармония",
    description: "Стремление к внутреннему равновесию между творческими порывами и техническим мастерством, между работой и отдыхом, между традициями и инновациями."
  }
];

export default PhilosophySection;
