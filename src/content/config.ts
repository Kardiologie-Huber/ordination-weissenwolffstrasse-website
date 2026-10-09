// Import utilities from astro:content
import { defineCollection, z } from 'astro:content';

// Define your collection(s)
const pagesCollection = defineCollection({
  type: 'content', // or 'data' if you're storing data files
  // Optional: Add schema for content validation
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      slug: z.string().optional(),
      heroimage: image().optional(),
      heroimagedarkness: z.number().optional(),
      heroimageposition: z.string().optional(),
      herowash: z.number().min(0).max(1).optional(),
      herotextside: z.enum(['left', 'right']).optional(),
      herotitle: z.string().optional(),
      herosubtitle: z.string().optional(),
      herodescription: z.string().optional(),
      // Seiten der Praxen in der Ordination. Name, Fach und Website stehen in PRACTICES
      // (src/constants.ts); hier nur das Porträt.
      tenant: z
        .object({
          photo: image(),
        })
        .optional(),
    }),
});

// Export the collections object
export const collections = {
  pages: pagesCollection,
};
