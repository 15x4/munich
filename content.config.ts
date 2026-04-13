import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    events: defineCollection({
      type: 'page',
      source: 'events/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        time: z.string().optional(),
        venue: z.string().optional(),
        status: z.enum(['upcoming', 'past']),
        talks: z
          .array(
            z.object({
              title: z.string(),
              speaker: z.string(),
              description: z.string().optional(),
            })
          )
          .optional(),
      }),
    }),
    team: defineCollection({
      type: 'page',
      source: 'team/**',
      schema: z.object({
        title: z.string(),
        role: z.string().optional(),
        order: z.number().optional(),
      }),
    }),
  },
})
