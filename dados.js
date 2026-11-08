/*
  ============================================================
  EDITE AQUI O CONTEÚDO DA GALERIA
  ============================================================
  - Troque os textos entre aspas.
  - Fotos dos quadros: pasta imagens/quadros/
  - Fotos da equipe:   pasta imagens/equipe/
  - O nome do arquivo em "imagem"/"foto" precisa ser IGUAL ao nome da foto
    (atenção a maiúsculas/minúsculas e à extensão: .jpg, .jpeg, .png).
  - Todos os textos dos quadros são opcionais: deixe "" para esconder.
*/

const GALERIA = {
  titulo: "Galeria Virtual",
  subtitulo: "Mostra de Artes Visuais – 4º Ano",
  autoria: "Estudantes do 4º ano",
  local: "Sesc Porto Seguro · Bahia",

  // Resumo que aparece na página das obras
  projeto: {
    nome: "Sobre o projeto",
    descricao:
      "A Mostra de Artes Visuais “Porto Seguro pelos nossos olhares” apresenta as produções artísticas " +
      "dos estudantes do 4º ano do Ensino Fundamental, em um projeto idealizado, coordenado e orientado " +
      "por Gabriela Matos.",
  },

  // Texto completo da aba “Sobre o projeto” (cada item é um parágrafo; *texto* fica em itálico)
  sobre: {
    titulo: "Porto Seguro pelos nossos olhares",
    subtitulo: "Paisagens, cores e memórias do nosso lugar",
    paragrafos: [
      "A Mostra de Artes Visuais “Porto Seguro pelos nossos olhares” apresenta as produções artísticas dos estudantes do 4º ano do Ensino Fundamental, em um projeto idealizado, coordenado e orientado por Gabriela Matos.",
      "Inspirados nas paisagens do Centro Histórico de Porto Seguro, os estudantes produziram pinturas coletivas que retratam elementos marcantes da arquitetura e da memória local, como as casas coloniais, a Capela de São Benedito, a Igreja de Nossa Senhora da Pena, a Casa de Antônio Ricaldi e o Marco do Descobrimento.",
      "As obras foram realizadas com tinta PVA sobre papel madeira, utilizando molduras confeccionadas com papelão e pó de serra, incorporando o reaproveitamento de materiais ao processo de criação.",
      "A proposta dialoga com a História e o Teatro, tendo como referência temática a sugestão do professor de História e diretor de teatro Neander Souza, em aproximação com a peça *Memórias de uma Vila*, de sua autoria.",
      "Integrante da programação da Semana Literária de Porto Seguro 2026, a mostra valoriza a expressão artística infantil, a criatividade, a cooperação e as diferentes maneiras de perceber e representar o território.",
      "Mais do que retratar paisagens, as obras revelam os olhares das crianças sobre a cidade, transformando referências culturais e arquitetônicas em experiências de criação, memória e identidade.",
    ],
    destaque: "Uma exposição de cores, formas e histórias, na qual Porto Seguro é reinventada pelo olhar dos nossos pequenos artistas!",
    imagem: "imagens/quadros/quadro-03.jpg",
  },

  // Texto da aba “Agradecimentos” (cada item de "paragrafos" é um parágrafo)
  agradecimentos: {
    titulo: "Aos nossos pequenos artistas",
    saudacao: "Queridos estudantes do 4º ano,",
    paragrafos: [
      "Esta mostra só existe por causa de vocês. Cada pincelada, cada cor escolhida e cada ideia compartilhada transformou papel madeira e tinta em paisagens cheias de vida.",
      "Vocês olharam para Porto Seguro com atenção e carinho — as casas coloniais, as igrejas, a Capela de São Benedito, o Marco do Descobrimento — e mostraram que a história da nossa cidade também pode ser contada com cores.",
      "Obrigada pela dedicação, pela paciência em cada etapa, pela criatividade e, principalmente, pelo trabalho em equipe. Nenhuma dessas pinturas foi feita por uma pessoa só: cada quadro carrega as mãos e os olhares de muitos de vocês. Até as molduras, feitas com papelão e pó de serra, mostram que dá para criar coisas bonitas reaproveitando o que temos.",
      "Tenho muito orgulho de cada um de vocês. Que continuem olhando para o mundo com essa curiosidade e com essa coragem de criar.",
    ],
    despedida: "Com carinho,",
    assinatura: "Professora Gabriela Matos",
    foto: "imagens/equipe/gabriela.jpg",
  },

  equipe: [
    {
      nome: "Gabriela Matos Marinho",
      papel: "Responsável pelo projeto",
      foto: "imagens/equipe/gabriela.jpg",
      descricao:
        "Pedagoga e professora regente do 4º ano no Sesc Porto Seguro, Bahia. " +
        "Desenvolve este projeto de pintura com seus estudantes.",
    },
    {
      nome: "Neander de Oliveira Souza",
      papel: "Tema e exposição física",
      foto: "imagens/equipe/neander.jpg",
      descricao:
        "Professor de História do Ensino Fundamental II no Sesc Porto Seguro, Bahia. " +
        "Sugeriu o tema do projeto à professora Gabriela e a convidou para a exposição física.",
    },
    {
      nome: "Allan Cabral Sousa",
      papel: "Fotografia das obras",
      foto: "imagens/equipe/allan.jpg",
      descricao:
        "Professor de Inglês no Sesc Porto Seguro, Bahia. " +
        "Colaborou com as fotos que levaram os quadros para o formato digital.",
    },
    {
      nome: "Alejandro C. Melgaço",
      papel: "Galeria virtual",
      foto: "imagens/equipe/alejandro.jpg",
      descricao:
        "Professor de Inclusão Digital no Sesc Porto Seguro, Bahia. " +
        "Criou esta galeria para colaborar com o projeto e levar os trabalhos dos estudantes para a internet.",
    },
  ],

  // A ordem abaixo é a ordem em que os quadros aparecem no site (evita quadros parecidos lado a lado).
  // Para adicionar um quadro: coloque a foto em imagens/quadros/ e copie uma linha abaixo.
  quadros: [
    { titulo: "", imagem: "imagens/quadros/quadro-01.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-05.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-07.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-04.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-03.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-06.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-02.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-08.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-10.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-09.jpg", ano: "", tecnica: "", descricao: "" },
  ],
};
