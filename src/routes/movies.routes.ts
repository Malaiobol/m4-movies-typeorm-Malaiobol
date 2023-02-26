import { Router } from 'express';
import { createMovieController } from '../controllers/movies.controllers';
import ensureMovieDataIsValid from '../middlewares/ensureDataIsValid.middleware';
import { movieSchema } from '../schemas/movies.schemas';

const movieRouts: Router = Router()

movieRouts.post('', ensureMovieDataIsValid(movieSchema), createMovieController)

export default movieRouts