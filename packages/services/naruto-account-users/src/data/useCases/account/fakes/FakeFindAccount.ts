import mockAccountModel from '@tests/domain/mocks/MockAccountModel'

import IFindAccount from '@domain/useCases/account/IFindAccount'
import { TFindAccountResponse } from '@domain/useCases/account/dtos/TFindAccountResponse'

import { right } from '@utils/helpers/Either'

export default class FakeFindAccount implements IFindAccount {
  public async find(account_alias_id: string): Promise<TFindAccountResponse> {
    const account = mockAccountModel.mock()

    return right(account)
  }
}