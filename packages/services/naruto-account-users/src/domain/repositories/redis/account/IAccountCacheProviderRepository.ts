import Account from '@domain/models/account/Account'

export default interface IAccountCacheProviderRepository {
  auth(account: Account): Promise<void>
  findAccount(alias_id: string): Promise<Account | null>
  updateAccount(account: Account): Promise<void>
  deactivateAccount(account: Account): Promise<void>
  logout(token: string): Promise<void>
}