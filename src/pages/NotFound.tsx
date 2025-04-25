import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container max-w-3xl text-center space-y-8">
        <span className="text-primary text-9xl font-serif font-bold">404</span>
        <div className="space-y-4">
          <h1 className="text-4xl font-serif font-bold">Страница не найдена</h1>
          <p className="text-lg text-foreground/80 max-w-lg mx-auto">
            Упс! Кажется, вы попали на страницу, которой не существует.
            Возможно, она была перемещена или удалена.
          </p>
        </div>
        <Button 
          asChild
          className="mt-8 rounded-none group"
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Вернуться на главную</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
