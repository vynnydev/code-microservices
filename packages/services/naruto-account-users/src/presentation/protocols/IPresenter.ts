import { IHttpResponse } from '@presentation/protocols/IHttp'
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO'

export default interface IPresenter {
  reply(data: IReplyDTO): Promise<IHttpResponse>
}
