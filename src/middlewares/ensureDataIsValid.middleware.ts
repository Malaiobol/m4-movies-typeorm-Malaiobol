import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const ensureMovieDataIsValid = (schema: ZodTypeAny) => (req: Request, resp: Response, next:NextFunction) =>{
    const validatedData = schema.parse(req.body)

    req.body = validatedData;

    return next()
}

export default ensureMovieDataIsValid