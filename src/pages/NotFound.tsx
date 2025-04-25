import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-serif font-light mb-6">404</h1>
        <h2 className="text-2xl font-serif mb-4">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
