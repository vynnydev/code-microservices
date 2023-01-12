import { TFindAccountResponse } from './dtos/TFindAccountResponse'

export default interface IFindAccount {
  find(alias_id: string): Promise<TFindAccountResponse>
}