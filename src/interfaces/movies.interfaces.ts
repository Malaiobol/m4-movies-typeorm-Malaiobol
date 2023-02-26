import { 
    movieSchema, 
    resultMovieSchema,
    returnAllMoviesSchema 
} from '../schemas/movies.schemas';
import { z } from 'zod';

type IMovie = z.infer<typeof movieSchema>
type IMovieResult = z.infer<typeof resultMovieSchema>
type IMoviesList = z.infer<typeof returnAllMoviesSchema>

export {
    IMovie,
    IMovieResult,
    IMoviesList
}
