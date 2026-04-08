import { motion } from "motion/react";
import { BookOpen, CheckSquare, Layout, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="bg-white section-padding">
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
            className="bg-warm-bg p-8 rounded-3xl border-2 border-primary/10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary p-3 rounded-2xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">DIRECTOR: El Botiquín de Rescate Emocional</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Libro digital de <span className="font-bold">+190 páginas</span> con <span className="font-bold">+150 actividades prácticas</span> organizadas por emociones. Acceso directo según la crisis:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-500">¿Tristeza?</p>
                <p className="font-bold text-primary">Página 45</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-500">¿Miedo?</p>
                <p className="font-bold text-primary">Página 78</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="text-sm text-gray-500">¿Rabieta?</p>
                <p className="font-bold text-primary">Página 112</p>
              </div>
            </div>
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
