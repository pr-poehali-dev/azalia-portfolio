import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Страница не найдена | Азалия";
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-20 text-center">
      <h1 className="text-primary text-7xl md:text-9xl font-serif font-bold mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-medium mb-4">Страница не найдена</h2>
      <p className="text-foreground/80 max-w-md mb-8">
        Похоже, что страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Button asChild className="group rounded-none">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Вернуться на главную
        </Link>
      </Button>
      
      <div className="mt-12">
        <span className="red-dot"></span>
      </div>
    </div>
  );
}
