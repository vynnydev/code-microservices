import Account from '@domain/models/account/Account'
import IAccountRepository from '@domain/repositories/account/IAccountRepository'

import ICreateAccountDTO from '@domain/repositories/account/dtos/ICreateAccountDTO'
import IUpdateAccountDTO from '@domain/repositories/account/dtos/IUpdateAccountDTO'

export class InMemoryAccountRepository implements IAccountRepository {
  constructor(public items: Account[] = []) {}
  
  async create({
    alias_id,
    name,
    avatar_url,
    cpf,
    email,
    password,
    is_active,
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
      is_active,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(createAccount)

    return createAccount
  }

  async findByAliasId(alias_id: string): Promise<Account> {
    return this.items.find(account => account.alias_id === alias_id)
  }

  async exists(email: string): Promise<boolean> {
    return this.items.some(account => account.email === email)
  }

  async findByEmail(email: string): Promise<Account> {
    return this.items.find(account => account.email === email)
  }

  async update({ id, data }: IUpdateAccountDTO): Promise<Account> {
    const foundIndex = this.items.findIndex(account => account.id === id)

    if (foundIndex < 0) return undefined

    const foundAccount = this.items[foundIndex]

    Object.assign(foundAccount, data)

    this.items[foundIndex] = foundAccount

    return foundAccount
  }
}