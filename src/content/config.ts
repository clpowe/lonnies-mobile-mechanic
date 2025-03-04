import { defineCollection, z } from "astro:content";

const features = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

const services = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      link: z.string(),
      image: image(),
    }),
});

export const collections = { features, services };
