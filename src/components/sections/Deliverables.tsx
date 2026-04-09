import { motion } from "motion/react";
import { BookOpen, CheckSquare, Layout, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import librosImg from "../../libros.jpg";

export function Deliverables() {
  const materials = [
    {
      icon: <CheckSquare className="w-6 h-6 text-secondary" />,
      title: "Checklists específicas",
      desc: "Guía rápida de acción para cada emoción."
    },
    {
      icon: <Layout className="w-6 h-6 text-secondary" />,
      title: "Tarjetas imprimibles",
      desc: "Gestión emocional inmediata."
    },
    {
      icon: <Heart className="w-6 h-6 text-secondary" />,
      title: "Yoga de las Emociones",
      desc: "Técnicas cuerpo-mente para niños."
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: "Escudo de la Valentía",
      desc: "Herramienta contra miedos nocturnos."
    }
  ];

  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            📚 Todo lo que recibes hoy:
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={librosImg} 
              alt="Libros y materiales del Botiquín de Rescate Emocional" 
              className="rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {materials.map((m, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">{m.icon}</div>
                    <h4 className="font-bold text-primary mb-2">{m.title}</h4>
                    <p className="text-sm text-gray-600">{m.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
