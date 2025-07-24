import {
  FileText, Clock, TrendingUp, Shuffle, MessageCircle, DollarSign,
  TrendingDown, AlertTriangle, Target, Users, BarChart3, Settings,
  Headphones, CheckCircle, Brain, Code, Lightbulb, MessageSquare,
  FileSearch, Instagram, LayoutList, Building, GraduationCap, Repeat, Gauge,
} from "lucide-react"

export const PAIN_POINTS = [
  { icon: FileText, text: "A empresa não entregou o que foi combinado" },
  { icon: Clock, text: "A entrega demorou mais do que o previsto" },
  { icon: TrendingUp, text: "O resultado final não atende às expectativas" },
  { icon: Shuffle, text: "O escopo mudou várias vezes e nada ficou claro" },
  { icon: MessageCircle, text: "A comunicação foi falha e sem alinhamento com o negócio" },
  { icon: DollarSign, text: "No fim, é você quem precisa lidar com o prejuízo" },
]

export const URGENCY_INDICATORS = [
  { icon: TrendingDown, text: "A pressão por eficiência e redução de custos está aumentando" },
  { icon: Clock, text: "Decisões precisam ser mais rápidas e assertivas" },
  { icon: AlertTriangle, text: "Seus concorrentes já estão usando Inteligência Artificial " },
  { icon: Target, text: "É hora de ganhar vantagem competitiva" },
]

export const FOUNDERS = [
  {
    name: "Rodolfo Spigai",
    role: "Sócio Fundador",
    description:
      "Advogado empresarial com 25 anos de experiência, sócio fundador de três empresas (VAR Business Beyond, Caetano de Paula Advogados e AYTT). Especialista reconhecido em LGPD e Direito Digital. Ex-investidor anjo e mentor ativo em hubs de inovação e incubadoras. Expertise sólida em Compliance e Administração Empresarial, trazendo visão jurídica e estratégica para projetos de tecnologia.",
    image: "/rodolfo-profile-pic.png"
  },
  {
    name: "Ronaldo Sirosse",
    role: "Sócio Fundador",
    description:
      "Engenheiro Elétrico (Inatel) com mais de 10 anos liderando desenvolvimento de software e Segurança da Informação. Ex-Executivo do Inatel Competence Center, onde liderou equipes de até 100 profissionais em projetos para gigantes como Ericsson e Qualcomm. Especialista em certificações MPS.BR e gestão de processos. Combina experiência técnica robusta com liderança em projetos de grande escala.",
    image: "/ronaldo-profile-pic.png"
  },
  {
    name: "Guilherme Nakama",
    role: "Sócio Fundador",
    description:
      "Co-fundador do INSPER AI e sócio fundador da AYTT, focado em traduzir complexidade tecnológica em soluções práticas de IA para empresas. Estudante de Engenharia da Computação no INSPER, cresceu em ambiente empresarial familiar, desenvolvendo visão única sobre como a tecnologia impacta operações reais. Atua como ponte entre inovação técnica e necessidades concretas de negócio.",
    image: "/guilherme-profile-pic.png"
  }
]

export const TEAM_ROLES = [
  {
    title: "LÍDER TÉCNICO",
    description: "Define arquitetura técnica e orienta estrategicamente soluções de IA",
    responsibilities: [
      "Arquitetura de Soluções: Define estratégias técnicas adequadas",
      "Análise de Viabilidade: Conduz estudos técnicos",
      "Liderança da Equipe: Orienta boas práticas e garante qualidade"
    ],
    icon: Brain({ className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" })
  },
  {
    title: "GERENTE DE PROJETOS",
    description: "Coordena prazos, orçamento e comunicação cliente-equipe",
    responsibilities: [
      "Gestão de Cronogramas: Planeja e monitora entregas",
      "Comunicação Estratégica: Coordena alinhamento",
      "Controle de Recursos: Gerencia riscos e qualidade"
    ],
    icon: Target({ className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" })
  },
  {
    title: "CONSULTOR TECH",
    description: "Traduz objetivos do negócio em soluções práticas com IA",
    responsibilities: [
      "Explora Oportunidades: Identifica onde IA pode gerar valor",
      "Definição de Soluções: Define soluções viáveis e alinhadas",
      "Validação Estratégica: Valida impacto e escopo"
    ],
    icon: Lightbulb({ className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" })
  },
  {
    title: "TÉCNICO",
    description: "Executa implementação prática das soluções de IA",
    responsibilities: [
      "Desenvolvimento: Implementa automações e modelos de IA",
      "Integração de Sistemas: Conecta novas tecnologias",
      "Deploy e Manutenção: Realiza deploy e garante funcionamento"
    ],
    icon: Code({ className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" })
  }
]

export const COMPANY_LOGOS = [
  { name: "4Intelligence", file: "4intelligence.png" },
  { name: "Frimesa", file: "frimesa.png" },
  { name: "XCMG", file: "xcmg.png" },
  { name: "XCMG Bank", file: "xcmg-bank.png" },
  { name: "Gazin", file: "gazin.png" },
  { name: "Sicoob", file: "sicoob.png" },
  { name: "Unimed", file: "unimed.png" },
  { name: "OI", file: "oi.png" },
  { name: "Golfleet", file: "golfleet.png" },
  { name: "Ocellott", file: "ocellott.png" },
  { name: "Hitachi", file: "hitachi.png" },
  { name: "Indusbello", file: "indusbello.png" },
  { name: "Advise", file: "advise.png" },
  { name: "OAB Londrina", file: "oab-londrina.png" },
  { name: "Inatel", file: "inatel.png" },
  { name: "Eccosave", file: "eccosave.png" },
  { name: "Leucotron Tech", file: "leucotron.png" },
  { name: "Inatel Startups", file: "inatel-startups.png" },
  { name: "ConsultoMAQ", file: "consultomaq.png" },
  { name: "SMH", file: "smh.png" },
  { name: "EVVAS", file: "evvas.png" },
  { name: "Life Nutri", file: "life-nutri.png" },
  { name: "ISCAL", file: "iscal.png" },
  { name: "Cirvale", file: "cirvale.png" },
]

export const SOLUTION_DIFFERENTIALS = [
  { icon: Users, text: "Time composto por papéis definidos" },
  { icon: Target, text: "Foco total em eficiência na alocação de talentos" },
  { icon: BarChart3, text: "Contrato baseado em perfis, não em escopos fechados" },
  { icon: Settings, text: "Consultoria e apoio técnico do início ao fim" },
  { icon: Headphones, text: "Suporte contínuo durante todo projeto" },
]

export const PRACTICAL_SOLUTIONS = [
  {
    title: "PRIMEIRO ATENDIMENTO AO CLIENTE",
    features: [
      "Atendimento Inicial 24/7: Conversas iniciais, perguntas básicas",
      "Pré-cadastro de Leads: Identifica e coleta informações",
      "Pré-qualificação de Leads: Classifica com critérios predefinidos",
      "Agendamento de Reuniões: Marca reuniões quando há interesse"
    ],
    icon: MessageSquare
  },
  {
    title: "ATENDIMENTO PRÉ E PÓS-VENDA",
    features: [
      "Atendimento 24/7: Responde perguntas básicas sempre",
      "Esclarecimento de Dúvidas: Produtos e serviços de forma clara",
      "Pesquisa de Satisfação: Coleta feedback para insights"
    ],
    icon: Headphones
  },
  {
    title: "TRIAGEM DE CURRÍCULOS",
    features: [
      "Extração automática de dados: Captura informações (PDF, imagem)",
      "Classificação de aderência: Avalia compatibilidade currículo-vaga",
      "Priorização de perfis: Ordena candidatos mais alinhados"
    ],
    icon: FileSearch
  },
  {
    title: "LEITURA DE BOLETOS E NOTAS FISCAIS",
    features: [
      "Boletos: Extração de dados, classificação de contas, padronização",
      "Notas Fiscais: Captura informações, categorização, padronização",
      "Pedidos por Imagem: Reconhece documentos manuscritos, extrai dados, valida"
    ],
    icon: FileText
  },
  {
    title: "ATENDIMENTO MÍDIAS SOCIAIS",
    features: [
      "Responde comentário de posts",
      "Atendimento em DMs",
      "Esclarecimento de dúvidas de produtos"
    ],
    icon: Instagram
  },
  {
    title: "LEITURA DE PEDIDOS DE COMPRA",
    features: [
      "Extração automática de dados essenciais como produto, quantidade e valor",
      "Classificação por fornecedor, tipo de produto e prioridade",
      "Padronização e validação para integração com ERPs e automações"
    ],
    icon: LayoutList
  }
]

export const ADDITIONAL_SERVICES = [
  {
    title: "CONSULTORIA SOB DEMANDA",
    services: [
      "Arquitetura de Soluções com IA: Apoio técnico na construção com IA e N8N, foco em eficiência e escalabilidade",
      "Orientação Estratégica Personalizada: Discussão de casos reais e orientação sob medida"
    ],
    icon: Building,
  },
  {
    title: "TREINAMENTOS CUSTOMIZADOS",
    services: [
      "Treinamentos In Company: Formações práticas adaptadas à realidade da equipe",
      "Workshops Sob Demanda: Formações exclusivas com foco em aplicação imediata"
    ],
    icon: GraduationCap,
  },
]


export const READY_CHECKLIST = [
  { icon: Repeat, text: "Tem processos repetitivos que consomem tempo da equipe" },
  { icon: Brain, text: "Sabe que precisa de IA, mas não sabe por onde começar" },
  { icon: Gauge, text: "Perde oportunidades por lentidão operacional" },
  { icon: TrendingDown, text: "Se frustrou com projetos de tecnologia" },
]

export const CONTACT_INFO = {
  WHATSAPP: "(43) 99910-8255",
  EMAIL: "guilhermenakama@sorai.net.br",
  INSTAGRAM: "@aytt.tech",
}

export const WHATSAPP_LINKS = {
  HERO: "https://wa.me/5543999108255?text=Olá! Gostaria de saber como a AYTT pode ajudar a automatizar nossos processos com IA. Podemos agendar uma conversa?",
  MAIN: "https://wa.me/5543999108255?text=Olá! Gostaria de saber como a AYTT pode ajudar a automatizar nossos processos com IA. Podemos agendar uma conversa?",
  READY: "https://wa.me/5543999108255?text=Olá! Gostaria de saber como a AYTT pode ajudar a automatizar nossos processos com IA. Podemos agendar uma conversa?",
}

