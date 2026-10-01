import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../config';

// Covers are looked up by file name in src/assets, so Astro only ships the optimized versions.
const assets = import.meta.glob<{ default: ImageMetadata }>('../assets/*.{png,jpg,jpeg,webp,avif}', { eager: true });

function resolveCover(file: string | undefined, postId: string) {
  if (!file) return undefined;
  const found = assets[`../assets/${file}`];
  if (!found) throw new Error(`Post "${postId}": cover "${file}" was not found in src/assets/`);
  return found.default;
}

export async function getPosts() {
  const posts = await getCollection('posts');
  return posts
    .map((post) => ({ ...post, data: { ...post.data, cover: resolveCover(post.data.cover, post.id) } }))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const getCategory = (name: string) => CATEGORIES.find((c) => c.name === name)!;
export const categoryUrl = (name: string) => `/category/${getCategory(name).slug}`;
export const postUrl = (post: { id: string }) => `/${post.id}`;

// Only the categories that have at least one post, in the order defined in config.
export async function getActiveCategories() {
  const used = new Set((await getPosts()).map((p) => p.data.category));
  return CATEGORIES.filter((c) => used.has(c.name));
}
