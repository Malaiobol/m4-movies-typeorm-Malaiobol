import { Router } from 'express'
import ensureMovieExists from '../middlewares/ensureMovieExists.middleware'
import ensureMovieDataIsValid from '../middlewares/ensureDataIsValid.middleware'
import ensureMovieNameIsValid from '../middlewares/ensureMovieNameIsValid.middleware'
import { 
    movieSchema, 
    movieUpdateSchema 
} from '../schemas/movies.schemas'
import { 
    createMovieController, 
    deleteMovieController, 
    listAllMoviesController, 
    updateUserController 
} from '../controllers/movies.controllers'
const movieRouts: Router = Router()

movieRouts.post('', ensureMovieDataIsValid(movieSchema), ensureMovieNameIsValid, createMovieController)
movieRouts.get('', listAllMoviesController)
movieRouts.delete('/:id', ensureMovieExists, deleteMovieController)
movieRouts.patch('/:id', ensureMovieDataIsValid(movieUpdateSchema),  ensureMovieNameIsValid, ensureMovieExists, updateUserController)

export default movieRouts