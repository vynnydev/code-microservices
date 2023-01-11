import mockAccountModel from '@tests/domain/mocks/MockAccountModel'

import IDeactivateAccount from '@domain/useCases/account/IDeactivateAccount'
import { TDeactivateAccountResponse } from '@domain/useCases/account/dtos/TDeactivateAccountResponse'

import { right } from '@utils/helpers/Either'

export default class FakeDeactivateAccount implements IDeactivateAccount {
  public async deactivate(account_alias_id: string): Promise<TDeactivateAccountResponse> {
    const account = mockAccountModel.mock()

    return right(account)
  }
}