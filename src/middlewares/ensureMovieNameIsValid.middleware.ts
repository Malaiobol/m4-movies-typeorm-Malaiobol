import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const ensureMovieIsUnique = async (req: Request, resp: Response, next:NextFunction): Promise<void> =>{
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovie = await moviesRepository.findOne({
        where:{ 
            name: req.body.name
        }
    })

    if(!findMovie){
      return next()  
    } else{
        throw new AppError('Movie already exists.', 409)
    }
}

export default ensureMovieIsUnique