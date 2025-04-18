import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">AppStudio</Link>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-primary-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary-foreground/80">Главная</Link>
          <Link to="/services" className="hover:text-primary-foreground/80">Услуги</Link>
          <Link to="/portfolio" className="hover:text-primary-foreground/80">Портфолио</Link>
          <Link to="/about" className="hover:text-primary-foreground/80">О нас</Link>
          <Link to="/contact" className="hover:text-primary-foreground/80">Контакты</Link>
        </nav>

        {/* Кнопка связи */}
        <div className="hidden md:block">
          <Button variant="secondary">Связаться с нами</Button>
        </div>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-primary border-t border-primary-foreground/10">
          <div className="container mx-auto flex flex-col space-y-4">
            <Link to="/" className="hover:text-primary-foreground/80">Главная</Link>
            <Link to="/services" className="hover:text-primary-foreground/80">Услуги</Link>
            <Link to="/portfolio" className="hover:text-primary-foreground/80">Портфолио</Link>
            <Link to="/about" className="hover:text-primary-foreground/80">О нас</Link>
            <Link to="/contact" className="hover:text-primary-foreground/80">Контакты</Link>
            <Button variant="secondary" className="w-full">Связаться с нами</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
