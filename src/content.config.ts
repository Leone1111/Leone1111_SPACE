import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["ideas", "books", "projects", "tools", "research"]),
    summary: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { notes };
