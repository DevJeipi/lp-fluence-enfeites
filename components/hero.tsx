import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TextType from "@/components/TextType";

export function Hero() {
  return (
    <section id="inicio" className="lg:px-8 lg:mt-24">
      <div className="relative flex items-center justify-center overflow-hidden bg-secondary lg:rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-industrial-plastic-injection-factory-metall.jpg"
            alt="Fábrica de injeção plástica"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-b from-secondary/90 via-secondary/80 to-secondary" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-48 lg:pt-32 pb-32">
          <div className="max-w-4xl mx-auto text-center">
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
              className="text-primary-foreground text-5xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-14"
            />
            <p className="text-lg md:text-xl lg:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              12 anos transformando plástico em soluções de alto valor.
              Especialistas em metalização a vácuo para enfeites e acessórios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base">
                <a href="#servicos">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base bg-secondary-foreground/10 hover:bg-secondary-foreground/20 border-secondary-foreground/30 text-secondary-foreground"
              >
                <a href="#contato">Entre em Contato</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
