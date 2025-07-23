import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export function TermoConsentimento() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md border-b border-white/20 py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Voltar ao Site</span>
            </Link>

            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">LGPD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Termo de{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Consentimento
              </span>
            </h1>
            <p className="text-gray-300 text-lg">SORAI TECNOLOGIA LTDA</p>
            <p className="text-gray-400 text-sm mt-2">Lei Geral de Proteção de Dados - LGPD</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-8">
            
            {/* Consentimento Principal */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">CADASTRO</h2>
              <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>AUTORIZO</strong> a <strong>SORAI TECNOLOGIA LTDA</strong> a realizar a <strong>COLETA</strong> e 
                  <strong> TRATAMENTO</strong> dos meus DADOS PESSOAIS que se façam necessários para a <strong>FINALIDADE ESPECÍFICA</strong> de 
                  possibilitar minha participação no site institucional e na plataforma.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Estou ciente de que os DADOS PESSOAIS incluem informações como nome e endereço eletrônico.
                </p>
              </div>
            </section>

            {/* Finalidade da Coleta */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">FINALIDADE DA COLETA DOS DADOS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Os dados coletados terão por finalidade:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
                <li>Identificação, autenticação e comunicação com titular</li>
                <li>Envio de notificações, comunicados e conteúdos personalizados promovidos pela empresa e campanhas publicitárias para divulgação de novos produtos e serviços, de forma ética</li>
                <li>Mapeamento da atuação dos usuários para identificação de perfis de engajamento, potencializando o contato</li>
                <li>Utilização de dados para criação de público segmentado, apoio para decisões estratégicas e interação durante possíveis eventos presenciais</li>
                <li>Caso a relação assim evolua, possibilidade de envio de propostas comerciais e realizar negociações, tais como ações comerciais, marketing e venda direta</li>
              </ul>
            </section>

            {/* Política de Privacidade */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Informações Complementares</h2>
              <p className="text-gray-300 leading-relaxed">
                Para maiores informações sobre como tratamos, compartilhamos, armazenamos e protegemos os seus dados pessoais, 
                basta acessar nossa Política de Privacidade.
              </p>
            </section>

            {/* Direitos do Titular */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Seus Direitos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você poderá a qualquer momento entrar em contato com o(a) Encarregado(a) para exercer os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Solicitar a revogação e eliminação dos dados tratados com base neste consentimento</li>
                <li>Confirmar a existência e acessar os dados</li>
                <li>Solicitar a atualização ou correção dos dados</li>
                <li>Solicitar informações sobre uso compartilhado de dados</li>
              </ul>
            </section>

            {/* Dados da Empresa e Encarregado */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Contato</h2>
              <div className="space-y-6">
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-white">Controlador</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>SORAI TECNOLOGIA LTDA</strong></p>
                    <p>CNPJ: 54.686.825/0001-30</p>
                    <p>Endereço: Rua André Saraiva, nº 129, bairro Vila Sônia</p>
                    <p>CEP: 05626-000 - São Paulo, SP</p>
                    <p>Representada por: Guilherme Mitsuo Yabushita Nakama</p>
                    <p>CPF: 374.422.858-48</p>
                  </div>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-white">Encarregado de Proteção de Dados</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>GUILHERME MITSUO YABUSHITA NAKAMA</strong></p>
                    <p>CPF: 374.422.858-48</p>
                    <p>E-mail: <strong>guilhermenakama@sorai.net.br</strong></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Aplicação */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Aplicação</h2>
              <p className="text-gray-300 leading-relaxed">
                Os tipos de dados que serão coletados, utilizados e compartilhados, conforme descrito nesta Política de Privacidade, 
                nos termos aqui dispostos, bem como nos termos do artigo 7°, inciso I da Lei 13.709/2018, haverá o consentimento 
                deste para com o tratamento e processamento das informações.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                A leitura desta Política é essencial para a utilização consciente dos serviços disponibilizados em nosso website.
              </p>
            </section>

            {/* Consentimento final */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Declaração de Consentimento</h2>
              <div className="bg-gradient-to-r from-green-900/20 to-green-900/20 rounded-xl p-6 border border-green-500/20">
                <p className="text-gray-300 leading-relaxed">
                  <strong>Ao utilizar nossos serviços, você declara que:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                  <li>Leu e compreendeu este Termo de Consentimento</li>
                  <li>Concorda com o tratamento dos seus dados conforme descrito</li>
                  <li>Tem conhecimento dos seus direitos como titular de dados</li>
                  <li>Sabe como exercer esses direitos</li>
                  <li>Consente livre, informada e inequivocamente com o tratamento de seus dados pessoais nos termos da Lei 13.709/2018</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Footer da página */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">SORAI TECNOLOGIA LTDA | CNPJ: 54.686.825/0001-30 | São Paulo, SP</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Site Principal
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}