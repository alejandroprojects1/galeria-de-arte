(function () {
  const { titulo, subtitulo, autoria, local, projeto, equipe, quadros } = GALERIA;
  const $ = (id) => document.getElementById(id);
  const doisDigitos = (n) => String(n).padStart(2, "0");
  const ano = new Date().getFullYear();

  // Abertura
  document.title = subtitulo;
  $("marca").textContent = titulo;
  $("titulo").textContent = subtitulo;
  $("ano").textContent = ano;
  $("autoria").textContent = autoria;
  $("local").textContent = local;
  $("total").textContent = `${quadros.length} pinturas`;
  $("responsavel").textContent = equipe[0] ? equipe[0].nome : "";
  $("rodape-texto").textContent = `${titulo} · ${local} · ${ano}`;

  // Mostra um aviso no lugar de uma foto que ainda não foi adicionada
  function aoFalhar(img, caminho) {
    img.addEventListener("error", () => {
      const aviso = document.createElement("div");
      aviso.className = "sem-imagem";
      aviso.textContent = "Adicione a foto: " + caminho;
      img.replaceWith(aviso);
    }, { once: true });
  }

  // Obras
  const ficha = (q) => [q.tecnica, q.ano].filter(Boolean).join(", ");
  const grade = $("grade");
  quadros.forEach((q, i) => {
    const botao = document.createElement("button");
    botao.className = "obra surgir";
    botao.type = "button";
    botao.innerHTML = `
      <div class="obra-img"><img loading="lazy" decoding="async"></div>
      <div class="obra-legenda"><span class="numero"></span><div><h3></h3><p></p></div></div>`;
    const img = botao.querySelector("img");
    img.alt = q.titulo || `Obra ${i + 1}`;
    aoFalhar(img, q.imagem);
    img.src = q.imagem;
    botao.setAttribute("aria-label", `Ampliar ${img.alt}`);
    botao.querySelector(".numero").textContent = doisDigitos(i + 1);
    const h3 = botao.querySelector("h3");
    const p = botao.querySelector(".obra-legenda p");
    h3.textContent = q.titulo; h3.hidden = !q.titulo;
    p.textContent = ficha(q); p.hidden = !ficha(q);
    botao.addEventListener("click", () => abrir(i));
    grade.appendChild(botao);
  });

  // Projeto e equipe
  $("projeto-nome").textContent = projeto.nome;
  $("projeto-descricao").textContent = projeto.descricao;
  equipe.forEach((pessoa) => {
    const card = document.createElement("article");
    card.className = "pessoa surgir";
    card.innerHTML = `<img class="pessoa-foto"><div><p class="rotulo"></p><h3></h3><p class="pessoa-descricao"></p></div>`;
    const img = card.querySelector("img");
    img.alt = "Foto de " + pessoa.nome;
    aoFalhar(img, pessoa.foto);
    img.src = pessoa.foto;
    card.querySelector(".rotulo").textContent = pessoa.papel;
    card.querySelector("h3").textContent = pessoa.nome;
    card.querySelector(".pessoa-descricao").textContent = pessoa.descricao;
    $("equipe").appendChild(card);
  });

  // Elementos surgem suavemente ao rolar a página
  const surgir = document.querySelectorAll(".surgir");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    surgir.forEach((el) => obs.observe(el));
  } else {
    surgir.forEach((el) => el.classList.add("visivel"));
  }

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
    $("visor-numero").textContent = `${doisDigitos(atual + 1)} / ${doisDigitos(quadros.length)}`;
    const preencher = (id, texto) => { const el = $(id); el.textContent = texto; el.hidden = !texto; };
    preencher("visor-titulo", q.titulo);
    preencher("visor-ficha", ficha(q));
    preencher("visor-descricao", q.descricao);
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
  document.addEventListener("keydown", (e) => {
    if (visor.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });

  // Deslizar o dedo para passar as obras no celular
  let toqueX = null;
  visor.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
  visor.addEventListener("touchend", (e) => {
    if (toqueX === null) return;
    const dx = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
    toqueX = null;
  });
})();
