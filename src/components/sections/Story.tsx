import { motion } from "motion/react";

export function Story() {
  return (
    <section className="bg-warm-bg section-padding">
      <div className="container-wide max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-lg text-gray-700 leading-relaxed"
        >
          <p>
            Imagina este escenario: Son las 7 de la mañana, tu hijo tiene una rabieta porque no encuentra su juguete favorito, tú ya estás llegando tarde al trabajo, y sientes cómo la ansiedad te invade...
          </p>
          
          <p className="text-2xl font-bold text-primary text-center py-4">
            ¿Te suena familiar?
          </p>
          
          <p>
            Como madre, sabes que detrás de cada rabieta, cada "no quiero" y cada lágrima, hay emociones reales que tu hijo no sabe cómo expresar. 
          </p>
          
          <p>
            Y lo más frustrante es que, aunque tu corazón de madre quiere ayudarle, muchas veces <span className="font-bold text-primary">no sabes exactamente qué decir o qué hacer</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
