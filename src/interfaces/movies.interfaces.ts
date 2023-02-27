import { 
    movieSchema, 
    resultMovieSchema,
    returnAllMoviesSchema,
} from '../schemas/movies.schemas';
import { z } from 'zod';
import { DeepPartial, Repository } from 'typeorm';
import { Movie } from '../entities';

type IMovie = z.infer<typeof movieSchema>
type IMovieResult = z.infer<typeof resultMovieSchema>
type IMoviesList = z.infer<typeof returnAllMoviesSchema>
type IMovieUpdate = DeepPartial<IMovie>
type iMovieRepo = Repository<Movie>

export {
    IMovie,
    IMovieResult,
    IMoviesList,
    IMovieUpdate,
    iMovieRepo
}
