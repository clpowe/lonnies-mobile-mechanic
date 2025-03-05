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

const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    quote: z.string(),
  }),
});

const faq = defineCollection({
  type: "data",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = { features, services, testimonials, faq };
