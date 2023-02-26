import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { IMovieResult, IMovieUpdate } from "../interfaces/movies.interfaces"
import { resultMovieSchema } from "../schemas/movies.schemas"

const updateMovieService = async (movieData: IMovieUpdate, movieId: number): Promise<IMovieResult> =>{

    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)

    const oldMovieData = await movieRepo.findOneBy({
        id: movieId
    })

    const movie = movieRepo.create({
        ...oldMovieData,
        ...movieData
    })

    await movieRepo.save(movie)

    const updatedMovie = resultMovieSchema.parse(movie)

    return updatedMovie
}

export {
    updateMovieService
}