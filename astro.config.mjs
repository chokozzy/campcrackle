import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Marca los enlaces de afiliado como exige Google y los abre en otra pestaña.
function affiliateLinks() {
  const isAffiliate = (href) => /amzn\.to|amazon\.com/.test(href || '');
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && isAffiliate(node.properties?.href)) {
      node.properties.rel = ['sponsored', 'nofollow', 'noopener'];
      node.properties.target = '_blank';
    }
    (node.children || []).forEach(walk);
  };
  return () => (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://campcrackle.com',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [affiliateLinks()] },
});
