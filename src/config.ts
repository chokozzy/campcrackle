export const SITE = {
  name: 'CampCrackle',
  tagline: 'Gear and setups for sleeping in the bed of your truck.',
  email: 'hello@campcrackle.com',
  // Pega aquí solo el valor "content" de la etiqueta meta que te da Pinterest al reclamar el sitio.
  pinterestVerify: '',
};

// Categorías válidas para el campo "category" de cada artículo.
// Una categoría solo aparece en el menú (y solo tiene página) cuando tiene al menos un artículo.
export const CATEGORIES = [
  { name: 'Sleep Setups', slug: 'sleep-setups', description: 'Mattresses, tents and bedding for a good night in the truck bed.' },
  { name: 'Camp Kitchen', slug: 'camp-kitchen', description: 'Stoves, cookware and tailgate kitchen setups.' },
  { name: 'Power & Fridges', slug: 'power-fridges', description: '12V fridges, power stations and keeping everything charged at camp.' },
  { name: 'Gift Guides', slug: 'gift-guides', description: 'Gift ideas truck campers will actually use.' },
] as const;

export const AFFILIATE_DISCLOSURE = 'As an Amazon Associate I earn from qualifying purchases.';
