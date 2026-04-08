/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "@/src/components/sections/Hero";
import { Story } from "@/src/components/sections/Story";
import { UVP } from "@/src/components/sections/UVP";
import { Benefits } from "@/src/components/sections/Benefits";
import { SocialProof } from "@/src/components/sections/SocialProof";
import { Guarantee } from "@/src/components/sections/Guarantee";
import { NotForYou } from "@/src/components/sections/NotForYou";
import { Deliverables } from "@/src/components/sections/Deliverables";
import { Bonuses } from "@/src/components/sections/Bonuses";
import { Pricing } from "@/src/components/sections/Pricing";
import { FAQ } from "@/src/components/sections/FAQ";
import { Urgency } from "@/src/components/sections/Urgency";
import { DeepAnalysis } from "@/src/components/sections/DeepAnalysis";
import { FinalCTA } from "@/src/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero (approx 600px)
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Simple scroll to bottom where pricing/final cta are
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen selection:bg-accent/30">
      <main>
        <Hero />
        <Story />
        <UVP />
        <Benefits />
        <SocialProof />
        <Guarantee />
        <NotForYou />
        <Deliverables />
        <Bonuses />
        <Pricing />
        <FAQ />
        <Urgency />
        <DeepAnalysis />
        <FinalCTA />
      </main>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50 md:hidden"
          >
            <Button 
              onClick={scrollToPricing}
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 rounded-xl shadow-lg"
            >
              ¡QUIERO MI BOTIQUÍN AHORA! - $7.90
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-primary text-white py-12 text-center">
        <div className="container-wide">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} El Botiquín de Rescate Emocional. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-4 opacity-50 max-w-2xl mx-auto">
            Este producto no sustituye el consejo médico o psicológico profesional. Los resultados pueden variar según la aplicación del método y las necesidades individuales de cada niño.
          </p>
        </div>
      </footer>
    </div>
  );
}

