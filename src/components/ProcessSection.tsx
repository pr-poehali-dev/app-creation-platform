
import { Card, CardContent } from "@/components/ui/card";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Аналитика",
      description: "Исследуем рынок, определяем целевую аудиторию и формируем требования к продукту",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Проектирование",
      description: "Создаем прототип, разрабатываем UI/UX дизайн и планируем архитектуру",
      icon: "✏️"
    },
    {
      number: "03",
      title: "Разработка",
      description: "Пишем код, тестируем и внедряем все запланированные функции",
      icon: "💻"
    }
  ];

  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Как мы работаем
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наш процесс разработки построен таким образом, чтобы обеспечить 
            максимальное качество продукта и комфорт для клиента
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-background shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-sm font-bold text-primary mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
