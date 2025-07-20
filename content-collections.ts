import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";


const personality = defineCollection({
  name: "personality",
  directory: "content/",
  include: "**/*.mdx",
  schema: (z) => ({
    name: z.string(),
    slug: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    birth: z.string(),
    death: z.string().optional(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [personality],
});
