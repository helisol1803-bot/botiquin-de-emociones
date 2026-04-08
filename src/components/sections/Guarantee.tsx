import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-secondary/10 section-padding">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-secondary/20 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-secondary/20 p-4 rounded-full">
              <ShieldCheck className="w-16 h-16 text-secondary" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-primary mb-6">
            🛡️ Garantía de Tranquilidad Total - 7 Días
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Si después de aplicar los ejercicios sientes que el material no se adapta a las necesidades de tu familia, te entregaremos el <span className="font-bold text-secondary">100% de tu dinero</span>. Sin preguntas, sin complicaciones.
          </p>
          
          <p className="text-xl font-bold text-primary">
            Tu satisfacción es nuestra prioridad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
