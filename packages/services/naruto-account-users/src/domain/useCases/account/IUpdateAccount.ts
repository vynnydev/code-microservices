import { TUpdateAccountResponse } from '@domain/useCases/account/dtos/TUpdateAccountResponse'
import IUpdateAccountDTO from './dtos/IUpdateAccountDTO'

export default interface IUpdateAccount {
  update(data: IUpdateAccountDTO): Promise<TUpdateAccountResponse>
}