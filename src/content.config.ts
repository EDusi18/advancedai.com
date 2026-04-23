import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const briefings = defineCollection({
	loader: glob({ base: './src/content/briefings', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const analysis = defineCollection({
	loader: glob({ base: './src/content/analysis', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			heroImageAlt: z.string().optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = { briefings, analysis };
