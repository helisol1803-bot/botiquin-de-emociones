import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock } from "lucide-react";

export function Urgency() {
  const [timeLeft, setTimeLeft] = useState(19 * 60 + 47); // 19:47 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-red-50 py-8 border-y border-red-100">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-red-600 font-bold">
            <Clock className="w-6 h-6 animate-pulse" />
            <span className="text-xl uppercase tracking-wider">ATENCIÓN: Oferta por tiempo limitado</span>
          </div>
          
          <div className="text-gray-700 font-medium">
            El descuento del 50% termina en:
          </div>
          
          <motion.div 
            key={timeLeft}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="bg-red-600 text-white font-mono text-3xl px-6 py-2 rounded-xl shadow-lg"
          >
            {formatTime(timeLeft)}
          </motion.div>
          
          <div className="text-red-600 font-bold">
            minutos restantes
          </div>
        </div>
        
        <p className="text-center mt-4 text-sm text-gray-500">
          Después de este tiempo, el precio vuelve a <span className="line-through">$15.90 USD</span>.
        </p>
      </div>
    </section>
  );
}
