import { TDeactivateAccountResponse } from './dtos/TDeactivateAccountResponse'

export default interface IDeactivateAccount {
  deactivate(alias_id: string): Promise<TDeactivateAccountResponse>
}