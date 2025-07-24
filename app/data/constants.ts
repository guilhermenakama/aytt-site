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
    icon: Building
  },
  {
    title: "TREINAMENTOS CUSTOMIZADOS",
    services: [
      "Treinamentos In Company: Formações práticas adaptadas à realidade da equipe",
      "Workshops Sob Demanda: Formações exclusivas com foco em aplicação imediata"
    ],
    icon: GraduationCap
  }
]

export const READY_CHECKLIST = [
  { icon: Repeat, text: "Tem processos repetitivos que consomem tempo da equipe" },
  { icon: Brain, text: "Sabe que precisa de IA, mas não sabe por onde começar" },
  { icon: Gauge, text: "Perde oportunidades por lentidão operacional" },
  { icon: TrendingDown, text: "Se frustrou com projetos de tecnologia" },
]
