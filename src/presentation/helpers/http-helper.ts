import { HttpResponse } from '../protocols/http'
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400, body: error
})
export class ServerError extends Error {
  constructor () {
    super('Internal server error')
    this.name = 'ServerError'
  }
}
