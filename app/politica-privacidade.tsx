import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function PoliticaPrivacidade() {
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
              Política de{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Privacidade
              </span>
            </h1>
            <p className="text-gray-300 text-lg">SORAI TECNOLOGIA LTDA</p>
            <p className="text-gray-400 text-sm mt-2">Última atualização: julho de 2025</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-8">
            
            {/* Introdução */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Introdução</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A presente Política de Privacidade da <strong>SORAI TECNOLOGIA LTDA</strong>, inscrita no 
                CNPJ 54.686.825/0001-30, com sede à Rua André Saraiva, nº 129, bairro Vila Sônia, 
                CEP: 05626-000, na cidade de São Paulo, no Estado de São Paulo tem com este, o objetivo 
                e o compromisso da empresa em realizar o tratamento de dados pessoais de nossos clientes 
                e/ou clientes prospectos ("Usuários") com a devida privacidade, segurança e, principalmente, transparência.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Este documento descreve quais dados a SORAI TECNOLOGIA LTDA coleta, quais suas finalidades, 
                como armazena, como os trata e eventualmente compartilha, regidos e norteados pela legislação 
                vigente, nos termos da Lei n° 13.709, de 14 de agosto de 2018.
              </p>
            </section>

            {/* Definições */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Conceitos Básicos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Controlador:</h3>
                  <p className="text-gray-300">SORAI TECNOLOGIA LTDA, inscrita no CNPJ 54.686.825/0001-30, 
                  representada por Guilherme Mitsuo Yabushita Nakama, CPF nº 374.422.858-48.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Encarregado:</h3>
                  <p className="text-gray-300">GUILHERME MITSUO YABUSHITA NAKAMA, CPF nº 374.422.858-48, 
                  com endereço eletrônico guilhermenakama@sorai.net.br.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Dados Pessoais:</h3>
                  <p className="text-gray-300">Toda e qualquer informação relacionada a você, como nome, 
                  RG, CPF, endereço, e-mail, telefone, celular, dados de conexão, perfil de acesso a sites, 
                  GPS, IP e demais identificadores eletrônicos.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Consentimento:</h3>
                  <p className="text-gray-300">Manifestação livre, informada e inequívoca, pela qual o 
                  titular concorda com o tratamento dos seus dados pessoais para uma finalidade determinada.</p>
                </div>
              </div>
            </section>

            {/* Aplicação */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Aplicação</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                O presente termo de Política de Privacidade se aplica a quaisquer usuários de nossos sites, 
                sejam estas pessoas físicas ou jurídicas, consumidores com identificação ou sem identificação, 
                ou que se cadastraram em algum momento para receber notícias, novidades, informações ou outros 
                comunicados, bem como para realizar um processo de compras e aquisições de produtos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                A política é válida para todos os sites da empresa, landing pages, formulários integrados, 
                redes sociais de terceiros, serviço de atendimento ao consumidor, aplicativos de mensagens 
                e qualquer outra forma de captura online de dados gerida direta ou indiretamente pela empresa.
              </p>
            </section>

            {/* Como coletamos */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Como Coletamos Seus Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As informações coletadas variam de acordo com os recursos usados em nossos sites e redes sociais. 
                De uma maneira geral, são coletadas informações (anônimas ou não) ao acessar os sites da empresa, 
                landing pages, ou ainda, quando há interação com algum de nossos perfis em redes sociais.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Para a coleta de dados, são usadas as seguintes tecnologias: <strong>Cookies</strong>, 
                <strong>Pixels</strong>, <strong>ferramentas de analytics</strong> e <strong>formulários de cadastros</strong>.
              </p>
            </section>

            {/* Quais dados */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Quais Dados Coletamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Dados de Navegação:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Páginas acessadas</li>
                    <li>Palavras pesquisadas</li>
                    <li>Número de vezes que houve retorno</li>
                    <li>Dispositivo usado</li>
                    <li>Endereço de IP</li>
                    <li>Informações demográficas (cidade/local de acesso, idade, profissão)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Dados de Contato:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Nome completo</li>
                    <li>E-mail</li>
                    <li>Empresa (Nome da sua empresa)</li>
                    <li>Informações sobre projeto de automação</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Dados Comerciais:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Forma de pagamento</li>
                    <li>Produtos e quantidades comprados</li>
                    <li>Valor de cada mercadoria</li>
                    <li>Valor total das aquisições</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Como usamos */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Como Usamos os Dados</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Finalidades Principais:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Processo de Matching e Alocação:</strong> Para conectar empresas demandantes 
                    com profissionais qualificados em IA/ML</li>
                    <li><strong>Gestão de Projetos:</strong> Para conduzir negociações, elaborar propostas 
                    comerciais e acompanhar desenvolvimento</li>
                    <li><strong>Avaliação de Competências:</strong> Para análise de skills, certificações 
                    e experiência em IA</li>
                    <li><strong>Comunicação e Atendimento:</strong> Para estabelecer contato direto e 
                    fornecer suporte técnico</li>
                    <li><strong>Melhoria Contínua:</strong> Para análise de performance e identificação 
                    de oportunidades</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Finalidades Secundárias (mediante consentimento):</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Marketing e comunicação direcionada</li>
                    <li>Divulgação de novas oportunidades</li>
                    <li>Convites para eventos e capacitações</li>
                    <li>Análise de dados e inteligência de mercado</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Base Legal:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Execução de contrato</li>
                    <li>Interesse legítimo</li>
                    <li>Consentimento</li>
                    <li>Cumprimento de obrigação legal</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compartilhamento */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Compartilhamento de Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A SORAI TECNOLOGIA LTDA compartilha seus dados com outras empresas apenas nos seguintes casos:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Compartilhamento com outras empresas do grupo SORAI TECNOLOGIA LTDA</li>
                <li>Produção de material em parcerias (e-books, materiais informativos)</li>
                <li>Ações promocionais da SORAI TECNOLOGIA LTDA e parceiros</li>
                <li>Plataformas de publicidade online (Facebook, Google) para anúncios personalizados</li>
                <li>Parceiros para realização de trabalhos (e-mail marketing, e-commerce, serviços financeiros)</li>
                <li>Determinação legal ou ordem judicial</li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">Transferência Internacional</h3>
                <p className="text-gray-300">A SORAI TECNOLOGIA LTDA utiliza infraestrutura em nuvem e 
                serviços de terceiros necessários para fornecer o serviço contratado, armazenando seus 
                dados fora do território nacional.</p>
              </div>
            </section>

            {/* Direitos */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Seus Direitos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Você possui os seguintes direitos previstos na Lei Geral de Proteção de Dados:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Direito à informação sobre uso compartilhado de dados</li>
                <li>Direito de confirmar a existência de tratamento e acesso aos dados</li>
                <li>Direito de retirar o consentimento</li>
                <li>Direito de oposição ao tratamento</li>
                <li>Direito de ser informado sobre consequências da negativa</li>
                <li>Direito da anonimização</li>
                <li>Direito de retificação de dados incorretos</li>
                <li>Direito de exclusão dos dados</li>
                <li>Direito à portabilidade dos dados</li>
              </ul>
            </section>

            {/* Alterações */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Alterações na Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Esta Política de Privacidade e Proteção de Dados Pessoais poderá ser alterada a qualquer 
                momento caso haja necessidade. Por isso, recomenda-se que seja consultada regularmente.
              </p>
            </section>

            {/* Legislação */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Legislação e Foro</h2>
              <p className="text-gray-300 leading-relaxed">
                Esta política será regida, interpretada e executada de acordo com as leis da República 
                Federativa do Brasil, especialmente a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados), 
                sendo competente o foro de Londrina/PR, sede do Controlador, para dirimir qualquer dúvida 
                decorrente deste documento.
              </p>
            </section>

            {/* Seção de Contato */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">10. Contato e Encarregado de Dados</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Se você ainda ficou com alguma dúvida sobre o tratamento de seus dados pessoais ou precisa 
                interagir conosco, poderá entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais:
              </p>

              <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-4 text-white">Guilherme Mitsuo Yabushita Nakama - Encarregado de Dados (DPO)</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">guilhermenakama@sorai.net.br</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">São Paulo, SP - Brasil</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold mb-2 text-white">Dados da Empresa:</h4>
                  <p className="text-gray-300 text-sm">
                    SORAI TECNOLOGIA LTDA<br/>
                    CNPJ: 54.686.825/0001-30<br/>
                    Rua André Saraiva, nº 129, Vila Sônia<br/>
                    CEP: 05626-000 - São Paulo, SP
                  </p>
                </div>
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