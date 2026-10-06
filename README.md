# Kinderman Barros — currículo e portfólio

Portfólio profissional em português, construído com Vite e Three.js. Paleta de carvão, vinho e metal envelhecido; tipografia editorial e um estúdio 3D que organiza a apresentação de Iontech, SDO Companion e experiência com Android XR.

## Desenvolvimento

Requer Node.js 22.12+ ou 24 e npm.

```bash
npm ci
npm run dev
```

## Verificação e produção

```bash
npm run check
npm test
npm run build
npm run preview
```

O build gera `dist/` e atualiza `index.html` e `assets/` na raiz para `https://kindermanbarros.github.io`, sem domínio personalizado. O PDF fornecido está em `public/assets/kinderman-resume.pdf`.

## GitHub Pages

O workflow `.github/workflows/pages.yml` valida pull requests e publica pushes em `main`. Em **Settings → Pages → Build and deployment**, selecionar **GitHub Actions** como fonte. A configuração administrativa do Pages não é modificada pelo código. O campo Custom domain deve permanecer vazio.

## Conteúdo e interação

- Currículo baseado no PDF fornecido; experiência, formação, idiomas e certificações sem métricas inventadas.
- SDO Companion descrito com base no README atual do seu repositório.
- Iontech apresentado como contribuição realizada durante o vínculo de 2020–2021. O endereço solicitado redirecionou para `iontechmanaus.com` e não permitiu inspeção completa durante a implementação.
- SDO usa as quatro capturas reais fornecidas, em galeria deslizável com links para as imagens completas. A tela do celular 3D usa a captura do painel. Iontech aparece como identificação do projeto e link, sem uma interface inventada: a captura foi bloqueada pelo site.
- A experiência XR apresenta a área de atuação e não revela projetos internos de P&D.
- Botões do estúdio, clique nos objetos e tabs selecionam o mesmo projeto. Arrastar altera a perspectiva. Tabs têm navegação por setas, Home e End.
- HTML semântico mantém o currículo e o primeiro projeto disponíveis sem JavaScript. Falha de WebGL mantém todos os projetos acessíveis pelos controles.
- `prefers-reduced-motion` inicia a cena sem movimento; botão permite pausar. Renderização suspensa fora da viewport e em aba oculta; resolução limitada a 1,5x e Three.js carregado separadamente.

## Estrutura

- `site/index.html`: fonte do conteúdo, currículo e navegação.
- `index.html` e `assets/`: versão compilada para publicação estática, atualizada por `npm run build`.
- `vite.config.js`: entrada e diretórios de produção.
- `scripts/publish-static.mjs`: valida os arquivos e mantém a raiz publicável sem compilação.
- `src/main.js`: apresentações e acessibilidade das interações.
- `src/scene.js`: objetos, materiais, iluminação e interação Three.js.
- `src/style.css`: direção visual, responsividade e impressão.
- `tests/portfolio.test.mjs`: comportamento dos controles, teclado, PDF, redução de movimento e fallback.

As fontes remotas são opcionais: o CSS possui fontes locais de fallback. Three.js é empacotado no build, sem depender de CDN em produção. A verificação automatizada cobre DOM e build; aparência final, WebGL e comportamento real em dispositivos ainda exigem revisão no navegador.

A raiz contém o build completo para evitar que a publicação padrão por branch do GitHub Pages substitua a versão compilada por HTML de desenvolvimento. Após alterar o código, execute `npm run build` e inclua os arquivos gerados no commit. Ambos os caminhos de publicação entregam os mesmos arquivos estáticos.

Atualização mobile: controles em linhas de 48px, um objeto 3D por vez em telas estreitas, enquadramento adaptado e arraste com captura de ponteiro e limiar de 8px para distinguir um toque de um gesto.
