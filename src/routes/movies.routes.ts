import { Router } from 'express';
import ensureMovieDataIsValid from '../middlewares/ensureDataIsValid.middleware';
import { movieSchema } from '../schemas/movies.schemas';

const movieRouts: Router = Router()

movieRouts.post('', ensureMovieDataIsValid(movieSchema))

export default movieRouts