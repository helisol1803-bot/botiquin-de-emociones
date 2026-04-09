import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-warm-bg section-padding">
      <div className="container-wide max-w-4xl">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center border-4 border-primary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl text-primary mb-8 leading-tight">
              ✨ Tu hijo merece crecer emocionalmente fuerte y seguro
            </h2>
            
            <p className="text-xl text-gray-700 mb-12">
              Imagina a tu hijo dentro de 30 días: expresando sus emociones con palabras, calmándose solo cuando se siente abrumado y siendo ese niño feliz que siempre soñaste.
            </p>
            
            <div className="space-y-8">
              <p className="text-2xl font-bold text-primary italic">
                Todo comienza con una decisión hoy.
              </p>
              
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl px-12 py-10 h-auto rounded-full shadow-2xl transition-all hover:scale-105 uppercase font-black w-full md:w-auto">
                OBTENER EL BOTIQUÍN DE RESCATE EMOCIONAL - $7.90
              </Button>
              
              <div className="flex flex-col items-center gap-2 pt-8">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                <p className="text-gray-600 font-medium">Con amor y dedicación a tu familia ❤️</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
