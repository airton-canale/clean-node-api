import { LoginController } from './login'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = new LoginController()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(await httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
  test('Should return 400 if no password is provided', async () => {
    const sut = new LoginController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(await httpResponse).toEqual(badRequest(new MissingParamError('password')))
  })
})
