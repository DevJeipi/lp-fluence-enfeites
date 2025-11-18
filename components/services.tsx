import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Package, Palette, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Metalização a Vácuo",
      description:
        "Processo de alta tecnologia que garante acabamento metálico brilhante e durável em peças plásticas.",
      image: "/vacuum-metallization-machine-industrial-chrome-pla.jpg",
    },
    {
      icon: Package,
      title: "Injeção Plástica",
      description:
        "Produção de peças plásticas com precisão dimensional e repetibilidade para enfeites e acessórios.",
      image: "/plastic-injection-molding-machine-industrial-manuf.jpg",
    },
    {
      icon: Palette,
      title: "Acabamento Personalizado",
      description:
        "Diversos tipos de acabamentos metálicos: cromado, dourado, prateado e outras opções customizadas.",
      image: "/custom-metallic-finish-samples-chrome-gold-silver.jpg",
    },
    {
      icon: Zap,
      title: "Desenvolvimento de Produtos",
      description:
        "Consultoria técnica e desenvolvimento de novos produtos do conceito à produção em escala.",
      image: "/product-development-industrial-design-engineering.jpg",
    },
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Soluções completas em injeção plástica e metalização para atender
            todas as suas necessidades industriais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all overflow-hidden group"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 lg:p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
