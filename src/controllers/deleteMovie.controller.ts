import { Request, Response } from 'express'
import { deleteMovieService } from '../services/deleteMovies.service'

const deleteMovieController = async (req: Request, resp: Response) =>{
    
    await deleteMovieService(parseInt(req.params.id))
    
    return resp.status(204).json()
}

export{
    deleteMovieController
}