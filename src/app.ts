import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import movieRouts from './routes/movies.routes'

const app: Application = express()
app.use(express.json())
app.use('/movies', movieRouts)
app.use(handleErrors)
export default app