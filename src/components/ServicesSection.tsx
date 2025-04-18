
import { ServiceCard } from "@/components/ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      title: "Мобильные приложения",
      description: "Создаем нативные и кроссплатформенные мобильные приложения",
      icon: "📱",
      features: [
        "iOS и Android разработка",
        "Гибридные приложения (React Native)",
        "Push-уведомления",
        "Интеграция с API"
      ],
    },
    {
      title: "Веб-приложения",
      description: "Разрабатываем современные и быстрые веб-приложения",
      icon: "🖥️",
      features: [
        "Отзывчивый дизайн",
        "SPA и PWA",
        "Высокая производительность",
        "Комплексная безопасность"
      ],
    },
    {
      title: "Корпоративные системы",
      description: "Создаем решения для оптимизации бизнес-процессов",
      icon: "🏢",
      features: [
        "CRM и ERP системы",
        "Автоматизация процессов",
        "Аналитические дашборды",
        "Интеграция с существующими системами"
      ],
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Наши услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предлагаем полный спектр услуг по разработке программного обеспечения 
            для бизнеса любого масштаба
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
