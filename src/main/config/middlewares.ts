import { Express } from 'express'
import { bodyParser } from '../middlewares/boddy-parser'
import { cors } from '../middlewares/cors'
import { contentType } from '../middlewares/content-type'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
