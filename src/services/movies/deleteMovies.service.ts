import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Movie } from '../../entities'

const deleteMovieService = async (movieId: number): Promise<void> =>{
    const moviesRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const movie = await moviesRepository.findOne({
        where: {
            id: movieId
        }
    })

    await moviesRepository.remove(movie!)
}

export {
    deleteMovieService
}