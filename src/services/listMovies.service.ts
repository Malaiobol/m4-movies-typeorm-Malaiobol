import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';
import { IMoviesList } from '../interfaces/movies.interfaces';
import { resultMovieSchema } from '../schemas/movies.schemas';

const listAllMovies = async (): Promise<IMoviesList> =>{

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const findMovies: Array<Movie> = await moviesRepository.find({
        take: 3,
        skip: 2,
        order:{
            name: 'ASC'
        }
    });
    
    const movies = resultMovieSchema.parse(findMovies)

    return movies
}  

export {
    listAllMovies
}