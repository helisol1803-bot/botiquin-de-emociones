import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="bg-white section-padding">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            💰 El valor real de esta transformación:
          </h2>
        </div>

        <div className="bg-warm-bg rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/5">
          <div className="space-y-4 mb-12">
            <div className="flex justify-between items-center border-bottom pb-4 border-gray-200">
              <span className="text-gray-600">Una sesión con psicólogo infantil:</span>
              <span className="font-bold text-primary">$50-80 USD</span>
            </div>
            <div className="flex justify-between items-center border-bottom pb-4 border-gray-200">
              <span className="text-gray-600">Curso presencial de crianza:</span>
              <span className="font-bold text-primary">$200-300 USD</span>
            </div>
            <div className="flex justify-between items-center border-bottom pb-4 border-gray-200">
              <span className="text-gray-600">Libros especializados:</span>
              <span className="font-bold text-primary">$25-40 USD c/u</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-xl font-bold text-gray-800">Valor de todo el paquete:</span>
              <span className="text-xl font-bold text-primary">$300+ USD</span>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-2xl text-gray-600">Pero hoy, por tiempo limitado:</p>
            <div className="flex flex-col items-center">
              <span className="text-3xl text-red-500 line-through font-bold">~~$15.90~~</span>
              <span className="text-7xl md:text-8xl font-black text-accent drop-shadow-sm">
                $7.90 <span className="text-2xl">USD</span>
              </span>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-xl md:text-2xl px-8 py-10 h-auto rounded-full shadow-2xl transition-all hover:scale-105 uppercase font-black">
                🚀 OBTÉN ACCESO INMEDIATO
              </Button>
              <p className="mt-4 text-gray-500 font-medium">SÍ, QUIERO TRANSFORMAR LA VIDA EMOCIONAL DE MI HIJO</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-secondary" />
                Descarga instantánea
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-secondary" />
                Impresión ilimitada
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-secondary" />
                Garantía 7 días
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
