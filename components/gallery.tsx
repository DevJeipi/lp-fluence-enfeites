export function Gallery() {
  const images = [
    {
      url: "/industrial-factory-plastic-injection-machines-prod.jpg",
      title: "Linha de Produção",
    },
    {
      url: "/vacuum-metallization-chamber-industrial-equipment.jpg",
      title: "Câmara de Metalização",
    },
    {
      url: "/quality-control-inspection-plastic-parts-industria.jpg",
      title: "Controle de Qualidade",
    },
    {
      url: "/placeholder.svg?height=800&width=1200",
      title: "Produtos Finalizados",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossa Estrutura
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Tecnologia de ponta e processos rigorosos para garantir a excelência
            em cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 || index === 3
                  ? "md:col-span-2 aspect-[21/9]"
                  : "aspect-square"
              }`}
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-secondary-foreground">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
