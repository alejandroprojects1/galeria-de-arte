/*
  ============================================================
  EDITE AQUI O CONTEÚDO DA GALERIA
  ============================================================
  - Troque os textos entre aspas.
  - Coloque as fotos dos quadros na pasta  imagens/quadros/
  - Coloque a foto da autora na pasta       imagens/autora/
  - O nome do arquivo em "imagem" precisa ser IGUAL ao nome da foto
    (atenção a maiúsculas/minúsculas e à extensão: .jpg, .jpeg, .png).
  - Todos os textos dos quadros são opcionais: deixe "" para esconder.
*/

const GALERIA = {
  titulo: "Galeria Virtual",
  subtitulo: "Uma exposição de pinturas",

  autora: {
    nome: "Nome da Autora",
    foto: "imagens/autora/autora.jpg",
    descricao:
      "Escreva aqui uma descrição da autora: onde nasceu, como começou a pintar, " +
      "quais são suas inspirações, técnicas preferidas e o que deseja transmitir com sua arte.",
  },

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
