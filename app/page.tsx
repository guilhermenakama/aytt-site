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
  Zap as ZapIcon,
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
    { icon: <FileText className="h-6 w-6" />, text: "A empresa não entregou o que foi combinado" },
    { icon: <Clock className="h-6 w-6" />, text: "A entrega demorou mais do que o previsto" },
    { icon: <TrendingUp className="h-6 w-6" />, text: "O resultado final não atende às expectativas" },
    { icon: <Shuffle className="h-6 w-6" />, text: "O escopo mudou várias vezes e nada ficou claro" },
    { icon: <MessageCircle className="h-6 w-6" />, text: "A comunicação foi falha e sem alinhamento com o negócio" },
    { icon: <DollarSign className="h-6 w-6" />, text: "No fim, é você quem precisa lidar com o prejuízo" },
  ]

  const urgencyIndicators = [
    { icon: <TrendingDown className="h-8 w-8" />, text: "Suas margens estão sendo pressionadas pela concorrência" },
    { icon: <Clock className="h-8 w-8" />, text: "Cada mês sem automação é dinheiro perdido" },
    { icon: <AlertTriangle className="h-8 w-8" />, text: "Processos manuais limitam seu crescimento" },
    { icon: <Target className="h-8 w-8" />, text: "Quem automatizar primeiro domina o mercado" },
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
    { icon: <Users className="h-8 w-8" />, text: "Time composto por papéis definidos" },
    { icon: <Target className="h-8 w-8" />, text: "Foco total em eficiência na alocação de talentos" },
    { icon: <BarChart3 className="h-8 w-8" />, text: "Contrato baseado em perfis, não em escopos fechados" },
    { icon: <Settings className="h-8 w-8" />, text: "Consultoria e apoio técnico do início ao fim" },
    { icon: <Headphones className="h-8 w-8" />, text: "Suporte contínuo durante todo projeto" },
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
      icon: <Brain className="h-12 w-12" />
    },
    {
      title: "GERENTE DE PROJETOS",
      description: "Coordena prazos, orçamento e comunicação cliente-equipe",
      responsibilities: [
        "Gestão de Cronogramas: Planeja e monitora entregas",
        "Comunicação Estratégica: Coordena alinhamento",
        "Controle de Recursos: Gerencia riscos e qualidade"
      ],
      icon: <Target className="h-12 w-12" />
    },
    {
      title: "CONSULTOR TECH",
      description: "Traduz objetivos do negócio em soluções práticas com IA",
      responsibilities: [
        "Explora Oportunidades: Identifica onde IA pode gerar valor",
        "Definição de Soluções: Define soluções viáveis e alinhadas",
        "Validação Estratégica: Valida impacto e escopo"
      ],
      icon: <Lightbulb className="h-12 w-12" />
    },
    {
      title: "TÉCNICO",
      description: "Executa implementação prática das soluções de IA",
      responsibilities: [
        "Desenvolvimento: Implementa automações e modelos de IA",
        "Integração de Sistemas: Conecta novas tecnologias",
        "Deploy e Manutenção: Realiza deploy e garante funcionamento"
      ],
      icon: <Code className="h-12 w-12" />
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
      icon: <MessageSquare className="h-8 w-8" />
    },
    {
      title: "ATENDIMENTO PRÉ E PÓS-VENDA",
      features: [
        "Atendimento 24/7: Responde perguntas básicas sempre",
        "Esclarecimento de Dúvidas: Produtos e serviços de forma clara",
        "Pesquisa de Satisfação: Coleta feedback para insights"
      ],
      icon: <Headphones className="h-8 w-8" />
    },
    {
      title: "TRIAGEM DE CURRÍCULOS",
      features: [
        "Extração automática de dados: Captura informações (PDF, imagem)",
        "Classificação de aderência: Avalia compatibilidade currículo-vaga",
        "Priorização de perfis: Ordena candidatos mais alinhados"
      ],
      icon: <FileSearch className="h-8 w-8" />
    },
    {
      title: "LEITURA DE DOCUMENTOS",
      features: [
        "Boletos: Extração de dados, classificação de contas, padronização",
        "Notas Fiscais: Captura informações, categorização, padronização",
        "Pedidos por Imagem: Reconhece documentos manuscritos, extrai dados, valida"
      ],
      icon: <FileText className="h-8 w-8" />
    },
    {
      title: "ATENDIMENTO MÍDIAS SOCIAIS",
      features: [
        "Responde comentário de posts",
        "Atendimento em DMs",
        "Esclarecimento de dúvidas de produtos"
      ],
      icon: <Instagram className="h-8 w-8" />
    }
  ]

  const additionalServices = [
    {
      title: "CONSULTORIA SOB DEMANDA",
      services: [
        "Arquitetura de Soluções com IA: Apoio técnico na construção com IA e N8N, foco em eficiência e escalabilidade",
        "Orientação Estratégica Personalizada: Discussão de casos reais e orientação sob medida"
      ],
      icon: <Building className="h-8 w-8" />
    },
    {
      title: "TREINAMENTOS CUSTOMIZADOS",
      services: [
        "Treinamentos In Company: Formações práticas adaptadas à realidade da equipe",
        "Workshops Sob Demanda: Formações exclusivas com foco em aplicação imediata"
      ],
      icon: <GraduationCap className="h-8 w-8" />
    }
  ]

  const readyChecklist = [
    { icon: <Repeat className="h-6 w-6" />, text: "Tem processos repetitivos que consomem tempo da equipe" },
    { icon: <Brain className="h-6 w-6" />, text: "Sabe que precisa de IA, mas não sabe por onde começar" },
    { icon: <Gauge className="h-6 w-6" />, text: "Perde oportunidades por lentidão operacional" },
    { icon: <TrendingDown className="h-6 w-6" />, text: "Se frustrou com projetos de tecnologia" },
  ]

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black pointer-events-none"></div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "py-6"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/logos/aytt.png"
                alt="Logo AYTT"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-gray-400 text-sm hidden sm:inline">Assemble Your Tech Team</span>
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
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
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
        <div className="fixed inset-0 z-30 lg:hidden bg-black/95 backdrop-blur-md pt-24 animate-slideInRight">
          <nav className="container mx-auto px-6 flex flex-col space-y-8 py-8">
            {["home", "urgency", "philosophy", "founders", "solutions", "team", "challenge", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-xl font-medium border-b border-gray-800 pb-4 flex justify-between items-center"
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
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp delay-500">
              Cansado de Projetos de IA que{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Não Saem do Papel?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fadeInUp delay-700">
              <strong>Se você já investiu meses em um projeto de IA e...</strong>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-red-900/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 animate-fadeInUp"
                  style={{ animationDelay: `${0.7 + 0.1 * index}s` }}
                >
                  <div className="flex items-start">
                    <div className="text-red-400 mr-3 mt-1 flex-shrink-0">
                      {point.icon}
                    </div>
                    <p className="text-gray-300 text-sm">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-semibold mb-8 text-red-400 animate-fadeInUp delay-1200">
              Essas situações te soam familiares?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-900">
              <Link
                href="https://wa.me/5543999108255?text=Olá! Sou diretor/dono de empresa e gostaria de saber como a AYTT pode ajudar a automatizar nossos processos com IA. Podemos agendar uma conversa?"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                💬 Quero Reduzir Custos com IA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section id="urgency" ref={urgencyRef} className="py-24 relative bg-gradient-to-b from-black via-blue-900/10 to-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O Mercado Está{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Mudando Rápido
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl">
              A IA deixou de ser tendência. Agora é uma <strong>decisão estratégica</strong>. Se você sente que...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {urgencyIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {indicator.icon}
                </div>
                <p className="text-gray-300">{indicator.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-8 animate-fadeInUp delay-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Então é o momento de você conhecer a{" "}
              <Image
                src="/public/aytt.png"
                alt="AYTT"
                width={100}
                height={40}
                className="inline-block align-middle"
              />
            </h3>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" ref={philosophyRef} className="py-24 relative bg-gradient-to-b from-gray-900/30 via-gray-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <blockquote className="text-2xl md:text-3xl font-bold mb-12 italic">
              "A AYTT nasceu de uma convicção simples: a tecnologia deveria{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                simplificar, não complicar.
              </span>"
            </blockquote>

            <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 animate-fadeInUp delay-300">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Não vendemos soluções mágicas. Oferecemos pessoas qualificadas, processos claros e comunicação honesta. 
                Porque inovação de verdade acontece quando há confiança mútua e expectativas alinhadas.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Enquanto o mercado fala em revolução, nós falamos em evolução. Construímos mudanças sustentáveis, 
                respeitando o ritmo e a cultura de cada empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" ref={foundersRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Founders{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Multidisciplinares
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
                    <Image
                      src={founder.image}
                      alt={`Foto de ${founder.name}`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-blue-400 font-medium">{founder.role}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-white/10 animate-fadeInUp delay-800">
            <h3 className="text-2xl font-bold mb-8 text-center">Experiência</h3>
            <p className="text-center text-gray-300 mb-8">
              Nossos fundadores têm experiência em consultoria e serviços tecnológicos para empresas consolidadas no mercado:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {companyLogos.map((logo, index) => (
                <div className="bg-white rounded-lg p-4 text-center border border-white/10 shadow-md h-[100px] flex items-center justify-center">
                  <Image
                    src={`/logos/${logo.file}`}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" ref={solutionsRef} className="py-24 relative bg-gradient-to-b from-blue-900/30 via-gray-900/40 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como Entregamos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Soluções
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">Alocação de Times de Desenvolvimento de Soluções de IA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {solutionDifferentials.map((differential, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 text-center animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  {differential.icon}
                </div>
                <p className="text-gray-300 text-sm">{differential.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-3xl p-8 animate-fadeInUp delay-800">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Vantagem Competitiva
            </h3>
            <p className="text-xl text-gray-300">
              Soluções personalizadas para o seu negócio, sem escopo engessado
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/30 to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Time{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Completo
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 mr-4 flex-shrink-0">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                    <p className="text-gray-400 mb-4">{role.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {role.responsibilities.map((responsibility, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" ref={challengeRef} className="py-24 relative bg-gradient-to-b from-blue-900/20 via-gray-900/30 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O Grande Desafio dos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Projetos de IA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Projetos de IA exigem muito mais do que desenvolvimento de software comum
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12 animate-fadeInUp">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Eles envolvem elementos com output probabilístico (IA) e maior incerteza técnica. Ao projetar uma arquitetura 
                de solução com IA, é fundamental compreender as limitações e potencialidades para garantir desempenho, 
                escalabilidade e viabilidade financeira.
              </p>
              
              <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4">Problema Comum</h3>
                <p className="text-gray-300">
                  Tratar IA como um "componente mágico que resolve tudo" gera frustração, altos custos de processamento 
                  e resultados insatisfatórios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" ref={architectureRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arquitetura Simples vs{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Robusta
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-900/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 animate-fadeInLeft">
              <div className="flex items-center mb-6">
                <XCircle className="h-8 w-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-red-400">Arquitetura Simples</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Modelo único para múltiplas tarefas",
                  "Sem separação de responsabilidades",
                  "Consumo excessivo de tokens",
                  "Difícil manutenção e escalabilidade",
                  "Baixa precisão em tarefas específicas"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 animate-fadeInRight">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-green-400">Arquitetura Robusta (AYTT)</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Agentes especializados para cada tarefa",
                  "Separação clara de responsabilidades",
                  "Consumo otimizado de tokens",
                  "Fácil manutenção e escalabilidade",
                  "Maior precisão em tarefas específicas"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Solutions Section */}
      <section id="practical" ref={practicalRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/30 to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Soluções Práticas com{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                IA
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {practicalSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fadeInUp"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-blue-400">Funcionalidades:</h4>
                    <div className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {solution.example && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">Exemplo de Conversa:</h4>
                      <div className="bg-black/40 rounded-xl p-4 space-y-3">
                        <div className="bg-blue-600 rounded-lg p-3 text-sm">
                          <strong>Bot:</strong> {solution.example.bot}
                        </div>
                        <div className="bg-gray-600 rounded-lg p-3 text-sm">
                          <strong>Usuário:</strong> {solution.example.user}
                        </div>
                        <div className="bg-blue-600 rounded-lg p-3 text-sm">
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
      <section id="additional" ref={additionalRef} className="py-24 relative bg-gradient-to-b from-blue-900/20 via-gray-900/30 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serviços{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Adicionais
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Além da solução, oferecemos o apoio necessário para que a IA funcione de verdade no seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.3 * index}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {service.services.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section id="ready" ref={readyRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Você Está Pronto{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Se...
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {readyChecklist.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-900/20 to-green-900/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 text-center animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-3xl p-8 animate-fadeInUp delay-800">
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              A boa notícia?
            </h3>
            <p className="text-xl text-gray-300">
              Automatizar pode ser simples — se for feito do jeito certo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 relative bg-gradient-to-b from-blue-900/30 via-blue-900/40 to-black/90">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Automatizar com IA{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Sem Dor de Cabeça?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Agende uma reunião conosco e implemente IA na prática, com um time que fala a língua do seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-fadeInLeft">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Projeto de Automação
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Conte-nos sobre seus processos que precisam ser automatizados..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="animate-fadeInRight">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 mb-2">WhatsApp</p>
                    <a
                      href="https://wa.me/5543999108255"
                      target="_blank"
                      className="text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      (43) 99910-8255
                    </a>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-2">Instagram</p>
                    <a 
                      href="https://instagram.com/aytt.tech" 
                      target="_blank"
                      className="text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      @aytt.tech
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Você Está Pronto Quando:</h3>

                <div className="space-y-4">
                  {[
                    "Tem processos repetitivos consumindo tempo da equipe",
                    "Já pensou em IA mas não sabe por onde começar",
                    "Perde oportunidades por lentidão operacional",
                    "Se frustrou com consultorias que prometem mas não entregam",
                    "Quer resultado real ao invés de relatórios bonitos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="https://wa.me/5543999108255"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                💬 Agendar Reunião Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="https://instagram.com/aytt.tech"
                target="_blank"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center"
              >
                📱 Seguir no Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-black/90 to-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">AYTT</span>
                <span className="text-gray-400 text-sm ml-2">Assemble Your Tech Team</span>
              </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transformando complexidade em resultado. A tecnologia deveria simplificar, não complicar.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://instagram.com/aytt.tech" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/5543999108255" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} AYTT - Assemble Your Tech Team. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Clareza • Transparência • Resultado
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente Scale que estava faltando
function Scale({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  )
}

// Componente User que estava faltando
function User({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

