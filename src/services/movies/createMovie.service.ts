import { IMovie, IMovieResult } from '../../interfaces/movies.interfaces'
import { AppDataSource } from '../../data-source'
import { Movie } from '../../entities'
import { Repository } from 'typeorm'
import { resultMovieSchema } from '../../schemas/movies.schemas'

const createMovieService = async (movieData: IMovie): Promise<IMovieResult> =>{

    const movieRepository:  Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = movieRepository.create(movieData)

    await movieRepository.save(movie)

    const newMovie = resultMovieSchema.parse(movie)

    return newMovie
}

export default createMovieService