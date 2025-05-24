"use client"

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
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const heroRef = useRef<HTMLElement>(null)
  const problemRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const showcaseRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
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
        { id: "problem", ref: problemRef },
        { id: "about", ref: aboutRef },
        { id: "features", ref: featuresRef },
        { id: "showcase", ref: showcaseRef },
        { id: "testimonials", ref: testimonialsRef },
        { id: "pricing", ref: pricingRef },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "João Silva",
      role: "Diretor de TI, MedTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content:
        "Tentamos 3 consultorias diferentes antes da AYTT. Todas prometiam, nenhuma entregava. Com a AYTT tivemos um squad dedicado que realmente funcionou.",
    },
    {
      name: "Maria Santos",
      role: "CEO, LogisticaPro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b85b4d6d?w=80&h=80&fit=crop&crop=face",
      content:
        "O diferencial foi ter pessoas que falam nossa língua. Não precisamos mais 'traduzir' entre técnico e negócio.",
    },
    {
      name: "Carlos Mendes",
      role: "Gerente Comercial, VendasCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content:
        "Finalmente conseguimos automatizar nosso atendimento. O SDR com IA está funcionando há 6 meses sem problema.",
    },
  ]

  const problems = [
    "Contratou uma empresa de IA e ela não entregou o que foi combinado",
    "A entrega demorou o dobro do tempo e não atendeu suas expectativas",
    "O escopo mudou 10 vezes e nada ficou claro",
    "Recebeu PowerPoints ao invés de soluções funcionando",
    "A comunicação foi um desastre total",
    "Ficou sem saber se o problema era técnico ou do negócio"
  ]

  const solutions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Squad com Papéis Definidos",
      description: "Líder Técnico, Gerente de Projetos e Especialistas. Cada um com responsabilidades claras.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Comunicação em Linguagem de Negócio",
      description: "Sem 'tech talk' confuso. Falamos sobre resultados, impacto e ROI do seu projeto.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Flexibilidade Total",
      description: "Sem escopo engessado. Adaptamos conforme sua necessidade e evolução do projeto.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Suporte Técnico Completo",
      description: "Do início ao fim, com acompanhamento dedicado e resolução proativa de problemas.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Resultado Mensurável",
      description: "IA que resolve problema real do seu negócio, não PowerPoint colorido na gaveta.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Bridge Técnico-Negócio",
      description: "Profissionais que entendem tanto de tecnologia quanto do seu setor e desafios.",
    },
  ]

  const plans = [
    {
      name: "Squad Essencial",
      description: "Para empresas que estão começando com IA",
      features: [
        "1 Líder Técnico",
        "1 Gerente de Projetos",
        "2-3 Especialistas em IA",
        "Suporte técnico dedicado",
        "Comunicação em linguagem de negócio",
        "Flexibilidade de escopo",
      ],
      cta: "Consultar Valores",
      popular: false,
    },
    {
      name: "Squad Pro",
      description: "Para empresas em crescimento",
      features: [
        "1 Líder Técnico Sênior",
        "1 Gerente de Projetos",
        "4-6 Especialistas",
        "Suporte prioritário",
        "Consultoria estratégica",
        "Integração com processos internos",
        "Acompanhamento semanal",
      ],
      cta: "Consultar Valores",
      popular: true,
    },
    {
      name: "Squad Enterprise",
      description: "Para grandes corporações",
      features: [
        "Squads completos personalizados",
        "Arquiteto de soluções dedicado",
        "Suporte 24/7",
        "Gerente de conta exclusivo",
        "Integração com metodologias internas",
        "Treinamento e mentoria",
        "Consultoria estratégica completa",
      ],
      cta: "Conversar com Especialista",
      popular: false,
    },
  ]

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black pointer-events-none"></div>

      {/* Animated Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadeIn"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
              onClick={() => setShowVideo(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Vídeo demonstrativo da AYTT</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "py-6"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="AYTT - Assemble Your Tech Team"
              width={150}
              height={60}
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {["home", "problem", "about", "features", "showcase", "testimonials", "pricing", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-blue-400 ${activeSection === item ? "text-blue-400" : "text-gray-300"}`}
              >
                {item === "problem" ? "Problemas" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.me/5543991923676"
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
            {["home", "problem", "about", "features", "showcase", "testimonials", "pricing", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-xl font-medium border-b border-gray-800 pb-4 flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item === "problem" ? "Problemas" : item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <ChevronRight className="h-5 w-5 text-blue-400" />
              </Link>
            ))}
            <Link
              href="https://wa.me/5543991923676"
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
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeIn delay-300">
              <span className="bg-blue-500 h-2 w-2 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Squads especializados em IA e Automação</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeInUp delay-500">
              Automatize Seu Negócio com{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                IA Sem Dor de Cabeça
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-4xl mx-auto animate-fadeInUp delay-700">
              Na AYTT, você contrata capacidade técnica e recebe clareza de resultado.<br />
              <strong>Sem escopo engessado. Sem zona cinzenta.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-900">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                Montar Meu Squad
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/5543991923676"
                target="_blank"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Explore Mais</p>
            <div className="flex justify-center">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" ref={problemRef} className="py-24 relative bg-gradient-to-b from-black via-red-900/10 to-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
              Cansado de Projetos de IA que{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Não Saem do Papel?
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              <strong>Se você já passou por isso:</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-red-900/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-8 animate-fadeInUp delay-800">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                O problema não é a IA.
              </span>
            </h3>
            <p className="text-xl text-gray-300">
              É como ela está sendo vendida para você.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 relative bg-gradient-to-b from-gray-900/30 via-gray-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A AYTT Resolve de{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                um Jeito Diferente
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Enquanto consultoria entrega conselho, <strong>a AYTT entrega resultado.</strong><br />
              Nosso modelo é simples: alocamos squads de automação com IA com papéis definidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-3xl p-8 md:p-12 border border-white/10 animate-fadeInUp delay-800">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Composição do Nosso{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Squad</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Líder Técnico</h4>
                  <p className="text-gray-400">Bridge entre técnico e negócio</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Gerente de Projetos</h4>
                  <p className="text-gray-400">Clareza na entrega e comunicação</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Especialistas</h4>
                  <p className="text-gray-400">Desenvolvimento e implementação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Comparativo */}
      <section id="features" ref={featuresRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/40 to-blue-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por Que{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Alocação
              </span>{" "}
              ao Invés de Consultoria?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fadeInUp">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-lg font-semibold text-gray-300">Aspecto</th>
                      <th className="pb-4 text-lg font-semibold text-red-400">Consultoria Tradicional</th>
                      <th className="pb-4 text-lg font-semibold text-blue-400">Alocação AYTT</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-4 font-medium">Escopo</td>
                      <td className="py-4">Fechado e rígido</td>
                      <td className="py-4 text-green-400">Flexibilidade para adaptar</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 font-medium">Entrega</td>
                      <td className="py-4">Relatórios e PowerPoints</td>
                      <td className="py-4 text-green-400">Soluções funcionando</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 font-medium">Cobrança</td>
                      <td className="py-4">Por hora trabalhada</td>
                      <td className="py-4 text-green-400">Por resultado entregue</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 font-medium">Equipe</td>
                      <td className="py-4">Consultor generalista</td>
                      <td className="py-4 text-green-400">Squad com papéis definidos</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium">Comunicação</td>
                      <td className="py-4">Técnica e confusa</td>
                      <td className="py-4 text-green-400">Linguagem de negócio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Exemplos */}
      <section id="showcase" ref={showcaseRef} className="py-24 relative bg-gradient-to-b from-blue-900/30 via-gray-900/40 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exemplos de IA que{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Realmente Funcionam
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "SDR Inteligente",
                description: "Primeiro atendimento que qualifica leads de verdade",
                icon: <MessageCircle className="h-8 w-8" />
              },
              {
                title: "Triagem de CVs",
                description: "Encontre candidatos certos em minutos",
                icon: <Users className="h-8 w-8" />
              },
              {
                title: "Análise de Dados",
                description: "Decisões baseadas em insights reais",
                icon: <BarChart3 className="h-8 w-8" />
              },
              {
                title: "Assistentes de Trabalho",
                description: "Automatize tarefas burocráticas",
                icon: <Zap className="h-8 w-8" />
              },
              {
                title: "Criação de Conteúdo",
                description: "Materiais relevantes em escala",
                icon: <Sparkles className="h-8 w-8" />
              },
              {
                title: "Automação de Processos",
                description: "Fluxos inteligentes de trabalho",
                icon: <Brain className="h-8 w-8" />
              }
            ].map((example, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-6">
                  {example.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                <p className="text-gray-400">{example.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900/60 via-black/80 to-blue-900/40 rounded-3xl p-8 md:p-12 border border-white/20 animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-8 text-center">Arquiteturas que Desenvolvemos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Arquitetura Simples</h4>
                <p className="text-gray-300">WhatsApp → IA → Google Calendar</p>
                <p className="text-sm text-gray-400 mt-2">Para agendamentos e interações básicas</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Arquitetura Robusta</h4>
                <p className="text-gray-300">Fluxos complexos com múltiplas integrações</p>
                <p className="text-sm text-gray-400 mt-2">Para decisões avançadas e automações completas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/30 to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que Nossos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Clientes</span>{" "}
              Dizem
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Empresas que superaram as frustrações com projetos de IA e agora têm automações funcionando.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto animate-fadeIn">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 -m-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-md"></div>
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="rounded-full relative z-10 border-2 border-white object-cover"
                    />
                  </div>

                  <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div>
                    <p className="text-lg font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index ? "bg-blue-500 w-8" : "bg-gray-600"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center animate-fadeInUp">
            <p className="text-gray-300 mb-4">
              Já trabalhamos com empresas como <strong>4Intelligence, OI, Frimesa, XCMG, SICOOB, Inatel</strong> e muitas outras.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-24 relative bg-gradient-to-b from-blue-900/20 via-gray-900/30 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Flexíveis
              </span>{" "}
              para Seu Negócio
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Cada empresa tem necessidades diferentes. Vamos conversar sobre seu projeto específico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all animate-fadeInUp ${
                  plan.popular ? "border-blue-500 relative shadow-xl shadow-blue-500/20" : "border-white/10"
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-2xl font-bold text-gray-400 mb-2">Sob Consulta</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 relative bg-gradient-to-b from-black via-gray-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Automatizar{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Sem Enrolação?</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Se você quer IA que funciona de verdade - não PowerPoint colorido - vamos conversar.<br />
              <strong>Nossa promessa é simples:</strong> você terá um squad dedicado que entende seu negócio.
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
                      href="https://wa.me/5543991923676"
                      target="_blank"
                      className="text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                      (43) 99192-3676
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-b from-blue-900/20 via-blue-900/30 to-black/90">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Está Pronto para Automatizar{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Sem Dor de Cabeça?</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              IA na prática, com gente que fala sua língua.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5543991923676"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center"
              >
                Agendar Reunião
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-black/90 to-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <Image
                  src="/logo.png"
                  alt="AYTT - Assemble Your Tech Team"
                  width={150}
                  height={60}
                  className="h-10 w-auto"
                />
              </div>

              <p className="text-gray-400 mb-6">
                Traduzindo a complexidade da IA em soluções claras e aplicáveis para empresas.
              </p>

              <div className="flex space-x-4">
                <a href="https://instagram.com/aytt.tech" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://wa.me/5543991923676" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Serviços</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-gray-400">Alocação de Squads IA</span>
                </li>
                <li>
                  <span className="text-gray-400">Automação de Processos</span>
                </li>
                <li>
                  <span className="text-gray-400">SDR Inteligente</span>
                </li>
                <li>
                  <span className="text-gray-400">Consultoria em IA</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Soluções</h3>
              <ul className="space-y-4">
                <li>
                  <span className="text-gray-400">Chatbots Inteligentes</span>
                </li>
                <li>
                  <span className="text-gray-400">Análise de Dados</span>
                </li>
                <li>
                  <span className="text-gray-400">Automação Comercial</span>
                </li>
                <li>
                  <span className="text-gray-400">Integração de Sistemas</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/5543991923676" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                    WhatsApp: (43) 99192-3676
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/aytt.tech" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Instagram: @aytt.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AYTT - Assemble Your Tech Team. Todos os direitos reservados.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">
                Clareza • Transparência • Resultado
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}