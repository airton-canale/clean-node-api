import { AccountModel } from '../../../domain/models/account'
import {
  AddAccount,
  AddAccountModel,
} from '../../../domain/usecases/add-account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }
  accountModel = {
    id: '',
    name: '',
    email: '',
    password: '',
  }
  async add(account: AddAccountModel): Promise<AccountModel> {
    this.encrypter.encrypt(account.password)
    return new Promise((resolve) => resolve(this.accountModel))
  }
}
