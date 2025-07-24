export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  publishedAt: string
  readTime: string
  views: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-implementar-ia-empresa-2025",
    title: "Como Implementar IA na Sua Empresa em 2025: Guia Completo",
    excerpt: "Descubra o passo a passo para implementar soluções de IA na sua empresa, desde o planejamento até a execução, com dicas práticas e cases reais.",
    image: "/blog/ia-empresa-2025.jpg",
    category: "Implementação",
    publishedAt: "15 Jan 2025",
    readTime: "8 min",
    views: "2.3k",
    author: "Rodolfo Spigai",
    tags: ["IA Empresarial", "Implementação", "Estratégia", "Transformação Digital"],
    featured: true,
    content: `
      <h2>Por Que Sua Empresa Precisa de IA Agora</h2>
      <p>A Inteligência Artificial deixou de ser uma tendência futurista para se tornar uma necessidade estratégica. Empresas que não adotarem IA até 2025 correm o risco de ficar para trás.</p>
      
      <h3>1. Avalie Sua Maturidade Digital</h3>
      <p>Antes de implementar IA, sua empresa precisa ter uma base digital sólida. Isso inclui:</p>
      <ul>
        <li>Processos digitalizados</li>
        <li>Dados organizados e acessíveis</li>
        <li>Equipe capacitada em tecnologia</li>
        <li>Infraestrutura adequada</li>
      </ul>
      
      <h3>2. Identifique Oportunidades de Automação</h3>
      <p>Mapeie os processos repetitivos e demorados da sua empresa:</p>
      <ul>
        <li>Atendimento ao cliente</li>
        <li>Análise de currículos</li>
        <li>Processamento de documentos</li>
        <li>Gestão de estoque</li>
      </ul>
      
      <h3>3. Comece Pequeno e Escale Gradualmente</h3>
      <p>O segredo do sucesso na implementação de IA é começar com projetos pequenos e escaláveis:</p>
      <ol>
        <li>Escolha um processo simples para automatizar</li>
        <li>Implemente uma solução piloto</li>
        <li>Meça os resultados</li>
        <li>Expanda para outros processos</li>
      </ol>
      
      <h3>4. Monte a Equipe Certa</h3>
      <p>Uma implementação bem-sucedida requer diferentes perfis:</p>
      <ul>
        <li><strong>Líder Técnico:</strong> Define a arquitetura das soluções</li>
        <li><strong>Gerente de Projetos:</strong> Coordena prazos e entregas</li>
        <li><strong>Consultor Tech:</strong> Traduz necessidades de negócio em soluções</li>
        <li><strong>Desenvolvedor:</strong> Implementa as automações</li>
      </ul>
      
      <blockquote>
        "A IA não substitui pessoas, ela potencializa o que elas fazem de melhor." - Guilherme Nakama, AYTT
      </blockquote>
      
      <h3>Cases de Sucesso</h3>
      <p>Veja alguns exemplos reais de empresas que implementaram IA com sucesso:</p>
      <ul>
        <li><strong>Empresa de RH:</strong> 80% de redução no tempo de triagem de currículos</li>
        <li><strong>E-commerce:</strong> 60% de melhoria no atendimento ao cliente</li>
        <li><strong>Indústria:</strong> 40% de redução nos custos operacionais</li>
      </ul>
      
      <h3>Próximos Passos</h3>
      <p>Se sua empresa está pronta para implementar IA, entre em contato com a AYTT. Nossa equipe especializada pode ajudar você a:</p>
      <ul>
        <li>Avaliar a maturidade digital da sua empresa</li>
        <li>Identificar oportunidades de automação</li>
        <li>Desenvolver soluções customizadas</li>
        <li>Treinar sua equipe</li>
      </ul>
    `
  },
  {
    slug: "chatbots-empresariais-roi-2025",
    title: "Chatbots Empresariais: Como Calcular o ROI Real em 2025",
    excerpt: "Aprenda a calcular o retorno sobre investimento de chatbots empresariais e descubra por que essa tecnologia é essencial para o crescimento do seu negócio.",
    image: "/blog/chatbots-roi-2025.jpg",
    category: "ROI",
    publishedAt: "12 Jan 2025",
    readTime: "6 min",
    views: "1.8k",
    author: "Ronaldo Sirosse",
    tags: ["Chatbots", "ROI", "Automação", "Atendimento"],
    featured: true,
    content: `
      <h2>O Impacto Real dos Chatbots no Seu Negócio</h2>
      <p>Chatbots bem implementados podem gerar economias significativas e melhorar drasticamente a experiência do cliente.</p>
      
      <h3>Como Calcular o ROI de Chatbots</h3>
      <p>O cálculo do ROI deve considerar:</p>
      <ul>
        <li>Redução de custos operacionais</li>
        <li>Aumento na conversão de leads</li>
        <li>Melhoria na satisfação do cliente</li>
        <li>Disponibilidade 24/7</li>
      </ul>
      
      <h3>Métricas Importantes</h3>
      <ul>
        <li>Taxa de resolução automatizada</li>
        <li>Tempo médio de resposta</li>
        <li>Satisfação do cliente (CSAT)</li>
        <li>Custo por interação</li>
      </ul>
    `
  },
  {
    slug: "automacao-processos-pequenas-empresas",
    title: "Automação de Processos para Pequenas Empresas: Guia Prático",
    excerpt: "Descubra como pequenas empresas podem implementar automação sem grandes investimentos e obter resultados significativos.",
    image: "/blog/automacao-pequenas-empresas.jpg",
    category: "Automação",
    publishedAt: "10 Jan 2025",
    readTime: "5 min",
    views: "1.5k",
    author: "Guilherme Nakama",
    tags: ["Automação", "Pequenas Empresas", "Eficiência", "Custos"],
    featured: false,
    content: `
      <h2>Automação ao Alcance de Pequenas Empresas</h2>
      <p>Pequenas empresas também podem se beneficiar da automação com investimentos adequados ao seu porte.</p>
      
      <h3>Processos Prioritários para Automatizar</h3>
      <ul>
        <li>Gestão de leads</li>
        <li>Atendimento básico</li>
        <li>Controle de estoque</li>
        <li>Emissão de documentos</li>
      </ul>
    `
  },
  {
    slug: "ia-generativa-empresas-casos-uso",
    title: "IA Generativa em Empresas: 10 Casos de Uso Práticos",
    excerpt: "Explore aplicações reais de IA generativa em empresas, desde criação de conteúdo até automação de processos complexos.",
    image: "/blog/ia-generativa-empresas.jpg",
    category: "IA Generativa",
    publishedAt: "8 Jan 2025",
    readTime: "7 min",
    views: "2.1k",
    author: "Rodolfo Spigai",
    tags: ["IA Generativa", "ChatGPT", "Automação", "Produtividade"],
    featured: false,
    content: `
      <h2>O Poder da IA Generativa nos Negócios</h2>
      <p>A IA generativa está revolucionando como as empresas criam conteúdo e automatizam processos.</p>
      
      <h3>10 Casos de Uso Práticos</h3>
      <ol>
        <li>Criação de conteúdo para marketing</li>
        <li>Análise de documentos legais</li>
        <li>Geração de relatórios automáticos</li>
        <li>Tradução de conteúdo</li>
        <li>Suporte técnico automatizado</li>
      </ol>
    `
  },
  {
    slug: "lgpd-ia-compliance-empresarial",
    title: "LGPD e IA: Como Manter Compliance em Projetos de Automação",
    excerpt: "Entenda as implicações da LGPD em projetos de IA e como garantir que sua empresa esteja em conformidade com a legislação.",
    image: "/blog/lgpd-ia-compliance.jpg",
    category: "Compliance",
    publishedAt: "5 Jan 2025",
    readTime: "9 min",
    views: "1.2k",
    author: "Rodolfo Spigai",
    tags: ["LGPD", "Compliance", "Privacidade", "IA", "Legislação"],
    featured: false,
    content: `
      <h2>LGPD e IA: Navegando pela Compliance</h2>
      <p>Projetos de IA devem estar em total conformidade com a LGPD para evitar riscos legais e financeiros.</p>
      
      <h3>Principais Considerações</h3>
      <ul>
        <li>Consentimento explícito para tratamento de dados</li>
        <li>Transparência nos algoritmos</li>
        <li>Direito à explicação das decisões automatizadas</li>
        <li>Segurança no armazenamento de dados</li>
      </ul>
    `
  },
  {
    slug: "machine-learning-previsao-vendas",
    title: "Machine Learning para Previsão de Vendas: Case Prático",
    excerpt: "Veja como uma empresa real utilizou machine learning para melhorar suas previsões de vendas em 40% e otimizar seu estoque.",
    image: "/blog/ml-previsao-vendas.jpg",
    category: "Machine Learning",
    publishedAt: "3 Jan 2025",
    readTime: "6 min",
    views: "1.7k",
    author: "Ronaldo Sirosse",
    tags: ["Machine Learning", "Vendas", "Previsão", "Case"],
    featured: false,
    content: `
      <h2>Machine Learning Transformando Previsões</h2>
      <p>Case real de como o ML pode revolucionar a gestão de vendas e estoque.</p>
      
      <h3>Resultados Obtidos</h3>
      <ul>
        <li>40% de melhoria na precisão das previsões</li>
        <li>25% de redução no estoque parado</li>
        <li>15% de aumento nas vendas</li>
      </ul>
    `
  }
]