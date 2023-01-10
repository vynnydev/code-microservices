import Account from '@domain/models/account/Account'

import ICreateAccountDTO from '@domain/repositories/prisma/account/dtos/ICreateAccountDTO'
import IUpdateAccountDTO from '@domain/repositories/prisma/account/dtos/IUpdateAccountDTO'

export default interface IAccountRepository {
  create(data: ICreateAccountDTO): Promise<Account>
  findById(id: string): Promise<Account>
  findByAliasId(alias_id: string): Promise<Account>
  exists(email: string): Promise<boolean>
  findByEmail(email: string): Promise<Account>
  findAccounts(): Promise<Account[]>
  update(data: IUpdateAccountDTO): Promise<Account>
}