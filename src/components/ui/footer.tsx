import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-lg tracking-tighter hover:text-primary transition-colors"
            >
              <span className="font-bold">Азалия</span>
              <span className="red-dot ml-1"></span>
            </Link>
            <p className="text-sm text-foreground/70">
              Исследую взаимосвязь творчества и осознанности через искусство, 
              видеографию и дизайн.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Видео-курсы
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Сотрудничество
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@azaliya.art" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  hello@azaliya.art
                </a>
              </li>
              <li className="text-sm text-foreground/70">
                Москва, Россия
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Соцсети</h3>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center border border-border hover:border-primary rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center border border-border hover:border-primary rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center border border-border hover:border-primary rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:hello@azaliya.art" 
                className="h-10 w-10 flex items-center justify-center border border-border hover:border-primary rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>© {currentYear} Азалия. Все права защищены.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
