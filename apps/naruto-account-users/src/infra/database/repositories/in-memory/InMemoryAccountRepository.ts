import Account from '@domain/models/account/Account'
import ICreateAccountDTO from '@domain/repositories/account/dtos/ICreateAccountDTO'
import ILoadAccountByEmailResponse from '@domain/repositories/account/dtos/ILoadAccountByEmailResponse';
import IAccountRepository from '@domain/repositories/account/IAccountRepository'

export class InMemoryAccountRepository implements IAccountRepository {
  constructor(public items: Account[] = []) {}
  
  async create({
    alias_id,
    name,
    avatar_url,
    cpf,
    email,
    password,
    phone_number,
  }: ICreateAccountDTO): Promise<Account> {
    const createAccount = {
      id: Math.random().toString(),
      alias_id,
      name,
      avatar_url,
      cpf,
      email,
      password,
      phone_number,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(createAccount)

    return createAccount
  }

  async exists(email: string): Promise<boolean> {
    return this.items.some(account => account.email === email)
  }

  async findByEmail(email: string): Promise<Account> {
    return this.items.find(account => account.email === email)
  }

  async loadByEmail(email: string): Promise<ILoadAccountByEmailResponse> {
    return this.items.find(account => account.email === email)
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    const foundIndex = this.items.findIndex(account => account.id === id)

    if (foundIndex < 0) return undefined

    const foundAccount = this.items[foundIndex]

    Object.assign(foundAccount, token)

    this.items[foundIndex] = foundAccount
  }

  async update(account: Account): Promise<void> {
    const accountIndex = this.items.findIndex(findAccount => findAccount.id === account.id)

    this.items[accountIndex] = account
  }
}