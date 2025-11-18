export function Products() {
  const products = [
    {
      title: "Enfeites Decorativos",
      image: "/metallic-chrome-decorative-plastic-ornaments-luxur.jpg",
      description:
        "Peças decorativas com acabamento metálico para diversos segmentos.",
    },
    {
      title: "Acessórios Automotivos",
      image: "/chrome-automotive-plastic-accessories-parts-metall.jpg",
      description:
        "Componentes plásticos metalizados para indústria automotiva.",
    },
    {
      title: "Acessórios de Moda",
      image: "/metallic-fashion-accessories-jewelry-components.jpg",
      description: "Acessórios metalizados para bijuterias e moda em geral.",
    },
    {
      title: "Componentes Industriais",
      image: "/industrial-plastic-components-metallic-finish-tech.jpg",
      description:
        "Peças técnicas com revestimento metálico para aplicações industriais.",
    },
    {
      title: "Embalagens Premium",
      image: "/luxury-metallic-plastic-packaging-cosmetics.jpg",
      description:
        "Embalagens sofisticadas com acabamento metálico para produtos premium.",
    },
    {
      title: "Acabamentos Especiais",
      image: "/special-metallic-finish-plastic-gold-silver-chrome.jpg",
      description:
        "Cromado, dourado, prateado e outros acabamentos personalizados.",
    },
  ];

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Aplicações e Produtos
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Nossa experiência abrange diversos segmentos, sempre com o
            compromisso de entregar qualidade excepcional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
