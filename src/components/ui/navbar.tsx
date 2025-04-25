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
        scrolled ? "bg-background/95 backdrop-blur-sm py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link 
          to="/" 
          className="font-serif text-xl font-medium tracking-tight hover:text-primary transition-colors"
        >
          Азалия
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === route.path ? "text-primary" : "text-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md">
          <div className="container py-5 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === route.path ? "text-primary" : "text-foreground"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
