import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './config';

const categoryNames = CATEGORIES.map((c) => c.name) as [string, ...string[]];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(categoryNames),
    // Nombre de un archivo dentro de src/assets, por ejemplo "hero.png" (se optimiza solo).
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { posts };
