import { motion } from "motion/react";
import { XCircle } from "lucide-react";

export function NotForYou() {
  const points = [
    "Buscas una solución mágica sin participación del adulto",
    "Tu hijo tiene menos de 5 años o más de 12",
    "Prefieres solo teoría sin actividades prácticas",
    "No tienes 10-15 minutos al día para dedicar a tu hijo"
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-wide max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-primary mb-4">
            ⚠️ Este método NO es para ti si:
          </h2>
        </div>
        
        <div className="space-y-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <p className="text-gray-700 font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
