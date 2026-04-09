import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Dominio emocional inmediato",
      description: "Tu hijo reconocerá y gestionará 8 emociones intensas."
    },
    {
      icon: "🕊️",
      title: "Calma instantánea",
      description: "Técnicas que devuelven la paz en momentos de crisis."
    },
    {
      icon: "💪",
      title: "Autoestima sólida",
      description: "Actividades que fortalecen la confianza en sí mismo."
    },
    {
      icon: "🗣️",
      title: "Comunicación fluida",
      description: "Mejora el diálogo y la resolución de conflictos familiares."
    },
    {
      icon: "🏠",
      title: "Ambiente armonioso",
      description: "Transforma tu hogar en un espacio de tranquilidad."
    }
  ];

  return (
    <section className="bg-secondary/5 section-padding">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl text-primary mb-8">
              ✨ Lo que lograrás con tu hijo:
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-primary">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/familia.png" 
              alt="Madre e hijo jugando con tarjetas de emociones" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
