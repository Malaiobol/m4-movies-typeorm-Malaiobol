import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const ensureMovieExists = async (req: Request, resp: Response, next:NextFunction): Promise<void> =>{
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovie = await moviesRepository.findOne({
        where:{ 
            id: parseInt(req.params.id)
        }
    })

    if(!findMovie){
        throw new AppError('Movie not found', 404)
    }

    return next()
}

export default ensureMovieExists