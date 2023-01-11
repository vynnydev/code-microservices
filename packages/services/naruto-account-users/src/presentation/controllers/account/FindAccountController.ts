import { IController } from '@presentation/protocols/IController'
import IPresenter from '@presentation/protocols/IPresenter'

import IFindAccount from '@domain/useCases/account/IFindAccount'

import { clientError, forbidden, IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp'
import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError'

export default class FindAccountController implements IController {
  constructor(
    private readonly findAccount: IFindAccount,
    private readonly presenter: IPresenter,
  ) {}

  async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { account_alias_id } = params

      const foundAccount = await this.findAccount.find(account_alias_id)

      if (foundAccount.isLeft()) {
        const error = foundAccount.value
        
        switch (error.constructor) {
          case InvalidAliasIdOrAccountIsNotActiveError:
            return forbidden(error)
          default: 
            return clientError(error)
        }
      } else {

        return this.presenter.reply({ data: { account: foundAccount } })
      }
    } catch (err) {
      return fail(err)
    }
  } 
}
