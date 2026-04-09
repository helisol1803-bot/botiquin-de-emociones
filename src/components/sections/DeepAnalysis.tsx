import { motion } from "motion/react";
import { Brain, RefreshCcw, Link } from "lucide-react";

export function DeepAnalysis() {
  const points = [
    {
      icon: <RefreshCcw className="w-8 h-8 text-secondary" />,
      title: "Rompen el patrón de crisis",
      desc: "Intervención inmediata cuerpo-mente que detiene la escalada emocional."
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: "Crean nuevos hábitos",
      desc: "Repetición positiva que se automatiza en el cerebro del niño."
    },
    {
      icon: <Link className="w-8 h-8 text-secondary" />,
      title: "Fortalecen la conexión",
      desc: "El juego une y sana la relación madre-hijo de forma profunda."
    }
  ];

  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            🔍 ¿Por qué funciona El Botiquín de Rescate Emocional?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            La neurociencia nos enseña que los niños procesan las emociones de manera diferente a los adultos. Nuestro método traduce esta ciencia en "píldoras" lúdicas y corporales que:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary text-white p-8 rounded-3xl text-center shadow-xl">
          <p className="text-2xl font-bold italic">
            "No es solo un libro, es un sistema de transformación familiar."
          </p>
        </div>
      </div>
    </section>
  );
}
