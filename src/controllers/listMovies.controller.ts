import { Request, Response } from "express";
import { listAllMovies } from "../services/listMovies.service";

const listAllMoviesController = async (req: Request, resp: Response) =>{

    const movies = await listAllMovies(req)

    return resp.status(200).json(movies)

}

export{
    listAllMoviesController
}