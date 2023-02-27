import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';

const listAllMovies = async ( req: any ) =>{

    let perPage: number = req.perPage === undefined || typeof(req.perPage) !== "string" ? 5 : req.perPage;
    let page: number = req.page === undefined || typeof(req.page) !== "string" ? 0 : req.page;
    if(perPage <= 0){
        perPage = 5
    };
    if(page <= 0 ){
        page = 0    
    };
    page = page * perPage;

    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const allMovies: Array<Movie> = await moviesRepository.find({
        take: perPage,
        skip: page,
        order:{
            name: 'ASC'
        }
    });

    return allMovies
}  

export {
    listAllMovies
}