import { Request, Response } from 'express'
import { IMovie } from '../interfaces/movies.interfaces'
import createMovieService from '../services/createMovie.service'

const createMovieController = async (req: Request, resp: Response) =>{
    
    const movieData: IMovie = req.body 

    const newMovie = await createMovieService(movieData)

    return resp.status(201).json(newMovie)
}

export {
    createMovieController
}