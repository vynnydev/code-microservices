import mockAccountModel from '@tests/domain/mocks/MockAccountModel'

import { IHttpResponse } from '@presentation/protocols/IHttp'
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO'
import IPresenter from '@presentation/protocols/IPresenter'

export default class FakeUpdateAccountPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const account = mockAccountModel.mock()

    return {
      status_code: 200,
      body: { status: 'success', account },
    }
  }
}