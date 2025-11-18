export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FLUENCE ENFEITES</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Excelência em injeção plástica e metalização a vácuo há 12 anos.
              Transformando ideias em produtos de qualidade superior.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#processos"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Processos
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Metalização a Vácuo</li>
              <li>Injeção Plástica</li>
              <li>Acabamento Personalizado</li>
              <li>Desenvolvimento de Produtos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Fluence Enfeites. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
