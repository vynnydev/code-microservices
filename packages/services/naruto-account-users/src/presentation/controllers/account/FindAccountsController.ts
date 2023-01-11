import { IController } from '@presentation/protocols/IController'
import IPresenter from '@presentation/protocols/IPresenter'

import IFindAccounts from '@domain/useCases/account/IFindAccounts'

import { clientError, forbidden, IHttpResponse } from '@presentation/protocols/IHttp'
import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError'

export default class FindAccountsController implements IController {
  constructor(
    private readonly findAccounts: IFindAccounts,
    private readonly presenter: IPresenter,
  ) {}

  async handle(): Promise<IHttpResponse> {
    try {
      const foundAccounts = await this.findAccounts.find()

      if (foundAccounts.isLeft()) {
        const error = foundAccounts.value
        
        switch (error.constructor) {
          case InvalidAliasIdOrAccountIsNotActiveError:
            return forbidden(error)
          default: 
            return clientError(error)
        }
      } else {

        return this.presenter.reply({ data: { account: foundAccounts } })
      }
    } catch (err) {
      return fail(err)
    }
  } 
}