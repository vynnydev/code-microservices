import IRegisterAccountDTO from './dtos/IRegisterAccountDTO'
import { TRegisterAccountResponse } from './dtos/TRegisterAccountResponse'

export default interface IRegisterAccount {
  register(data: IRegisterAccountDTO): Promise<TRegisterAccountResponse>
}