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
    slug: "ai-index-2025-stanford-presente-riscos-ia",
    title: "O que o AI Index 2025 da Stanford revela sobre o presente (e os riscos) da Inteligência Artificial",
    excerpt:
      "A nova edição do AI Index Report traz dados que ajudam a entender onde estamos e para onde vamos quando falamos de IA. Avanços impressionantes, mas riscos crescentes.",
    image: "/blog/AI-index-2025-stanford.jpg",
    category: "Pesquisa",
    publishedAt: "04 Jun 2025",
    readTime: "8 min",
    views: "3.2k",
    author: "Rodolfo Spigai",
    tags: ["AI Index", "Stanford", "Pesquisa IA", "Riscos IA", "Maturidade Tecnológica"],
    featured: true,
    content: `
      <p class="lead">A nova edição do AI Index Report, publicado pelo Instituto de IA Centrada no Ser Humano da Stanford, trouxe dados que ajudam a entender onde estamos — e para onde vamos — quando falamos de Inteligência Artificial.</p>

      <h2>Avanços impressionantes...</h2>
      <p>O relatório mostra que a evolução técnica da IA segue em ritmo acelerado:</p>
      
      <div class="highlight-box">
        <h3>Principais Avanços Técnicos</h3>
        <ul>
          <li><strong>Modelos menores, mais eficientes:</strong> O Phi-3-mini, da Microsoft, com apenas 3,8 bilhões de parâmetros, já compete com modelos muito maiores em benchmarks como o MMLU</li>
          <li><strong>Custo drasticamente reduzido:</strong> O preço por milhão de tokens caiu de US$ 20 para US$ 0,07 em apenas 18 meses</li>
          <li><strong>Infraestrutura mais acessível:</strong> O desempenho por dólar de GPU aumentou em 40%, abrindo caminho para IA local e em dispositivos móveis</li>
        </ul>
      </div>

      <p>Em outras palavras: a tecnologia está mais poderosa, barata e democratizada do que nunca.</p>

      <h2>...mas riscos crescentes</h2>
      <p>Por trás da euforia, o relatório alerta para a crescente complexidade do cenário:</p>

      <div class="warning-box">
        <h3>Sinais de Alerta</h3>
        <ul>
          <li><strong>230+ incidentes públicos</strong> envolvendo IA em 2024, entre decisões automatizadas falhas, vieses e deepfakes</li>
          <li><strong>Regulação em ascensão:</strong> Só nos EUA, 59 novas normas federais relacionadas à IA foram introduzidas em um ano</li>
          <li><strong>Adoção acelerada, mas desestruturada:</strong> Investimentos privados ultrapassaram US$ 250 bilhões, nem sempre acompanhados de maturidade técnica ou governança</li>
        </ul>
      </div>

      <p>É aqui que o dado mais importante aparece, ainda que nas entrelinhas: <strong>o risco de adoção sem direção clara.</strong></p>

      <h2>A maturidade é mais importante do que a novidade</h2>
      <p>O relatório evidencia uma contradição silenciosa: enquanto a IA avança tecnicamente, muitos projetos falham por erros estratégicos.</p>

      <p>Não é raro ver iniciativas lançadas antes de responder a perguntas básicas:</p>

      <div class="question-box">
        <h3>Perguntas Fundamentais</h3>
        <ul>
          <li>Qual problema real está sendo resolvido?</li>
          <li>Qual a arquitetura ideal para esse cenário?</li>
          <li>Há clareza entre o que é automatizável e o que deve permanecer humano?</li>
          <li>Existe supervisão e plano de governança para os outputs gerados?</li>
        </ul>
      </div>

      <p>Sem essas respostas, cresce o número de implementações frustradas, caras e pouco eficientes. E isso já vem sendo antecipado por consultorias como a Gartner, que prevê o cancelamento de 40% dos projetos com agentes de IA até 2027.</p>

      <h2>O que fica como reflexão?</h2>
      <p>O AI Index 2025 não é só um relatório técnico. É um sinal: <strong>a tecnologia está pronta — mas precisamos estar também.</strong></p>

      <p>Neste cenário, talvez a melhor abordagem não seja correr atrás do "modelo mais novo", mas construir respostas sólidas para perguntas fundamentais:</p>

      <div class="reflection-box">
        <ul>
          <li>O que deve ser automatizado?</li>
          <li>Por quê?</li>
          <li>Com qual custo?</li>
          <li>E com quais consequências?</li>
        </ul>
      </div>

      <blockquote>
        <p>IA eficiente não começa com código. Começa com intenção clara e responsabilidade estratégica.</p>
      </blockquote>

      <div class="source-box">
        <p><strong>Fonte:</strong> <a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" target="_blank" rel="noopener">Stanford AI Index 2025</a></p>
      </div>
    `,
  },
  {
    slug: "preconceito-algoritmico-vies-invisivel-ia",
    title: "Preconceito Algorítmico: o viés invisível da IA e como enfrentá-lo agora",
    excerpt:
      "Algoritmos discriminam de maneira silenciosa, muitas vezes imperceptível. Não por intenção, mas por herança. Entenda os riscos e como prevenir.",
    image: "/blog/Preconceito-algoritmico.jpg",
    category: "Ética IA",
    publishedAt: "23 Mai 2025",
    readTime: "7 min",
    views: "2.8k",
    author: "Rodolfo Spigai",
    tags: ["Preconceito Algorítmico", "Ética IA", "LGPD", "Viés", "Responsabilidade"],
    featured: true,
    content: `
      <p class="lead">Vivemos um tempo em que algoritmos tomam decisões por nós — ou sobre nós. Eles filtram currículos, definem limites de crédito, direcionam anúncios, fazem triagens médicas e até sugerem quem você deveria contratar, demitir ou premiar.</p>

      <p>A Inteligência Artificial promete velocidade, escala e precisão. Mas, quando não é bem projetada, pode trazer também o que menos esperamos: <strong>preconceito</strong>.</p>

      <p>Sim, os algoritmos discriminam — e o fazem de maneira silenciosa, muitas vezes imperceptível. Não por intenção, mas por herança. Esse fenômeno tem nome e urgência: <strong>preconceito algorítmico</strong>.</p>

      <h2>O que é, afinal, o preconceito algorítmico?</h2>
      <p>É o efeito colateral da automatização feita com base em dados distorcidos, incompletos ou enviesados. É quando um sistema, ao tentar prever ou decidir algo, penaliza certos grupos sociais de forma injusta — por causa da cor da pele, gênero, território, escolaridade, deficiência, ou qualquer outra variável que se correlacione, direta ou indiretamente, com estereótipos históricos.</p>

      <div class="warning-box">
        <h3>Realidade Atual</h3>
        <p>E não se trata de uma hipótese futura. Já acontece hoje — em processos seletivos, análises de crédito, sistemas de reconhecimento facial e até diagnósticos de saúde digital. Às vezes, a IA aprende com o pior que fizemos até aqui e reproduz isso com a precisão de um código.</p>
      </div>

      <h2>Por que isso importa para as empresas?</h2>
      <p>Porque o risco não é apenas técnico: é ético, jurídico, reputacional e comercial.</p>

      <div class="risk-box">
        <h3>Riscos Empresariais</h3>
        <ul>
          <li><strong>Jurídico:</strong> Você pode ser acionado judicialmente com base na LGPD, na Constituição Federal e em legislações antidiscriminatórias</li>
          <li><strong>Financeiro:</strong> Pode sofrer multas administrativas, ser excluído de processos públicos ou perder selos de ESG</li>
          <li><strong>Reputacional:</strong> E o pior: pode manchar sua imagem diante de um público cada vez mais atento à ética da tecnologia</li>
        </ul>
      </div>

      <blockquote>
        <p>Empresas que automatizam decisões sem considerar o impacto disso nos grupos sociais mais vulneráveis estão construindo um castelo sobre areia movediça.</p>
      </blockquote>

      <h2>Como prevenir?</h2>
      <p>Não se trata de "não usar IA" — mas de usar com responsabilidade, consciência e governança. Algumas medidas já podem (e devem) ser adotadas:</p>

      <div class="solution-steps">
        <div class="step">
          <h3>1. Auditoria de dados</h3>
          <p>Avalie o histórico e o contexto dos dados usados. Dados enviesados produzem sistemas enviesados.</p>
        </div>

        <div class="step">
          <h3>2. Testes de impacto</h3>
          <p>Implemente avaliações de impacto algorítmico (AIA) para identificar riscos de discriminação antes de implantar sistemas.</p>
        </div>

        <div class="step">
          <h3>3. Equipes diversas</h3>
          <p>Inclua múltiplas vozes na concepção e validação dos modelos. Diversidade não é apenas uma pauta social — é critério de qualidade.</p>
        </div>

        <div class="step">
          <h3>4. Transparência e explicabilidade</h3>
          <p>Se o algoritmo decide, alguém precisa entender como e por quê. O direito à explicação é parte da confiança.</p>
        </div>

        <div class="step">
          <h3>5. Revisão humana</h3>
          <p>Automatize o que puder, mas mantenha humanos no circuito para decisões sensíveis.</p>
        </div>
      </div>

      <h2>O futuro da IA é agora — e é humano</h2>
      <p>A inteligência artificial não é neutra. Ela reflete nossos dados, escolhas e intenções. O preconceito algorítmico é o espelho das desigualdades que ainda não resolvemos, mas temos a oportunidade (e a responsabilidade) de não perpetuá-las digitalmente.</p>

      <div class="conclusion-box">
        <p>Mais do que nunca, ética, tecnologia e diversidade precisam caminhar juntas. Empresas que entenderem isso desde já estarão mais preparadas para o presente — e mais bem posicionadas para o futuro.</p>
      </div>
    `,
  },
  {
    slug: "ia-saude-escrita-automatica-consultas-medicas",
    title: "Inteligência Artificial na Saúde: A escrita automática das consultas médicas e o que ganhamos com isso",
    excerpt:
      "Dez centros de saúde em Aragón, Espanha, já adotaram IA para transcrever consultas e elaborar relatórios clínicos. Uma inovação silenciosa, mas de alto impacto.",
    image: "/blog/IA-na-saude.jpg",
    category: "Saúde Digital",
    publishedAt: "23 Jul 2025",
    readTime: "6 min",
    views: "2.1k",
    author: "Rodolfo Spigai",
    tags: ["IA na Saúde", "Automação Médica", "Transcrição", "Saúde Digital", "Humanização"],
    featured: false,
    content: `
      <p class="lead">A digitalização da saúde dá mais um passo promissor em Aragón, na Espanha. Segundo noticiado pela Cadena SER, dez centros de saúde da região já adotaram um sistema de Inteligência Artificial que transcreve automaticamente as consultas entre médicos e pacientes e elabora os relatórios clínicos.</p>

      <p>Trata-se de uma inovação silenciosa, mas de alto impacto — e que nos convida a refletir sobre o futuro da relação entre tecnologia, medicina e dignidade no atendimento à saúde.</p>

      <h2>Devolvendo o tempo ao que importa</h2>
      <p>O uso da IA para automatizar o registro clínico resolve uma das queixas mais comuns no sistema de saúde: <strong>o tempo perdido com burocracia</strong>.</p>

      <div class="question-box">
        <p>Quantos minutos por consulta são consumidos com digitação de dados, preenchimento de sistemas e elaboração de relatórios?</p>
      </div>

      <p>A tecnologia não só devolve esse tempo ao médico, como o reinveste na escuta ativa do paciente. Quando a IA assume a tarefa de documentar a conversa, o olhar clínico volta ao seu lugar de origem: <strong>no rosto de quem sofre, não na tela do computador</strong>.</p>

      <h2>Resultados na prática</h2>
      <p>A experiência piloto em Aragón revela isso com clareza. Os profissionais de saúde relatam:</p>

      <div class="benefits-list">
        <ul>
          <li><strong>Maior fluidez na consulta</strong></li>
          <li><strong>Melhor qualidade nos registros</strong></li>
          <li><strong>Menos fadiga mental</strong></li>
        </ul>
      </div>

      <p>Afinal, a sobrecarga de trabalho administrativo é uma das causas do esgotamento emocional de médicos e enfermeiros — um problema estrutural que a pandemia apenas agravou. <strong>A automação da documentação médica não substitui o profissional; ela o liberta.</strong></p>

      <h2>Benefícios para os pacientes</h2>
      <p>Mas os ganhos não são apenas para os médicos. Pacientes também saem beneficiados:</p>

      <div class="highlight-box">
        <h3>Melhorias no Atendimento</h3>
        <ul>
          <li>Registros mais precisos</li>
          <li>Menos riscos de erros</li>
          <li>Continuidade mais segura no atendimento</li>
          <li>Mais atenção humana</li>
        </ul>
      </div>

      <p>Com isso, o cuidado se torna, paradoxalmente, mais personalizado. <strong>A IA, nesse caso, é ferramenta de humanização.</strong></p>

      <h2>Desafios a considerar</h2>
      <p>É claro que há desafios. Questões de privacidade, acurácia da transcrição e segurança dos dados precisam ser tratadas com rigor. Além disso, a adesão dos profissionais depende de treinamento, confiança e uma interface verdadeiramente funcional.</p>

      <div class="warning-box">
        <p><strong>Importante:</strong> Não basta ser inovador — precisa funcionar no dia a dia.</p>
      </div>

      <h2>A lição de Aragón</h2>
      <p>No entanto, a lição que vem de Aragón é clara: <strong>a saúde pública pode — e deve — se apropriar da tecnologia de forma estratégica</strong>, com foco na qualidade do cuidado e na dignidade do profissional.</p>

      <blockquote>
        <p>A inteligência artificial, quando bem aplicada, não substitui o humano. Pelo contrário: devolve a ele o que é mais valioso — tempo, atenção e empatia.</p>
      </blockquote>

      <div class="conclusion-box">
        <p>Se há um lugar onde a IA pode fazer diferença real, é aqui. E talvez a pergunta que fique não seja "devemos usar?", mas <strong>"por que demoramos tanto?"</strong>.</p>
      </div>

      <div class="source-box">
        <p><strong>Fonte:</strong> <a href="https://cadenaser.com/aragon/2025/07/22/10-centros-de-salud-de-aragon-cuentan-ya-con-un-sistema-que-transcribe-la-consulta-del-medico-con-el-paciente-y-elabora-su-informe-radio-zaragoza" target="_blank" rel="noopener">Cadena SER - Aragón</a></p>
      </div>
    `,
  },
  {
    slug: "walmart-agentes-inteligentes-ia-futuro-ecommerce",
    title: "Walmart aposta em agentes inteligentes com IA — e o que isso ensina sobre o futuro do e-commerce",
    excerpt:
      "O Walmart anunciou 'super agentes' de IA para transformar sua operação digital. Meta: metade das vendas do e-commerce até 2030. O que isso significa para o varejo?",
    image: "/blog/Walmart-agentes-IA.jpg",
    category: "E-commerce",
    publishedAt: "24 Jul 2025",
    readTime: "7 min",
    views: "235",
    author: "Rodolfo Spigai",
    tags: ["Walmart", "Agentes IA", "E-commerce", "Varejo Digital", "Super Agentes"],
    featured: false,
    content: `
      <p class="lead">O Walmart anunciou uma iniciativa ambiciosa: transformar sua operação digital por meio de "super agentes" de Inteligência Artificial. A meta é clara — que metade de suas vendas venha do e-commerce até 2030.</p>

      <p>A estratégia? Unir tecnologia de ponta e jornada de compra inteligente para criar uma experiência mais fluida, personalizada e eficiente.</p>

      <p>Mas esse movimento não diz respeito apenas a uma gigante do varejo. Ele sinaliza uma inflexão no próprio modelo de e-commerce — um ponto em que as marcas precisarão escolher entre seguir operando com estruturas lineares e estáticas ou abraçar sistemas autônomos, responsivos e cada vez mais contextuais.</p>

      <h2>O que são os "super agentes"?</h2>
      <p>Os super agentes são assistentes de IA treinados para interagir não só com consumidores, mas também com colaboradores, fornecedores e desenvolvedores. Eles atuam como <strong>centrais de inteligência distribuída</strong>, capazes de:</p>

      <div class="feature-list">
        <ul>
          <li>Sugerir produtos</li>
          <li>Prever necessidades</li>
          <li>Orientar decisões</li>
          <li>Automatizar interações</li>
        </ul>
      </div>

      <p>Tudo em linguagem natural e com capacidade de aprendizado contínuo.</p>

      <div class="highlight-box">
        <h3>Sparky: O Agente Visual</h3>
        <p>No centro da estratégia está o "Sparky", um agente visual que recomenda itens com base em preferências, histórico e contexto — substituindo listas de produtos por diálogos e experiências interativas. É uma ruptura com o e-commerce tradicional, centrado na busca e no clique.</p>
      </div>

      <h2>Por que isso importa?</h2>
      <p>Porque não se trata de uma tecnologia para poucos. Assim como antes vimos a transcrição por IA transformar o atendimento na saúde pública, os super agentes têm potencial para revolucionar o varejo de qualquer porte — inclusive no Brasil.</p>

      <div class="example-box">
        <h3>Imagine um pequeno e-commerce com um agente que:</h3>
        <ul>
          <li>Conversa com os clientes</li>
          <li>Compreende suas dúvidas</li>
          <li>Sugere combinações de produtos</li>
          <li>Acompanha pedidos</li>
          <li>Identifica padrões de comportamento para campanhas futuras</li>
        </ul>
        <p><strong>Tudo isso, sem a necessidade de uma equipe dedicada 24h por dia.</strong></p>
      </div>

      <h2>O que está em jogo</h2>
      <p>Esse movimento marca uma transição entre dois paradigmas:</p>

      <div class="paradigm-shift">
        <div class="shift-item">
          <h3>De processos para experiências</h3>
          <p>A IA deixa de ser suporte e passa a orquestrar a jornada do usuário.</p>
        </div>

        <div class="shift-item">
          <h3>De interfaces para interações</h3>
          <p>Não clicamos mais em botões; conversamos, pedimos, mostramos.</p>
        </div>

        <div class="shift-item">
          <h3>De escala para personalização</h3>
          <p>Quanto mais dados, mais contexto — e mais relevante a resposta da IA.</p>
        </div>
      </div>

      <div class="warning-box">
        <p><strong>A mensagem para quem trabalha com e-commerce é clara:</strong> a experiência de compra precisa evoluir na mesma velocidade da expectativa do consumidor. E isso exige mais do que ferramentas; exige estratégia, estrutura e coragem para mudar.</p>
      </div>

      <h2>Como a AYTT vê isso</h2>
      <p>Na AYTT, temos trabalhado com negócios que buscam exatamente essa virada: sair da lógica transacional para uma lógica conversacional e preditiva.</p>

      <p>O uso da IA aplicada ao e-commerce não é sobre modismo, é sobre <strong>permanecer relevante</strong>.</p>

      <blockquote>
        <p>A questão não é mais "vale a pena usar IA?", mas sim "quanto estou perdendo por ainda não usar?".</p>
      </blockquote>

      <div class="conclusion-box">
        <p>A revolução está em curso — e ela escuta, responde e aprende. A pergunta é: <strong>sua marca também?</strong></p>
      </div>

      <div class="source-box">
        <p><strong>Fonte:</strong> <a href="https://www.reuters.com/business/retail-consumer/walmart-bets-ai-super-agents-boost-e-commerce-growth-2025-07-24" target="_blank" rel="noopener">Reuters - Walmart AI Strategy</a></p>
      </div>
    `,
  },
  {
    slug: "40-projetos-ia-cancelados-como-evitar-estatistica",
    title: "40% dos Projetos com IA Serão Cancelados. Como Evitar que o Seu Esteja Nessa Estatística?",
    excerpt:
      "Segundo a Gartner, mais de 40% dos projetos com agentes de IA serão cancelados até 2027. Expectativas irreais, escopos mal definidos e falta de preparo são os culpados.",
    image: "/blog/Projetos-serao-cancelados.jpg",
    category: "Gestão de Projetos",
    publishedAt: "10 Jul 2025",
    readTime: "6 min",
    views: "2.7k",
    author: "Rodolfo Spigai",
    tags: ["Gartner", "Projetos IA", "Gestão", "Fracasso", "Estratégia"],
    featured: false,
    content: `
      <p class="lead">Segundo um recente relatório da Gartner divulgado pela Forbes Tech (julho/2025), mais de 40% dos projetos com agentes de IA serão cancelados até o final de 2027.</p>

      <p><strong>O motivo?</strong> Expectativas irreais, escopos mal definidos e falta de preparo técnico e estratégico das empresas.</p>

      <p>A promessa da Inteligência Artificial é tentadora: automação, redução de custos, aumento de produtividade. Mas, sem uma abordagem sólida, o sonho vira frustração — e custo.</p>

      <div class="warning-box">
        <p>Na AYTT, vemos isso acontecer com frequência: empresas que investiram pesado em IA e receberam entregas atrasadas, mal dimensionadas e, principalmente, <strong>sem alinhamento com os reais objetivos do negócio</strong>.</p>
      </div>

      <h2>Onde os projetos falham?</h2>
      
      <div class="failure-points">
        <div class="failure-item">
          <h3>🔮 Solução Mágica</h3>
          <p>Tratar IA como "solução mágica", sem entender suas limitações técnicas e comportamentais</p>
        </div>

        <div class="failure-item">
          <h3>🏗️ Arquiteturas Simplistas</h3>
          <p>Arquiteturas simplistas, com alto consumo de tokens e baixa precisão</p>
        </div>

        <div class="failure-item">
          <h3>💬 Falta de Comunicação</h3>
          <p>Falta de comunicação entre áreas técnicas e estratégicas</p>
        </div>

        <div class="failure-item">
          <h3>👥 Equipes Mal Alocadas</h3>
          <p>Equipes mal alocadas, sem papéis definidos ou processos claros</p>
        </div>
      </div>

      <h2>Nossa resposta: IA com estratégia, arquitetura e gente certa</h2>
      
      <p>Na AYTT, não vendemos promessas. Oferecemos <strong>times completos com papéis definidos</strong> (consultores, líder técnico, gerente de projetos e especialistas) que alocamos sob demanda, conforme a maturidade e o desafio do cliente.</p>

      <div class="solution-box">
        <h3>Nossa Abordagem</h3>
        <ul>
          <li><strong>Arquitetura modular:</strong> Utilizando agentes especializados</li>
          <li><strong>Separação clara:</strong> Distinguimos o que é determinístico do que é probabilístico</li>
          <li><strong>Benefícios:</strong> Reduz custo, aumenta precisão e facilita manutenção</li>
        </ul>
      </div>

      <h2>Exemplos práticos de sucesso</h2>
      
      <div class="success-examples">
        <div class="example">
          <h3>📄 Leitura de Documentos</h3>
          <p>Automação inteligente para processamento de boletos, notas fiscais e pedidos</p>
        </div>

        <div class="example">
          <h3>📋 Triagem de Currículos</h3>
          <p>Classificação automática e priorização de candidatos</p>
        </div>

        <div class="example">
          <h3>💬 Atendimento com IA</h3>
          <p>Chatbots especializados para diferentes contextos de negócio</p>
        </div>

        <div class="example">
          <h3>⚙️ Automações Inteligentes</h3>
          <p>Processos adaptativos que aprendem com o uso</p>
        </div>
      </div>

      <blockquote>
        <p>O que a Gartner chama de "cancelamento por falta de clareza", nós evitamos com método.</p>
      </blockquote>

      <h2>A diferença está no método</h2>
      
      <div class="method-box">
        <h3>Como Evitamos o Fracasso</h3>
        <ul>
          <li><strong>Diagnóstico inicial:</strong> Avaliamos a maturidade digital da empresa</li>
          <li><strong>Objetivos claros:</strong> Definimos metas mensuráveis e realistas</li>
          <li><strong>Arquitetura robusta:</strong> Projetamos soluções escaláveis e eficientes</li>
          <li><strong>Implementação gradual:</strong> Entregas incrementais com validação constante</li>
          <li><strong>Governança contínua:</strong> Monitoramento e ajustes permanentes</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <p><strong>Projetos com IA não precisam ser arriscados. Eles precisam ser bem planejados.</strong> E principalmente: adaptados à realidade e ao ritmo da sua empresa.</p>
      </div>

      <div class="cta-box">
        <h3>Não seja parte da estatística</h3>
        <p>Se você está considerando um projeto de IA, converse conosco. Nossa experiência pode ser a diferença entre o sucesso e mais uma estatística de fracasso.</p>
      </div>

      <div class="source-box">
        <p><strong>Fonte:</strong> <a href="https://forbes.com.br/forbes-tech/2025/07/40-dos-projetos-com-agentes-de-ia-serao-cancelados-ate-2027-segundo-gartner/" target="_blank" rel="noopener">Forbes Tech - Gartner Report</a></p>
      </div>
    `,
  },
]

// Perfil do autor atualizado
export const authorProfile = {
  name: "Rodolfo Spigai",
  bio: "Advogado empresarial com 25 anos de experiência, sócio fundador de três empresas (VAR Business Beyond, Caetano de Paula Advogados e AYTT). Especialista reconhecido em LGPD e Direito Digital. Ex-investidor anjo e mentor ativo em hubs de inovação e incubadoras. Expertise sólida em Compliance e Administração Empresarial, trazendo visão jurídica e estratégica para projetos de tecnologia.",
  avatar: "/team/rodolfo-spigai.jpg",
  social: {
    linkedin: "https://linkedin.com/in/rodolfospigai",
    twitter: "https://twitter.com/rodolfospigai"
  }
}