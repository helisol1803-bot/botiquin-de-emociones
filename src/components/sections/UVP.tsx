import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Clock, Users, Heart } from "lucide-react";
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
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-primary mb-4 leading-tight">
            Presentamos La Guía <br />
            <span className="text-accent">EL BOTIQUÍN DE RESCATE EMOCIONAL 🚑</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            El método que funciona como un botiquín de primeros auxilios emocionales porque va:
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
            {/* Corazones flotantes para coincidir con la imagen del usuario */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 text-accent/40 z-10"
            >
              <Heart className="w-12 h-12 fill-current" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 text-accent/30 z-10"
            >
              <Heart className="w-8 h-8 fill-current" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/4 text-accent/20 z-10"
            >
              <Heart className="w-10 h-10 fill-current" />
            </motion.div>

            {/* Añadido v=2 para forzar la actualización */}
            <img 
              src="/botiquin.jpg?v=2" 
              alt="Botiquín Emocional" 
              className="rounded-3xl shadow-2xl border-8 border-white relative z-0"
            />
            <div className="absolute bottom-6 right-6 z-20">
               <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl text-right shadow-xl border border-primary/10">
                 <p className="text-accent font-black text-xl tracking-tighter uppercase">Botiquín de</p>
                 <p className="text-primary font-bold uppercase text-[10px] tracking-widest">Rescate Emocional</p>
               </div>
            </div>
          </div>

          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-8 h-auto rounded-full shadow-lg transition-transform hover:scale-105 uppercase font-bold"
          >
            SÍ, QUIERO TRANSFORMAR LA VIDA EMOCIONAL DE MI HIJO
          </Button>
        </div>
      </div>
    </section>
  );
}
