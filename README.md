# Michele Osteopatia

Landing page estática para apresentação profissional de **Michele Santana Santos**, fisioterapeuta e osteopata em Salvador.

## Publicação no GitHub Pages

O projeto já inclui um workflow em `.github/workflows/pages.yml`. Depois de enviar os arquivos ao GitHub:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment → Source**, escolha **GitHub Actions**.
3. Faça um push para a branch `main` (ou execute o workflow manualmente em **Actions**).
4. O endereço publicado aparecerá no job de deploy e em **Settings → Pages**.

## Estrutura

```text
.
├── .github/workflows/pages.yml
├── assets/
│   ├── css/styles.css
│   ├── images/
│   └── js/main.js
├── 404.html
├── index.html
├── robots.txt
└── site.webmanifest
```

## Agendamento

Todos os CTAs de agendamento apontam para:

`https://sandwiche.me/micheleosteopatia`

## Imagens

Os arquivos usados pelo site estão dentro de `assets/images`, evitando dependência de hotlinks de sites externos. A foto principal também possui uma versão WebP otimizada para reduzir o peso da página.

## SEO depois de publicar

Quando você souber a URL definitiva (GitHub Pages ou domínio próprio), vale adicionar ao `<head>` do `index.html`:

- `<link rel="canonical" href="URL_DEFINITIVA">`
- `<meta property="og:url" content="URL_DEFINITIVA">`

Também será possível criar um `sitemap.xml` usando essa URL definitiva. Não deixei uma URL fictícia no projeto para evitar publicar metadados incorretos.

## Domínio próprio

Se futuramente usar um domínio como `micheleosteopatia.com.br`, configure-o em **Settings → Pages → Custom domain**. O DNS deve ser configurado no provedor do domínio.

## Desenvolvimento local

Como é um site estático, você pode abrir `index.html` diretamente. Para simular melhor o GitHub Pages, rode um servidor HTTP local, por exemplo:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.
