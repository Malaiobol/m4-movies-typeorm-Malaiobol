import {  Request, Response } from "express";
import { IMovieUpdate } from "../interfaces/movies.interfaces";

const updateUserController = async (req: Request, resp: Response) =>{
    return resp.status(200).json()
}

export {
    updateUserController
}