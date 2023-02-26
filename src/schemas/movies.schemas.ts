import { z } from 'zod'

const movieSchema = z.object({
    name: z.string().max(50),
    description: z.string().nullable().optional(),
    duration: z.number(),
    price: z.number()
})

const resultMovieSchema = movieSchema.extend({
    id: z.number()
})

const returnAllMoviesSchema = resultMovieSchema.array()

export {
    movieSchema,
    resultMovieSchema,
    returnAllMoviesSchema 
}