# CampCrackle

Sitio de afiliados en Astro. Se despliega gratis en Cloudflare con cada `git push`.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Primer commit: CampCrackle"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/campcrackle.git
git push -u origin main
```

## Desplegar en Cloudflare

1. En el panel de Cloudflare: **Workers & Pages > Create > Pages > Connect to Git**, y elige el repo `campcrackle`.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Cuando termine el primer despliegue: **Custom domains > Set up a custom domain** y escribe `campcrackle.com`. Agrega también `www.campcrackle.com`.

Desde ahí, cada `git push` a `main` publica los cambios solo.

## Pendientes antes de aplicar a Amazon

- [ ] `src/pages/about.astro`: reemplazar `[NAME]` por tu nombre o un seudónimo.
- [ ] Correo `hello@campcrackle.com`: actívalo gratis con **Email Routing** de Cloudflare para que reenvíe a tu correo personal.
- [ ] Agregar al artículo 2 o 3 fotos propias en `public/images/` y referenciarlas en el Markdown (ojo: lo que está en `public/` se publica sin optimizar, súbelas ya comprimidas).

## Cuando te aprueben en Amazon Associates

En `src/content/posts/gifts-for-truck-campers.md` reemplaza cada `https://amzn.to/REPLACE-N` por tu enlace de SiteStripe. Los enlaces de Amazon se marcan solos como `sponsored nofollow` y se muestran como botón.

## Cuando reclames el sitio en Pinterest

Pinterest te da una etiqueta así:

```html
<meta name="p:domain_verify" content="abc123..."/>
```

Copia solo el valor de `content` en `pinterestVerify` dentro de `src/config.ts`, haz push y luego da clic en **Verificar** en Pinterest.

## Agregar un artículo nuevo

Crea `src/content/posts/nombre-del-articulo.md` (el nombre del archivo es la URL) con este encabezado:

```yaml
---
title: "Título del artículo"
description: "Resumen de una o dos frases."
date: 2026-10-01
category: "Gift Guides"   # Sleep Setups | Camp Kitchen | Power & Fridges | Gift Guides
cover: hero.png            # opcional: nombre de un archivo dentro de src/assets/
coverAlt: "Descripción de la foto"   # opcional
---
```

Aparece solo en la portada y en la página de su categoría. Una categoría se muestra en el menú (y tiene página propia en `/category/...`) solo cuando tiene al menos un artículo. La lista de categorías está en `src/config.ts`.

Las fotos de portada van en `src/assets/`; Astro las convierte a AVIF/WebP en varios tamaños. No uses imágenes de producto de Amazon.

Dentro del artículo, cada producto es un `###` seguido de sus párrafos y el enlace de Amazon: se muestra solo como tarjeta con botón.

## Logo y favicons

Los archivos `public/logo-*.svg`, `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` e `icon-512.png` se generan desde `design/Logo.svg` y `design/logo2.png`. Si cambias esos originales, vuelve a generarlos con:

```bash
node scripts/build-brand-assets.mjs
```
