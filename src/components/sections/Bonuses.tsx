import { motion } from "motion/react";
import { Gift, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Bonuses() {
  const bonuses = [
    {
      number: 1,
      title: "Guía de Autocuidado Familiar",
      value: "$15 USD",
      desc: "Plan completo para que TÚ también mantengas el equilibrio emocional. Porque no puedes dar lo que no tienes."
    },
    {
      number: 2,
      title: "15 Mandalas para colorear",
      value: "$8 USD",
      desc: "Actividades que tu hijo puede hacer solo para calmarse mientras tú recuperas energías."
    }
  ];

  return (
    <section className="bg-accent/5 section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            🎁 BONOS EXCLUSIVOS (Por tiempo limitado):
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl relative overflow-hidden border-2 border-accent/10"
            >
              <div className="absolute top-0 right-0">
                <Badge className="bg-accent text-white px-4 py-2 rounded-bl-3xl text-lg font-bold">
                  GRATIS
                </Badge>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold text-primary">BONO #{bonus.number}</h3>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-800 mb-2">{bonus.title}</h4>
              <p className="text-gray-500 line-through mb-4 font-medium">Valor: {bonus.value}</p>
              
              <p className="text-gray-700 leading-relaxed">
                {bonus.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-primary">
            Valor total de los bonos: <span className="text-accent">$23 USD</span>
          </p>
        </div>
      </div>
    </section>
  );
}
