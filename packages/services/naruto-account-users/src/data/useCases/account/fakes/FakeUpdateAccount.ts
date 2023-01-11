import mockAccountModel from '@tests/domain/mocks/MockAccountModel'

import IUpdateAccount from '@domain/useCases/account/IUpdateAccount'
import IUpdateAccountDTO from '@domain/useCases/account/dtos/IUpdateAccountDTO'
import { TUpdateAccountResponse } from '@domain/useCases/account/dtos/TUpdateAccountResponse'

import { right } from '@utils/helpers/Either'

export default class FakeUpdateAccount implements IUpdateAccount {
  public async update(data: IUpdateAccountDTO): Promise<TUpdateAccountResponse> {
    const account = mockAccountModel.mock()

    return right(account)
  }
}