import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-10 md:section-padding">
      <div className="container-wide px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl text-primary mb-6 leading-tight">
              <span className="md:inline block">¿Te duele ver a tu hijo frustrado, </span>
              <span className="md:inline block">ansioso o con rabietas y </span>
              <span className="md:inline block">no sabes cómo ayudarle? <span className="inline-block">💔</span></span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-secondary font-medium mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              <span className="md:inline block">Ayuda a tu hijo a recuperar la calma, </span>
              <span className="md:inline block">gestionar sus emociones y fortalecer su </span>
              <span className="md:inline block">autoestima de forma <span className="text-accent font-bold underline italic">INMEDIATA</span></span>
              <span className="md:inline block"> con actividades prácticas... </span>
              <span className="md:inline block text-sm md:text-2xl opacity-80 mt-2 md:mt-0">sin teorías complicadas ni ser un experto.</span>
            </p>

            <div className="mt-12 relative">
              {/* Usando las imágenes reales subidas por el usuario */}
              <img 
                src="/mama.png" 
                alt="Madre consolando a su hijo" 
                className="rounded-2xl shadow-2xl mx-auto border-8 border-white max-h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                <p className="text-primary font-bold text-sm">✨ Método Probado</p>
                <p className="text-gray-500 text-xs">+5,000 Madres Felices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
