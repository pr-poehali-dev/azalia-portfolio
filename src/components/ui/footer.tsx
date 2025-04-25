import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "Главная", href: "/" },
    { name: "Обо мне", href: "/about" },
    { name: "Видео-курсы", href: "/courses" },
    { name: "Сотрудничество", href: "/collaboration" },
    { name: "Блог", href: "/blog" },
  ],
  social: [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "TikTok", href: "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          <div className="space-y-6 md:col-span-2">
            <Link to="/" className="text-xl font-bold">
              Азалия
            </Link>
            <p className="text-foreground/70 max-w-xs">
              Исследую взаимосвязь творчества и осознанности. 
              Через искусство, видеографию и дизайн делюсь своим опытом 
              и помогаю другим находить свой творческий путь.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Навигация</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Социальные сети</h3>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Азалия. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
