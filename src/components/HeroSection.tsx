import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Создаем приложения, которые работают на успех вашего бизнеса
          </h1>
          <p className="text-xl mb-8">
            От идеи до запуска — мы разрабатываем мобильные и веб-приложения,
            которые решают бизнес-задачи и покоряют пользователей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg">
              Заказать консультацию
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Посмотреть услуги
            </Button>
          </div>
        </div>
      </div>
      
      {/* Декоративный элемент */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-dots-pattern opacity-10 hidden lg:block" 
           aria-hidden="true"></div>
    </div>
  );
};

export default HeroSection;
