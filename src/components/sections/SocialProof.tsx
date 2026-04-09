import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      name: "María Elena",
      role: "Madre de 2 niños",
      text: "En solo una semana, mi hijo de 7 años ya me dice 'mamá, siento que tengo rabia' en lugar de explotar. ¡Es increíble!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Asunción",
      role: "Madre de una niña de 5 años",
      text: "El botiquín ha sido un salvavidas. Las actividades son tan sencillas que mi hija las pide cuando se siente triste.",
      image: "https://i.pravatar.cc/150?u=asuncion"
    },
    {
      name: "Laura G.",
      role: "Madre de 3 niños",
      text: "Por fin un material que no es pura teoría. Vamos directo a la actividad y la calma vuelve a casa en minutos.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            👥 Madres como tú ya están viendo resultados:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-warm-bg relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                <CardContent className="pt-12 pb-8 px-8">
                  <p className="text-gray-700 italic mb-8 relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full border-2 border-primary"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-primary">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
