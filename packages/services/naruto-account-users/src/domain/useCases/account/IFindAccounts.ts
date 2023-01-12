import { TFindAccountsResponse } from './dtos/TFindAccountsResponse'

export default interface IFindAccounts {
  find(): Promise<TFindAccountsResponse>
}