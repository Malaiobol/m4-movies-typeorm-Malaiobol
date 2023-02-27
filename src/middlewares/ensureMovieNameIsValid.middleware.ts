import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const ensureMovieIsUnique = async (req: Request, resp: Response, next:NextFunction): Promise<void> =>{
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovie = moviesRepository.findOne({
        where:{ 
            name: req.body.name
        }
    })

    console.log(findMovie)

    if(!findMovie){
      return next()  
    } 
        
    throw new AppError('Movie already exists.', 409)
}

export default ensureMovieIsUnique