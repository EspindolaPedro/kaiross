# Escova Secadora 5 em 1 — Vitalify (LP)

Landing page estática do produto, com checkout na Kaiross e Meta Pixel (`738949588849294`) já configurado.

## Estrutura

- `public/` — o site (HTML, CSS, JS e imagens). É só isso que vai ao ar.
- `scripts/dev-server.js` — servidor Node simples só para rodar localmente (`npm start`).
- `vercel.json` — faz a Vercel servir `public/` como site estático (sem funções).
- `ideas.md` — direção visual da página.

## Rodar localmente

```bash
npm start   # http://localhost:3000
```

## Publicar

### Opção 1 — GitHub Pages (grátis, já configurado)
1. Faça merge desta branch na `main`.
2. No GitHub: **Settings → Pages → Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy-pages.yml` publica a pasta `public/` a cada push na `main`
   (ou rode manualmente em **Actions → Deploy LP no GitHub Pages → Run workflow**).
4. O site fica em `https://<usuario>.github.io/kaiross/`. Para domínio próprio, configure em **Settings → Pages → Custom domain**.

### Opção 2 — Vercel / Netlify
Importe o repositório. Na Vercel o `vercel.json` já configura tudo (Framework: Other, saída `public`). Na Netlify, use `public` como diretório de publicação.

## Antes de anunciar
- Troque o `og:image` em `public/index.html` pela URL absoluta do domínio final (ex.: `https://seudominio.com/assets/escova-5-em-1.webp`) para a prévia de link aparecer no WhatsApp/Facebook.
- Verifique o domínio no Gerenciador de Negócios da Meta e teste o Pixel com o Meta Pixel Helper (eventos `PageView` e `InitiateCheckout`).
