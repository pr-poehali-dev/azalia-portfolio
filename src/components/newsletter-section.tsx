import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <div 
          ref={sectionRef} 
          className="text-center space-y-6 fade-in"
        >
          <div className="inline-block mx-auto">
            <span className="red-dot mb-8"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Подпишитесь на мою рассылку
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Получайте обновления о новых проектах, курсах и мыслях о творчестве. 
            Никакого спама — только полезный контент раз в неделю.
          </p>
        </div>
        
        <form 
          ref={formRef} 
          className="mt-10 max-w-md mx-auto fade-in"
          style={{ transitionDelay: "200ms" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              required 
              className="rounded-none border-foreground/20 focus-visible:ring-primary"
            />
            <Button type="submit" className="rounded-none">
              Подписаться
            </Button>
          </div>
          <p className="mt-3 text-xs text-foreground/60 text-center sm:text-left">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  );
}
