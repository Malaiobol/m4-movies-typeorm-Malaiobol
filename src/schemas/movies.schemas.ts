import { z } from 'zod'

const movieSchema = z.object({
    duration: z.number().gt(0),
    name: z.string().min(1).max(50),
    description: z.string().nullable().optional(),
    price: z.number().int(),
})

const resultMovieSchema = movieSchema.extend({
    id: z.number()
})

const returnAllMoviesSchema = resultMovieSchema.array()

const movieUpdateSchema = movieSchema.partial()

export {
    movieSchema,
    resultMovieSchema,
    returnAllMoviesSchema,
    movieUpdateSchema
}