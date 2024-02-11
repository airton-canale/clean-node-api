import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
} from './db-add-account-protocols'

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
