import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UVP() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  const features = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Directo al punto",
      description: "Vas directo a la página exacta según la emoción que tu hijo está viviendo."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Sin rodeos",
      description: "Sin leer de principio a fin. Encuentra la solución en segundos."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Rápido y efectivo",
      description: "Con actividades que funcionan en 5-10 minutos."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Especializado",
      description: "Diseñado específicamente para niños de 5 a 12 años."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Presentamos: <span className="text-accent">EL BOTIQUÍN DE RESCATE EMOCIONAL 🚑</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            El único método que funciona como un botiquín de primeros auxilios emocionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md bg-warm-bg hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <div className="relative max-w-md mb-12">
            <img 
              src="https://picsum.photos/seed/first-aid-kit/400/400" 
              alt="Botiquín Emocional" 
              className="rounded-full shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg">
                 <p className="text-accent font-black text-2xl">EL BOTIQUÍN</p>
                 <p className="text-primary font-bold">Rescate Emocional</p>
               </div>
            </div>
          </div>

          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-8 h-auto rounded-full shadow-lg transition-transform hover:scale-105 uppercase font-bold"
          >
            SÍ, QUIERO TRANSFORMAR LA VIDA EMOCIONAL DE MI HIJO
          </Button>
        </div>
      </div>
    </section>
  );
}
