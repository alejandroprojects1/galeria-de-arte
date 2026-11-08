# Galeria Virtual

Site simples (HTML, CSS e JavaScript, sem instalar nada) para expor 12 quadros, com título, descrição, foto e descrição da autora.

## Como personalizar

1. **Fotos dos quadros** → coloque em `imagens/quadros/` com os nomes `quadro-01.jpg` até `quadro-12.jpg`
   (ou use outros nomes e ajuste no `dados.js`).
2. **Foto da autora** → coloque em `imagens/autora/autora.jpg`.
3. **Textos** → abra o arquivo `dados.js` e troque títulos, descrições, nome e biografia da autora.

Dica: fotos com até ~2000 px no lado maior e menos de 1 MB carregam rápido.
Enquanto uma foto não for adicionada, o site mostra um aviso com o nome do arquivo esperado.

Para ver no computador, basta abrir `index.html` no navegador.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `galeria-de-arte`), público.
2. Envie todos os arquivos desta pasta para ele (pelo botão **Add file → Upload files** ou com `git push`).
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`. Clique em **Save**.
5. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io/galeria-de-arte/`.

## Estrutura

```
index.html      página
estilo.css      aparência
script.js       monta a galeria e o visualizador ampliado
dados.js        ← CONTEÚDO (edite aqui)
imagens/
  quadros/      fotos dos quadros
  autora/       foto da autora
```
