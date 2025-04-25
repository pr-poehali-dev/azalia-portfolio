import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 fade-in"
          >
            рассылка
            <span className="red-dot ml-2"></span>
          </h2>
          <p 
            ref={textRef} 
            className="text-lg text-foreground/80 max-w-2xl mx-auto fade-in"
            style={{ transitionDelay: "100ms" }}
          >
            Подпишитесь на мою рассылку, чтобы получать новости о проектах, 
            размышления о творческом процессе и анонсы будущих курсов.
          </p>
        </div>
        
        <form 
          ref={formRef} 
          className="flex flex-col sm:flex-row gap-4 fade-in"
          style={{ transitionDelay: "200ms" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Input 
            type="email" 
            placeholder="Ваш email" 
            className="rounded-none border-primary/30 focus-visible:ring-primary" 
            required
          />
          <Button 
            type="submit" 
            className="group rounded-none"
          >
            <span>Подписаться</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
        
        <p className="text-xs text-foreground/60 mt-4 text-center">
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности. 
          Я обещаю не спамить и отправлять только самое интересное.
        </p>
      </div>
    </section>
  );
}
