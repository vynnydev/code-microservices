import mockAccountModel from '@tests/domain/mocks/MockAccountModel'

import IRegisterAccount from '@domain/useCases/account/IRegisterAccount'
import IRegisterAccountDTO from '@domain/useCases/account/dtos/IRegisterAccountDTO'
import { TRegisterAccountResponse } from '@domain/useCases/account/dtos/TRegisterAccountResponse'

import { right } from '@utils/helpers/Either'

export default class FakeRegisterAccount implements IRegisterAccount {
  public async register(data: IRegisterAccountDTO): Promise<TRegisterAccountResponse> {
    const account = mockAccountModel.mock()

    return right(account)
  }
}