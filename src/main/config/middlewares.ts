import { Express } from 'express'
import { bodyParser } from '../middlewares/boddy-parser'

export default (app: Express): void => {
  app.use(bodyParser)
}
