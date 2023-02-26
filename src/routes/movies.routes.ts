import { Router } from 'express';
import { deleteMovieController } from '../controllers/deleteMovie.controller';
import { listAllMoviesController } from '../controllers/listMovies.controller';
import { createMovieController } from '../controllers/movies.controllers';
import ensureMovieDataIsValid from '../middlewares/ensureDataIsValid.middleware';
import { ensureMovieExists } from '../middlewares/ensureMovieExists.middleware';
import { movieSchema } from '../schemas/movies.schemas';

const movieRouts: Router = Router()

movieRouts.post('', ensureMovieDataIsValid(movieSchema), createMovieController)
movieRouts.get('', listAllMoviesController)
movieRouts.delete('/:id', ensureMovieExists,deleteMovieController)
movieRouts.patch('/:id', ensureMovieExists, ensureMovieDataIsValid(movieSchema))

export default movieRouts