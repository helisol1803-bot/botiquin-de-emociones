import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "¿Necesito ser psicólogo para aplicarlo?",
      a: "No. Está diseñado para madres sin experiencia previa. Cada actividad tiene instrucciones paso a paso, lenguaje sencillo y herramientas listas para usar."
    },
    {
      q: "¿Mi hijo de 5 años podrá entenderlo?",
      a: "Sí, las actividades están adaptadas por edades dentro del rango 5-12 años. Utilizamos juegos, dibujos y dinámicas corporales que son naturales para ellos."
    },
    {
      q: "¿Qué pasa si no funciona?",
      a: "Tienes 7 días de garantía. Si aplicas las actividades y sientes que no ves resultados o no es para ti, te devolvemos el 100% de tu inversión sin preguntas."
    },
    {
      q: "¿Necesito imprimir todo?",
      a: "No. El material es digital (PDF). Puedes consultarlo desde tu celular o tablet en el momento de la crisis, o imprimir solo las tarjetas y checklists que necesites tener a mano."
    }
  ];

  return (
    <section className="bg-warm-bg section-padding">
      <div className="container-wide max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            ❓ Preguntas Frecuentes:
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-2xl border-none shadow-sm">
              <AccordionTrigger className="text-left text-primary font-bold hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
