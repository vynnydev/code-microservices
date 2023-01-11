import { IController } from '@presentation/protocols/IController'
import FindAccountController from '@presentation/controllers/account/FindAccountController'

import { makeFindAccount } from '@main/http/factories/useCases/account/FindAccountFactory'
import { makeFindAccountPresenter } from '@main/http/factories/presenters/FindAccountPresenterFactory'

export const makeFindAccountController = (): IController => {
  const findAccountController = new FindAccountController(
    makeFindAccount(),
    makeFindAccountPresenter(),
  )

  return findAccountController
}