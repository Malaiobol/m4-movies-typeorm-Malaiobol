import { Request, Response } from 'express'
import { 
    IMovie, 
    IMovieAllResult, 
    IMoviesList, 
    IMovieUpdate 
} from '../interfaces'
import { deleteMovieService } from '../services/movies/deleteMovies.service'
import { listAllMovies } from '../services/movies/listMovies.service'
import { updateMovieService } from '../services/movies/updateMovie.service'
import createMovieService from '../services/movies/createMovie.service'

const createMovieController = async (req: Request, resp: Response) =>{
    
    const movieData: IMovie = req.body 

    const newMovie = await createMovieService(movieData)

    return resp.status(201).json(newMovie)
}

const listAllMoviesController = async (req: Request, resp: Response) =>{
    
    const { page, perPage, sort } = req.query
    const order = (req.query.order)?.toString().toUpperCase()
    const allMovies: IMovieAllResult = await listAllMovies(page, perPage, order, sort)

    return resp.status(200).json(allMovies)
}

const deleteMovieController = async (req: Request, resp: Response) =>{
    
    await deleteMovieService(parseInt(req.params.id))
    
    return resp.status(204).json()
}

const updateUserController = async (req: Request, resp: Response) =>{

    const movieId: number = parseInt(req.params.id)
    const movieData: IMovieUpdate = req.body
    
    const updatedMovie = await updateMovieService(movieData, movieId)

    return resp.json(updatedMovie)
}


export {
    createMovieController,
    listAllMoviesController,
    deleteMovieController, 
    updateUserController
}