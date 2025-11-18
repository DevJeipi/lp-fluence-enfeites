import { Award, Target, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/professional-plastic-injection-molding-factory-mac.jpg"
              alt="Fábrica Fluence Enfeites"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Tradição e Inovação
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de uma década de experiência, nos consolidamos como
              referência em injeção plástica e metalização a vácuo no mercado
              brasileiro.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa expertise combina tecnologia de ponta com processos
              tradicionais aperfeiçoados ao longo dos anos, garantindo produtos
              de qualidade superior para nossos clientes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              12 Anos de Experiência
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Mais de uma década dedicada à excelência em metalização a vácuo e
              injeção plástica de alta precisão.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Precisão e Qualidade
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Processos rigorosos de controle garantem produtos com acabamento
              impecável e durabilidade superior.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Tecnologia Avançada
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Equipamentos modernos e técnicas inovadoras para atender às
              demandas mais exigentes do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
