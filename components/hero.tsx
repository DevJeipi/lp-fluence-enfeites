import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TextType from "@/components/TextType";

export function Hero() {
  return (
    <section id="inicio" className="lg:px-8 lg:mt-24">
      <div className="relative overflow-hidden bg-secondary lg:rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-industrial-plastic-injection-factory-metall.jpg"
            alt="Fábrica de injeção plástica"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 lg:px-8 pb-24 pt-40 lg:pt-72 lg:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end">
            {/* Right - Main Title */}
            <div className="text-center lg:text-right lg:order-2">
              <TextType
                text={[
                  "Injeção em Plástico",
                  "Metalização a Vácuo",
                  "Enfeites e Acessórios!",
                ]}
                typingSpeed={75}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="|"
                className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:min-h-30"
              />
            </div>
            {/* Left - Description */}
            <div className="flex items-center justify-center text-center lg:text-left lg:order-1">
              <p className="text-lg lg:text-xl text-secondary-foreground/90 max-w-lg leading-relaxed font-light">
                12 anos transformando plástico em soluções de alto valor.
                Especialistas em metalização a vácuo para enfeites e acessórios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
