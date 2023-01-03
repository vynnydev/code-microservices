import Account from '@domain/models/account/Account'
import ICreateAccountDTO from '@domain/repositories/account/dtos/ICreateAccountDTO'
import ILoadAccountByEmailResponse from './dtos/ILoadAccountByEmailResponse'

export default interface IAccountRepository {
  create(account: ICreateAccountDTO): Promise<Account>
  exists(email: string): Promise<boolean>
  findByEmail(email: string): Promise<Account>
  loadByEmail(email: string): Promise<ILoadAccountByEmailResponse>
  update(account: Account): Promise<void>
}