import { Request, Response } from 'express'
import { IMovie, IMovieUpdate } from '../interfaces/movies.interfaces'
import { deleteMovieService } from '../services/deleteMovies.service'
import { listAllMovies } from '../services/listMovies.service'
import { updateMovieService } from '../services/updateMovie.service'
import createMovieService from '../services/createMovie.service'

const createMovieController = async (req: Request, resp: Response) =>{
    
    const movieData: IMovie = req.body 

    const newMovie = await createMovieService(movieData)

    return resp.status(201).json(newMovie)
}

const listAllMoviesController = async (req: Request, resp: Response) =>{
    
    const movies = await listAllMovies()
    return resp.status(200).json(movies)
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