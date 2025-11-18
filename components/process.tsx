export function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultoria Inicial",
      description:
        "Análise detalhada do projeto e especificações técnicas necessárias para seu produto.",
    },
    {
      number: "02",
      title: "Desenvolvimento",
      description:
        "Criação de moldes e protótipos com tecnologia de ponta para validação do produto.",
    },
    {
      number: "03",
      title: "Produção",
      description:
        "Injeção plástica em larga escala com controle rigoroso de qualidade em cada etapa.",
    },
    {
      number: "04",
      title: "Metalização",
      description:
        "Aplicação de acabamento metálico a vácuo para resultado premium e durabilidade.",
    },
  ];

  return (
    <section id="processos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nosso Processo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Do conceito ao produto final, cada etapa é executada com precisão e
            cuidado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl lg:text-7xl font-bold text-primary/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
