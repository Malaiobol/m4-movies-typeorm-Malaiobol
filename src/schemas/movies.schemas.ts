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

const prevNextMoviesSchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    data: returnAllMoviesSchema
})

const movieUpdateSchema = movieSchema.partial()

export {
    movieSchema,
    resultMovieSchema,
    returnAllMoviesSchema,
    movieUpdateSchema,
    prevNextMoviesSchema
}