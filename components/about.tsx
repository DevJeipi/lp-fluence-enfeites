export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero com Imagem */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/professional-plastic-injection-molding-factory-mac.jpg"
              alt="Fábrica Fluence Enfeites"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
              Tradição <br /> e Inovação
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Com mais de uma década de experiência, nos consolidamos como
              referência em injeção plástica e metalização a vácuo no mercado
              brasileiro.
            </p>
          </div>
        </div>

        {/* Valores sem Cards - Apenas Tipografia */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          <div>
            <div className="mb-6">
              <span className="text-6xl md:text-7xl font-light text-primary">
                12
              </span>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Anos de Experiência
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Mais de uma década dedicada à excelência em metalização a vácuo e
              injeção plástica de alta precisão.
            </p>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-4xl font-light text-foreground">Precisão</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Em cada detalhe
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Processos rigorosos de controle garantem produtos com acabamento
              impecável e durabilidade superior.
            </p>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-4xl font-light text-foreground">Inovação</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                Sempre evoluindo
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Equipamentos modernos e técnicas inovadoras para atender às
              demandas mais exigentes do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
