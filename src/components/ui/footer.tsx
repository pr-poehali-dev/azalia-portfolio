import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="font-serif text-xl font-medium">
              Азалия
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Творчество, осознанность и постоянное развитие — 
              основа моей философии жизни и искусства.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Видео-курсы
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collaboration" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Сотрудничество
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Подписка
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Контакты</h3>
            <div className="flex space-x-3">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-primary transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Linkedin" className="hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:contact@azaliya.com" aria-label="Email" className="hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              contact@azaliya.com
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Азалия. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
