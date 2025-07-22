'use client'
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
  BarChart3,
  Code,
  Shield,
  Check,
  Menu,
  X,
  Play,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Users,
  AlertTriangle,
  Target,
  MessageCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Shuffle,
  FileText,
  Calendar,
  Star,
  Award,
  Briefcase,
  Settings,
  CheckCircle,
  XCircle,
  Layers,
  Cpu,
  Database,
  Globe,
  Phone,
  Mail,
  MapPin,
  Building,
  Lightbulb,
  Rocket,
  Eye,
  Heart,
  ThumbsUp,
  UserCheck,
  FileSearch,
  MessageSquare,
  Headphones,
  BarChart,
  PenTool,
  Cog,
  BookOpen,
  GraduationCap,
  Repeat,
  Gauge,

  Coffee,
  Smile
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const heroRef = useRef<HTMLElement>(null)
  const urgencyRef = useRef<HTMLElement>(null)
  const philosophyRef = useRef<HTMLElement>(null)
  const foundersRef = useRef<HTMLElement>(null)
  const solutionsRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const challengeRef = useRef<HTMLElement>(null)
  const architectureRef = useRef<HTMLElement>(null)
  const practicalRef = useRef<HTMLElement>(null)
  const additionalRef = useRef<HTMLElement>(null)
  const readyRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = [
        { id: "home", ref: heroRef },
        { id: "urgency", ref: urgencyRef },
        { id: "philosophy", ref: philosophyRef },
        { id: "founders", ref: foundersRef },
        { id: "solutions", ref: solutionsRef },
        { id: "team", ref: teamRef },
        { id: "challenge", ref: challengeRef },
        { id: "architecture", ref: architectureRef },
        { id: "practical", ref: practicalRef },
        { id: "additional", ref: additionalRef },
        { id: "ready", ref: readyRef },
        { id: "contact", ref: contactRef },
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const painPoints = [
    { icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />, text: "A empresa não entregou o que foi combinado" },
    { icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />, text: "A entrega demorou mais do que o previsto" },
    { icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />, text: "O resultado final não atende às expectativas" },
    { icon: <Shuffle className="h-5 w-5 sm:h-6 sm:w-6" />, text: "O escopo mudou várias vezes e nada ficou claro" },
    { icon: <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />, text: "A comunicação foi falha e sem alinhamento com o negócio" },
    { icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />, text: "No fim, é você quem precisa lidar com o prejuízo" },
  ]

  const urgencyIndicators = [
    { icon: <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Suas margens estão sendo pressionadas pela concorrência" },
    { icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Cada mês sem automação é dinheiro perdido" },
    { icon: <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Processos manuais limitam seu crescimento" },
    { icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Quem automatizar primeiro domina o mercado" },
  ]

  const founders = [
    {
      name: "Guilherme Nakama",
      role: "Sócio Fundador",
      description: "Sócio fundador da AYTT, focado em soluções práticas de IA e automação. Estudante de Engenharia da Computação no INSPER e co-fundador do INSPER AI. Experiência na interface entre complexidade tecnológica e desafios empresariais. Cresceu em ambiente de empresa familiar, visão sobre impactos da tecnologia na operação diária.",
      image: "/guilherme-profile-pic.png"
    },
    {
      name: "Rodolfo Spigai",
      role: "Sócio Fundador",
      description: "Sócio fundador da VAR Business Beyond, Caetano de Paula Advogados e AYTT. 25 anos de advocacia empresarial. Especialista em LGPD, Direito Digital, Administração, Compliance. Ex-investidor de holding de capital anjo, mentor em hubs de inovação.",
      image: "/rodolfo-profile-pic.png"
    },
    {
      name: "Ronaldo Sirosse",
      role: "Sócio Fundador",
      description: "Sócio fundador da VAR Business Beyond e AYTT. 10+ anos desenvolvimento de software e Segurança da Informação. Graduado Engenharia Elétrica pelo Inatel. Ex-Executivo Inatel Competence Center (liderou equipes de até 100 profissionais). Projetos para Ericsson e Qualcomm, certificações MPS.BR.",
      image: "/ronaldo-profile-pic.png"
    }
  ]

  const companyLogos = [
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
    { name: "Leucotron Tech", file: "leucotron-tech.png" },
    { name: "Inatel Startups", file: "inatel-startups.png" },
    { name: "ConsultoMAQ", file: "consultomaq.png" },
    { name: "SMH", file: "smh.png" },
    { name: "EVVAS", file: "evvas.png" },
    { name: "Life Nutri", file: "life-nutri.png" },
    { name: "ISCAL", file: "iscal.png" },
  ];

  const solutionDifferentials = [
    { icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Time composto por papéis definidos" },
    { icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Foco total em eficiência na alocação de talentos" },
    { icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Contrato baseado em perfis, não em escopos fechados" },
    { icon: <Settings className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Consultoria e apoio técnico do início ao fim" },
    { icon: <Headphones className="h-6 w-6 sm:h-8 sm:w-8" />, text: "Suporte contínuo durante todo projeto" },
  ]

  const teamRoles = [
    {
      title: "LÍDER TÉCNICO",
      description: "Define arquitetura técnica e orienta estrategicamente soluções de IA",
      responsibilities: [
        "Arquitetura de Soluções: Define estratégias técnicas adequadas",
        "Análise de Viabilidade: Conduz estudos técnicos",
        "Liderança da Equipe: Orienta boas práticas e garante qualidade"
      ],
      icon: <Brain className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
    },
    {
      title: "GERENTE DE PROJETOS",
      description: "Coordena prazos, orçamento e comunicação cliente-equipe",
      responsibilities: [
        "Gestão de Cronogramas: Planeja e monitora entregas",
        "Comunicação Estratégica: Coordena alinhamento",
        "Controle de Recursos: Gerencia riscos e qualidade"
      ],
      icon: <Target className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
    },
    {
      title: "CONSULTOR TECH",
      description: "Traduz objetivos do negócio em soluções práticas com IA",
      responsibilities: [
        "Explora Oportunidades: Identifica onde IA pode gerar valor",
        "Definição de Soluções: Define soluções viáveis e alinhadas",
        "Validação Estratégica: Valida impacto e escopo"
      ],
      icon: <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
    },
    {
      title: "TÉCNICO",
      description: "Executa implementação prática das soluções de IA",
      responsibilities: [
        "Desenvolvimento: Implementa automações e modelos de IA",
        "Integração de Sistemas: Conecta novas tecnologias",
        "Deploy e Manutenção: Realiza deploy e garante funcionamento"
      ],
      icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
    }
  ]

  const practicalSolutions = [
    {
      title: "PRIMEIRO ATENDIMENTO AO CLIENTE",
      features: [
        "Atendimento Inicial 24/7: Conversas iniciais, perguntas básicas",
        "Pré-cadastro de Leads: Identifica e coleta informações",
        "Pré-qualificação de Leads: Classifica com critérios predefinidos",
        "Agendamento de Reuniões: Marca reuniões quando há interesse"
      ],
      example: {
        bot: "Oi, aqui é a Bia da AYTT! Como posso te ajudar? 😄",
        user: "Oi, como funciona a alocação de times de IA de vocês?",
        response: "Ótima pergunta! Nós montamos um time completo para a sua empresa!"
      },
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "ATENDIMENTO PRÉ E PÓS-VENDA",
      features: [
        "Atendimento 24/7: Responde perguntas básicas sempre",
        "Esclarecimento de Dúvidas: Produtos e serviços de forma clara",
        "Pesquisa de Satisfação: Coleta feedback para insights"
      ],
      icon: <Headphones className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "TRIAGEM DE CURRÍCULOS",
      features: [
        "Extração automática de dados: Captura informações (PDF, imagem)",
        "Classificação de aderência: Avalia compatibilidade currículo-vaga",
        "Priorização de perfis: Ordena candidatos mais alinhados"
      ],
      icon: <FileSearch className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "LEITURA DE DOCUMENTOS",
      features: [
        "Boletos: Extração de dados, classificação de contas, padronização",
        "Notas Fiscais: Captura informações, categorização, padronização",
        "Pedidos por Imagem: Reconhece documentos manuscritos, extrai dados, valida"
      ],
      icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "ATENDIMENTO MÍDIAS SOCIAIS",
      features: [
        "Responde comentário de posts",
        "Atendimento em DMs",
        "Esclarecimento de dúvidas de produtos"
      ],
      icon: <Instagram className="h-6 w-6 sm:h-8 sm:w-8" />
    }
  ]

  const additionalServices = [
    {
      title: "CONSULTORIA SOB DEMANDA",
      services: [
        "Arquitetura de Soluções com IA: Apoio técnico na construção com IA e N8N, foco em eficiência e escalabilidade",
        "Orientação Estratégica Personalizada: Discussão de casos reais e orientação sob medida"
      ],
      icon: <Building className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "TREINAMENTOS CUSTOMIZADOS",
      services: [
        "Treinamentos In Company: Formações práticas adaptadas à realidade da equipe",
        "Workshops Sob Demanda: Formações exclusivas com foco em aplicação imediata"
      ],
      icon: <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
    }
  ]

  const readyChecklist = [
    { icon: <Repeat className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Tem processos repetitivos que consomem tempo da equipe" },
    { icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Sabe que precisa de IA, mas não sabe por onde começar" },
    { icon: <Gauge className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Perde oportunidades por lentidão operacional" },
    { icon: <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6" />, text: "Se frustrou com projetos de tecnologia" },
  ]

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black pointer-events-none"></div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-2 sm:py-4" : "py-4 sm:py-6"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg sm:text-xl">AYTT</span>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm hidden sm:inline">Assemble Your Tech Team</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["home", "urgency", "philosophy", "founders", "solutions", "team", "challenge", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-blue-400 ${activeSection === item ? "text-blue-400" : "text-gray-300"}`}
              >
                {item === "home" ? "Início" : 
                 item === "urgency" ? "Urgência" :
                 item === "philosophy" ? "Filosofia" :
                 item === "founders" ? "Fundadores" :
                 item === "solutions" ? "Soluções" :
                 item === "team" ? "Time" :
                 item === "challenge" ? "Desafio" :
                 item === "contact" ? "Contato" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.me/5543999108255"
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm"
            >
              WhatsApp
            </Link>
          </div>

          <button className="lg:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/95 backdrop-blur-md pt-20 sm:pt-24 transition-transform duration-300 ease-in-out">
          <nav className="container mx-auto px-4 sm:px-6 flex flex-col space-y-6 sm:space-y-8 py-6 sm:py-8">
            {["home", "urgency", "philosophy", "founders", "solutions", "team", "challenge", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-lg sm:text-xl font-medium border-b border-gray-800 pb-3 sm:pb-4 flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item === "home" ? "Início" : 
                       item === "urgency" ? "Urgência" :
                       item === "philosophy" ? "Filosofia" :
                       item === "founders" ? "Fundadores" :
                       item === "solutions" ? "Soluções" :
                       item === "team" ? "Time" :
                       item === "challenge" ? "Desafio" :
                       item === "contact" ? "Contato" : item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <ChevronRight className="h-5 w-5 text-blue-400" />
              </Link>
            ))}
            <Link
              href="https://wa.me/5543999108255"
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full font-medium text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Cansado de Projetos de IA que{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Não Saem do Papel?
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
              <strong>Se você já investiu meses em um projeto de IA e...</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-red-900/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-red-500/20"
                >
                  <div className="flex items-start">
                    <div className="text-red-400 mr-3 mt-1 flex-shrink-0">
                      {point.icon}
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-red-400 px-4">
              Essas situações te soam familiares?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="https://wa.me/5543999108255?text=Olá! Sou diretor/dono de empresa e gostaria de saber como a AYTT pode ajudar a automatizar nossos processos com IA. Podemos agendar uma conversa?"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center text-sm sm:text-base"
              >
                💬 Quero Reduzir Custos com IA
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section id="urgency" ref={urgencyRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-black via-blue-900/10 to-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              O Mercado Está{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Mudando Rápido
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl px-4">
              A IA deixou de ser tendência. Agora é uma <strong>decisão estratégica</strong>. Se você sente que...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {urgencyIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20 text-center"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {indicator.icon}
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{indicator.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Então é o momento de você conhecer a{" "}
              <span className="text-blue-400">AYTT</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" ref={philosophyRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-gray-900/30 via-gray-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 italic px-4">
              "A AYTT nasceu de uma convicção simples: a tecnologia deveria{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                simplificar, não complicar.
              </span>"
            </blockquote>

            <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Não vendemos soluções mágicas. Oferecemos pessoas qualificadas, processos claros e comunicação honesta. 
                Porque inovação de verdade acontece quando há confiança mútua e expectativas alinhadas.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Enquanto o mercado fala em revolução, nós falamos em evolução. Construímos mudanças sustentáveis, 
                respeitando o ritmo e a cultura de cada empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" ref={foundersRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Founders{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Multidisciplinares
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg bg-gray-300">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-blue-400 font-medium text-sm sm:text-base">{founder.role}</p>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 animate-fadeInUp delay-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Experiência</h3>
            <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Nossos fundadores têm experiência em consultoria e serviços tecnológicos para empresas consolidadas no mercado:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {companyLogos.slice(0, 12).map((logo, index) => (
                <div key={index} className="bg-white rounded-lg p-2 sm:p-4 text-center border border-white/10 shadow-md h-16 sm:h-20 md:h-24 flex items-center justify-center">
                  <div className="text-gray-800 text-xs sm:text-sm font-bold text-center">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" ref={solutionsRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-blue-900/30 via-gray-900/40 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Como Entregamos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Soluções
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-4">Alocação de Times de Desenvolvimento de Soluções de IA</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {solutionDifferentials.map((differential, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-500/20 text-center animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-2 sm:p-3 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {differential.icon}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">{differential.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-3xl p-6 sm:p-8 animate-fadeInUp delay-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">
              Vantagem Competitiva
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Soluções personalizadas para o seu negócio, sem escopo engessado
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-black via-gray-900/30 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Time{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Completo
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{role.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base">{role.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {role.responsibilities.map((responsibility, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-xs sm:text-sm">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" ref={challengeRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-blue-900/20 via-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              O Grande Desafio dos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Projetos de IA
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
              Projetos de IA exigem muito mais do que desenvolvimento de software comum
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 mb-8 sm:mb-12 animate-fadeInUp">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Eles envolvem elementos com output probabilístico (IA) e maior incerteza técnica. Ao projetar uma arquitetura 
                de solução com IA, é fundamental compreender as limitações e potencialidades para garantir desempenho, 
                escalabilidade e viabilidade financeira.
              </p>
              
              <div className="bg-red-900/20 rounded-xl p-4 sm:p-6 border border-red-500/20">
                <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-3 sm:mb-4">Problema Comum</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Tratar IA como um "componente mágico que resolve tudo" gera frustração, altos custos de processamento 
                  e resultados insatisfatórios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" ref={architectureRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Arquitetura Simples vs{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Robusta
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-red-900/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-red-500/20 animate-fadeInLeft">
              <div className="flex items-center mb-4 sm:mb-6">
                <XCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-400 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-red-400">Arquitetura Simples</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Modelo único para múltiplas tarefas",
                  "Sem separação de responsabilidades",
                  "Consumo excessivo de tokens",
                  "Difícil manutenção e escalabilidade",
                  "Baixa precisão em tarefas específicas"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-green-500/20 animate-fadeInRight">
              <div className="flex items-center mb-4 sm:mb-6">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">Arquitetura Robusta (AYTT)</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Agentes especializados para cada tarefa",
                  "Separação clara de responsabilidades",
                  "Consumo otimizado de tokens",
                  "Fácil manutenção e escalabilidade",
                  "Maior precisão em tarefas específicas"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Solutions Section */}
      <section id="practical" ref={practicalRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-black via-gray-900/30 to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Soluções Práticas com{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                IA
              </span>
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {practicalSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 animate-fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{solution.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Funcionalidades:</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-xs sm:text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {solution.example && (
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Exemplo de Conversa:</h4>
                      <div className="bg-black/40 rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3">
                        <div className="bg-blue-600 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                          <strong>Bot:</strong> {solution.example.bot}
                        </div>
                        <div className="bg-gray-600 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                          <strong>Usuário:</strong> {solution.example.user}
                        </div>
                        <div className="bg-blue-600 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                          <strong>Bot:</strong> {solution.example.response}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section id="additional" ref={additionalRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-blue-900/20 via-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Serviços{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Adicionais
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
              Além da solução, oferecemos o apoio necessário para que a IA funcione de verdade no seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.3 * index}s` }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{service.title}</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {service.services.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section id="ready" ref={readyRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Você Está Pronto{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Se...
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {readyChecklist.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-900/20 to-green-900/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-green-500/20 text-center animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-2 sm:p-3 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-3xl p-6 sm:p-8 animate-fadeInUp delay-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">
              A boa notícia?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Automatizar pode ser simples — se for feito do jeito certo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 sm:py-24 relative bg-gradient-to-b from-blue-900/30 via-blue-900/40 to-black/90">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para Automatizar com IA{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Sem Dor de Cabeça?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg px-4">
              Agende uma reunião conosco e implemente IA na prática, com um time que fala a língua do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 animate-fadeInLeft">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Entre em Contato</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Projeto de Automação
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="Conte-nos sobre seus processos que precisam ser automatizados..."
                  ></textarea>
                </div>

                <Link
                  href="https://wa.me/5543999108255?text=Olá! Gostaria de conversar sobre implementação de IA na minha empresa."
                  target="_blank"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base flex items-center justify-center"
                >
                  Enviar via WhatsApp
                </Link>
              </div>
            </div>

            <div className="animate-fadeInRight space-y-6 sm:space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Fale Conosco</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <p className="text-gray-400 mb-2 text-sm sm:text-base">WhatsApp</p>
                    <a
                      href="https://wa.me/5543999108255"
                      target="_blank"
                      className="text-base sm:text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      (43) 99910-8255
                    </a>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-2 text-sm sm:text-base">Instagram</p>
                    <a 
                      href="https://instagram.com/aytt.tech" 
                      target="_blank"
                      className="text-base sm:text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      @aytt.tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Você Está Pronto Quando:</h3>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Tem processos repetitivos consumindo tempo da equipe",
                    "Já pensou em IA mas não sabe por onde começar",
                    "Perde oportunidades por lentidão operacional",
                    "Se frustrou com consultorias que prometem mas não entregam",
                    "Quer resultado real ao invés de relatórios bonitos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-400 text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8 px-4">
              <Link
                href="https://wa.me/5543999108255"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center text-sm sm:text-base"
              >
                💬 Agendar Reunião Gratuita
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="https://instagram.com/aytt.tech"
                target="_blank"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center text-sm sm:text-base"
              >
                📱 Seguir no Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-gradient-to-b from-black/90 to-black border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-blue-400">AYTT</span>
                <span className="text-gray-400 text-xs sm:text-sm ml-2">Assemble Your Tech Team</span>
              </div>
            </div>

            <p className="text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Transformando complexidade em resultado. A tecnologia deveria simplificar, não complicar.
            </p>

            <div className="flex justify-center space-x-6 mb-6 sm:mb-8">
              <a href="https://instagram.com/aytt.tech" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://wa.me/5543999108255" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>

            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <p className="text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} AYTT - Assemble Your Tech Team. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Clareza • Transparência • Resultado
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}