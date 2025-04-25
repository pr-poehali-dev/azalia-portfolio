import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface WorkCardProps {
  title: string;
  description: string;
  icon: string;
  delay: string;
  linkText: string;
}

function WorkCard({ title, description, icon, delay, linkText }: WorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="fade-in"
      style={{ transitionDelay: delay }}
    >
      <Card className="border-none bg-background shadow-none hover:bg-secondary/50 transition-colors group">
        <CardContent className="p-8">
          <div className="flex flex-col h-full">
            <div className="mb-6 text-3xl">{icon}</div>
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <p className="text-foreground/80 mb-6 flex-grow">{description}</p>
            <Button 
              variant="link" 
              className="p-0 h-auto text-primary justify-start font-normal group/btn"
            >
              <span>{linkText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function WorkSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16">
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-5xl font-serif font-bold text-primary fade-in"
          >
            чем я занимаюсь
            <span className="red-dot ml-2"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkCard 
            title="Искусство" 
            description="Создаю визуальные образы в различных техниках, исследуя темы осознанности, внутреннего мира и гармонии с окружающей средой."
            icon="🎨" 
            delay="100ms"
            linkText="Смотреть работы"
          />
          
          <WorkCard 
            title="Видеография" 
            description="Снимаю документальные и художественные короткометражные фильмы, видеодневники и образовательный контент о творческом пути."
            icon="🎬" 
            delay="200ms"
            linkText="Смотреть видео"
          />
          
          <WorkCard 
            title="Дизайн" 
            description="Разрабатываю визуальные концепции и дизайн для творческих проектов, фокусируясь на минимализме и осмысленных деталях."
            icon="✏️" 
            delay="300ms"
            linkText="Смотреть проекты"
          />
          
          <WorkCard 
            title="Обучение" 
            description="Создаю онлайн-курсы и мастер-классы, делясь своими знаниями и опытом в сфере творчества, осознанности и саморазвития."
            icon="🧠" 
            delay="400ms"
            linkText="Смотреть курсы"
          />
          
          <WorkCard 
            title="Консультации" 
            description="Помогаю креативным личностям и брендам найти свой аутентичный стиль и голос через индивидуальные или групповые сессии."
            icon="💬" 
            delay="500ms"
            linkText="Узнать больше"
          />
          
          <WorkCard 
            title="Коллаборации" 
            description="Сотрудничаю с единомышленниками и брендами для создания совместных проектов, объединяющих разные творческие подходы."
            icon="🤝" 
            delay="600ms"
            linkText="Смотреть проекты"
          />
        </div>
      </div>
    </section>
  );
}
