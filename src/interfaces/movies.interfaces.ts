import { movieSchema, resultMovieSchema } from '../schemas/movies.schemas';
import { z } from 'zod';

type IMovie = z.infer<typeof movieSchema>
type IMovieResult = z.infer<typeof resultMovieSchema>

export {
    IMovie,
    IMovieResult
}
