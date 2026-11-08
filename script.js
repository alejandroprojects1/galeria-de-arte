(function () {
  const { titulo, subtitulo, autora, quadros } = GALERIA;
  const $ = (id) => document.getElementById(id);

  document.title = titulo;
  $("titulo").textContent = titulo;
  $("subtitulo").textContent = subtitulo;
  $("rodape-texto").textContent = `© ${new Date().getFullYear()} ${autora.nome}. Todos os direitos reservados.`;

  // Mostra um aviso no lugar de uma foto que ainda não foi adicionada
  function aoFalhar(img, caminho) {
    img.addEventListener("error", () => {
      const aviso = document.createElement("div");
      aviso.className = "sem-imagem";
      aviso.textContent = "Adicione a foto: " + caminho;
      img.replaceWith(aviso);
    }, { once: true });
  }

  // Autora
  $("autora-nome").textContent = autora.nome;
  $("autora-descricao").textContent = autora.descricao;
  const foto = $("autora-foto");
  foto.alt = "Foto de " + autora.nome;
  aoFalhar(foto, autora.foto);
  foto.src = autora.foto;

  // Grade de obras
  const ficha = (q) => [q.tecnica, q.ano].filter(Boolean).join(" · ");
  const grade = $("grade");
  quadros.forEach((q, i) => {
    const botao = document.createElement("button");
    botao.className = "obra";
    botao.type = "button";
    botao.innerHTML = `
      <div class="obra-moldura"><img loading="lazy"></div>
      <div class="obra-legenda"><h3></h3><p></p></div>`;
    const img = botao.querySelector("img");
    img.alt = q.titulo || `Obra ${i + 1}`;
    aoFalhar(img, q.imagem);
    img.src = q.imagem;
    botao.setAttribute("aria-label", `Ampliar ${img.alt}`);
    botao.querySelector("h3").textContent = q.titulo;
    botao.querySelector("p").textContent = ficha(q);
    botao.querySelector(".obra-legenda").hidden = !q.titulo && !ficha(q);
    botao.addEventListener("click", () => abrir(i));
    grade.appendChild(botao);
  });

  // Visor ampliado
  const visor = $("visor");
  let atual = 0;
  let origem = null;

  function mostrar(i) {
    atual = (i + quadros.length) % quadros.length;
    const q = quadros[atual];
    const img = $("visor-img");
    img.src = q.imagem;
    img.alt = q.titulo || `Obra ${atual + 1}`;
    $("visor-numero").textContent = `Obra ${atual + 1} de ${quadros.length}`;
    const preencher = (id, texto) => { const el = $(id); el.textContent = texto; el.hidden = !texto; };
    preencher("visor-titulo", q.titulo);
    preencher("visor-ficha", ficha(q));
    preencher("visor-descricao", q.descricao);
    visor.classList.toggle("so-imagem", !q.titulo && !q.descricao && !ficha(q));
  }
  function abrir(i) {
    origem = document.activeElement;
    mostrar(i);
    visor.hidden = false;
    document.body.style.overflow = "hidden";
    visor.querySelector(".visor-fechar").focus();
  }
  function fechar() {
    visor.hidden = true;
    document.body.style.overflow = "";
    if (origem) origem.focus();
  }

  visor.querySelector(".visor-fechar").addEventListener("click", fechar);
  visor.querySelector(".anterior").addEventListener("click", () => mostrar(atual - 1));
  visor.querySelector(".proxima").addEventListener("click", () => mostrar(atual + 1));
  visor.addEventListener("click", (e) => { if (e.target === visor) fechar(); });
  document.addEventListener("keydown", (e) => {
    if (visor.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
})();
