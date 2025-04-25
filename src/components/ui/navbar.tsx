import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const routes = [
  { name: "Главная", path: "/" },
  { name: "Обо мне", path: "/about" },
  { name: "Видео-курсы", path: "/courses" },
  { name: "Сотрудничество", path: "/collaboration" },
  { name: "Блог", path: "/blog" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm py-3 border-b border-border" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link 
          to="/" 
          className="text-lg tracking-tighter hover:text-primary transition-colors"
        >
          <span className="font-bold">Азалия</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-10">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`text-sm tracking-wide transition-colors hover:text-primary relative ${
                location.pathname === route.path 
                  ? "text-primary font-medium after:content-[''] after:absolute after:w-1 after:h-1 after:bg-primary after:rounded-full after:-bottom-1 after:left-1/2 after:-translate-x-1/2" 
                  : "text-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
          <Button
            size="sm"
            className="rounded-none text-sm font-normal"
          >
            Связаться
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="container py-5 flex flex-col space-y-5">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-base transition-colors hover:text-primary ${
                  location.pathname === route.path ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                {route.name}
              </Link>
            ))}
            <Button
              size="sm"
              className="mt-4 self-start rounded-none text-sm font-normal"
            >
              Связаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
