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
  subtitulo: "Pinturas dos estudantes do 4º ano",
  local: "Sesc Porto Seguro · Bahia",

  projeto: {
    nome: "O projeto",
    descricao:
      "Estas pinturas foram feitas pelos estudantes do 4º ano do Sesc Porto Seguro, " +
      "em um projeto de pintura conduzido pela professora Gabriela Matos Marinho. " +
      "Esta galeria virtual foi criada para que os trabalhos possam ser vistos por todos.",
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
      nome: "Alejandro C. Melgaço",
      papel: "Galeria virtual",
      foto: "imagens/equipe/alejandro.jpg",
      descricao:
        "Professor de Inclusão Digital no Sesc Porto Seguro, Bahia. " +
        "Criou esta galeria para colaborar com o projeto e levar os trabalhos dos estudantes para a internet.",
    },
  ],

  // Para adicionar um quadro: coloque a foto em imagens/quadros/ e copie uma linha abaixo.
  quadros: [
    { titulo: "", imagem: "imagens/quadros/quadro-01.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-02.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-03.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-04.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-05.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-06.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-07.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-08.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-09.jpg", ano: "", tecnica: "", descricao: "" },
    { titulo: "", imagem: "imagens/quadros/quadro-10.jpg", ano: "", tecnica: "", descricao: "" },
  ],
};
