import { Router } from 'express';
import { listAllMoviesController } from '../controllers/listMovies.controller';
import { createMovieController } from '../controllers/movies.controllers';
import ensureMovieDataIsValid from '../middlewares/ensureDataIsValid.middleware';
import { movieSchema } from '../schemas/movies.schemas';

const movieRouts: Router = Router()

movieRouts.post('', ensureMovieDataIsValid(movieSchema), createMovieController)
movieRouts.get('', listAllMoviesController)

export default movieRouts