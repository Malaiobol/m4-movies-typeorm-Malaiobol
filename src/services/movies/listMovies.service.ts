import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities';
import { IMovieAllResult } from '../../interfaces/movies.interfaces';
import { prevNextMoviesSchema } from '../../schemas/movies.schemas';

const listAllMovies = async ( page: any, perPage: any, order: any, sort: any ) =>{
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)  
    if(!sort){
        order = 'ASC'
    } 
    page = parseInt(page) > 0 ? parseInt(page) : 1
    perPage = parseInt(perPage) > 0 && parseInt(perPage) <= 5 ? parseInt(perPage) : 5
    order = ['ASC', 'DESC'].includes(order) ? order : 'ASC'
    sort = ['price', 'duration', 'id'].includes(sort) ? sort : 'id'
    
    const movies = await moviesRepository.find({
        skip: perPage*(page - 1),
        take: perPage,
        order:{ [sort]: order },
    })

    const totalDataMovies = await moviesRepository.count()

    const allMoviesReturn: IMovieAllResult = {
        prevPage: page > 1 ? `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}` : null,
        nextPage:
            totalDataMovies > perPage * page
            ? `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}` : null,
        count: totalDataMovies,
        data: movies,
        
    }

    return prevNextMoviesSchema.parse(allMoviesReturn)
}  

export {
    listAllMovies
}