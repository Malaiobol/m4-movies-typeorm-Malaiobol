import { 
    movieSchema, 
    resultMovieSchema,
    returnAllMoviesSchema,
} from '../schemas/movies.schemas';
import { z } from 'zod';
import { DeepPartial } from 'typeorm';

type IMovie = z.infer<typeof movieSchema>
type IMovieResult = z.infer<typeof resultMovieSchema>
type IMoviesList = z.infer<typeof returnAllMoviesSchema>
type IMovieUpdate = DeepPartial<IMovie>

export {
    IMovie,
    IMovieResult,
    IMoviesList,
    IMovieUpdate
}
