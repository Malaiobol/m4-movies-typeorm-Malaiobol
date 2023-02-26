import { Router } from 'express'
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
import ensureMovieExists from '../middlewares/ensureMovieExists.middleware'
import ensureMovieDataIsValid from '../middlewares/ensureDataIsValid.middleware'
import ensureMovieIsUnique from '../middlewares/ensureMovieNameIsValid.middleware'

const movieRouts: Router = Router()

movieRouts.post('', ensureMovieDataIsValid(movieSchema), ensureMovieIsUnique, createMovieController)
movieRouts.get('', listAllMoviesController)
movieRouts.delete('/:id', ensureMovieExists, deleteMovieController)
movieRouts.patch('/:id', ensureMovieDataIsValid(movieUpdateSchema), ensureMovieIsUnique, ensureMovieExists, updateUserController)

export default movieRouts