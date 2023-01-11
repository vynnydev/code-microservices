import { IHttpResponse } from '@presentation/protocols/IHttp'
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO'
import IPresenter from '@presentation/protocols/IPresenter'

export default class FindAccountsPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const { accounts } = data

    return {
      status_code: 201,
      body: { status: 'success', accounts },
    }
  }
}