import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			heroImageAlt: z.string().optional(),
			category: z.string(),
			tags: z.array(z.string()).default([]),
			affiliateLinks: z
				.array(
					z.object({
						name: z.string(),
						url: z.string(),
						description: z.string().optional(),
					}),
				)
				.optional(),
		}),
});

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

export const collections = { blog, briefings, analysis };
