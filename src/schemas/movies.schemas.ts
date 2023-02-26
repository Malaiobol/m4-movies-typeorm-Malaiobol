import { z } from 'zod'

const movieSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    duration: z.number(),
    price: z.number()
})

const resultMovieSchema = movieSchema.extend({
    id: z.number().min(50)
})

export {
    movieSchema,
    resultMovieSchema
}