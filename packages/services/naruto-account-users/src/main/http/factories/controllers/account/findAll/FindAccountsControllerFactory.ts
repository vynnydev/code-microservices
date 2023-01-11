import { IController } from '@presentation/protocols/IController'
import FindAccountsController from '@presentation/controllers/account/FindAccountsController'

import { makeFindAccounts } from '@main/http/factories/useCases/account/FindAccountsFactory'
import { makeFindAccountsPresenter } from '@main/http/factories/presenters/FindAccountsPresenterFactory'

export const makeFindAccountsController = (): IController => {
  const findAccountsController = new FindAccountsController(
    makeFindAccounts(),
    makeFindAccountsPresenter(),
  )

  return findAccountsController
}