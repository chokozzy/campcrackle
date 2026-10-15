import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './config';

const categoryNames = CATEGORIES.map((c) => c.name) as [string, ...string[]];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(categoryNames),
    // Nombre de un archivo dentro de src/assets, por ejemplo "hero.png" (se optimiza solo).
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Qué parte de la portada se ve al recortarla (CSS object-position), por ejemplo "50% 68%". Por defecto el centro.
    coverPosition: z.string().optional(),
    // Foto de ambiente bajo una H2: "heading" es el texto exacto del título, "image" un archivo dentro de src/assets/guides.
    sections: z.array(z.object({ heading: z.string(), image: z.string(), alt: z.string() })).optional(),
  }),
});

export const collections = { posts };
