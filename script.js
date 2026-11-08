(function () {
  const { titulo, subtitulo, autoria, local, projeto, sobre, equipe, quadros } = GALERIA;
  const $ = (id) => document.getElementById(id);
  const texto = (id, t) => { const el = $(id); if (el) el.textContent = t; };
  const doisDigitos = (n) => String(n).padStart(2, "0");
  const ano = new Date().getFullYear();

  // Comum às duas páginas
  texto("marca", titulo);
  texto("rodape-texto", `${titulo} · ${local} · ${ano}`);

  // Mostra um aviso no lugar de uma foto que ainda não foi adicionada
  function aoFalhar(img, caminho) {
    img.addEventListener("error", () => {
      const aviso = document.createElement("div");
      aviso.className = "sem-imagem";
      aviso.textContent = "Adicione a foto: " + caminho;
      img.replaceWith(aviso);
    }, { once: true });
  }

  // Transforma *texto* em itálico, sem permitir outro HTML
  function comItalico(el, t) {
    t.split(/(\*[^*]+\*)/).forEach((parte) => {
      if (/^\*[^*]+\*$/.test(parte)) {
        const em = document.createElement("em");
        em.textContent = parte.slice(1, -1);
        el.appendChild(em);
      } else if (parte) {
        el.appendChild(document.createTextNode(parte));
      }
    });
  }

  // ---------- Página das obras ----------
  const grade = $("grade");
  if (grade) {
    document.title = subtitulo;
    texto("titulo", subtitulo);
    texto("ano", ano);
    texto("autoria", autoria);
    texto("local", local);
    texto("total", `${quadros.length} pinturas`);
    texto("responsavel", equipe[0] ? equipe[0].nome : "");
    texto("projeto-nome", projeto.nome);
    texto("projeto-descricao", projeto.descricao);

    const ficha = (q) => [q.tecnica, q.ano].filter(Boolean).join(", ");
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
      texto("visor-numero", `${doisDigitos(atual + 1)} / ${doisDigitos(quadros.length)}`);
      const preencher = (id, t) => { const el = $(id); el.textContent = t; el.hidden = !t; };
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
  }

  // ---------- Página "Sobre o projeto" ----------
  const corpo = $("sobre-texto");
  if (corpo) {
    document.title = `${sobre.titulo} · ${projeto.nome}`;
    texto("sobre-titulo", sobre.titulo);
    texto("sobre-subtitulo", sobre.subtitulo);
    texto("sobre-destaque", sobre.destaque);

    sobre.paragrafos.forEach((t, i) => {
      const p = document.createElement("p");
      p.className = (i === 0 ? "abre " : "") + "surgir";
      comItalico(p, t);
      corpo.appendChild(p);
      // Uma das pinturas aparece depois do segundo parágrafo
      if (i === 1 && sobre.imagem) {
        const fig = document.createElement("figure");
        fig.className = "sobre-imagem surgir";
        const img = document.createElement("img");
        img.alt = "Uma das pinturas da mostra";
        img.loading = "lazy";
        aoFalhar(img, sobre.imagem);
        img.src = sobre.imagem;
        fig.appendChild(img);
        corpo.appendChild(fig);
      }
    });

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
  }

  // ---------- Página "Agradecimentos" ----------
  const carta = $("agr-texto");
  if (carta) {
    const agr = GALERIA.agradecimentos;
    document.title = `Agradecimentos · ${titulo}`;
    texto("agr-titulo", agr.titulo);
    texto("agr-saudacao", agr.saudacao);
    texto("agr-despedida", agr.despedida);
    texto("agr-assinatura", agr.assinatura);
    agr.paragrafos.forEach((t) => {
      const p = document.createElement("p");
      p.className = "surgir";
      comItalico(p, t);
      carta.appendChild(p);
    });
    const foto = $("agr-foto");
    foto.alt = "Foto de " + agr.assinatura;
    aoFalhar(foto, agr.foto);
    foto.src = agr.foto;

    // Faixa com as pinturas dos estudantes
    const faixa = $("agr-faixa");
    quadros.forEach((q) => {
      const img = document.createElement("img");
      img.src = q.imagem; img.alt = ""; img.loading = "lazy";
      img.addEventListener("error", () => img.remove(), { once: true });
      // Proporção da pintura, para todas caberem numa linha só no computador
      img.addEventListener("load", () => {
        img.style.setProperty("--r", (img.naturalWidth / img.naturalHeight).toFixed(3));
      }, { once: true });
      faixa.appendChild(img);
    });
  }

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
})();
