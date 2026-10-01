import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Marca los enlaces de afiliado como exige Google y los abre en otra pestaña.
function affiliateLinks() {
  const isAffiliate = (href) => /amzn\.to|link\.amazon|amazon\.com/.test(href || '');
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && isAffiliate(node.properties?.href)) {
      node.properties.rel = ['sponsored', 'nofollow', 'noopener'];
      node.properties.target = '_blank';
    }
    (node.children || []).forEach(walk);
  };
  return () => (tree) => walk(tree);
}

// Para artículos en Markdown simple (los .mdx usan <ProductCard>).
// Envuelve cada producto (un h3 y lo que le sigue hasta el próximo título) en
// <section class="product"> para darle estilo de tarjeta. Solo aplica si el
// bloque contiene un enlace de afiliado, así que debe ir después de affiliateLinks.
function productCards() {
  const isHeading = (node, tags) => node.type === 'element' && tags.includes(node.tagName);
  const hasAffiliateLink = (node) =>
    (node.tagName === 'a' && node.properties?.rel?.includes('sponsored')) || (node.children || []).some(hasAffiliateLink);
  return () => (tree) => {
    const out = [];
    const nodes = tree.children;
    for (let i = 0; i < nodes.length; i++) {
      if (!isHeading(nodes[i], ['h3'])) {
        out.push(nodes[i]);
        continue;
      }
      let end = i + 1;
      while (end < nodes.length && !isHeading(nodes[end], ['h1', 'h2', 'h3'])) end++;
      const group = nodes.slice(i, end);
      if (group.some(hasAffiliateLink)) {
        out.push({ type: 'element', tagName: 'section', properties: { className: ['product'] }, children: group });
      } else {
        out.push(...group);
      }
      i = end - 1;
    }
    tree.children = out;
  };
}

export default defineConfig({
  site: 'https://campcrackle.com',
  integrations: [mdx(), sitemap()],
  markdown: { rehypePlugins: [affiliateLinks(), productCards()] },
});
