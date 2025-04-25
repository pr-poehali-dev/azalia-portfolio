import { useState, useEffect, useRef, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка email на сервер
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };
  
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container">
        <div 
          ref={sectionRef} 
          className="fade-in max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Подпишитесь на рассылку
            </h2>
            <p className="text-muted-foreground">
              Получайте уведомления о новых курсах, статьях в блоге и творческих проектах
            </p>
          </div>
          
          {isSubscribed ? (
            <div className="bg-primary/10 text-primary rounded-lg p-4 animate-fade-in">
              Спасибо за подписку! Проверьте вашу почту для подтверждения.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Подписаться</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
