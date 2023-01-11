import { IController } from '@presentation/protocols/IController'
import UpdateAccountController from '@presentation/controllers/account/UpdateAccountController'

import { makeUpdateAccountValidation } from '@main/http/factories/controllers/account/update/UpdateAccountControllerValidationFactory'
import { makeUpdateAccount } from '@main/http/factories/useCases/account/UpdateAccountFactory'
import { makePublishAccountHandler } from '@infra/external/kafka/factories/account/PublishAccountHandlerFactory'
import { makeUpdateAccountPresenter } from '@main/http/factories/presenters/UpdateAccountPresenterFactory'

export const makeUpdateAccountController = (): IController => {
  const updateAccountController = new UpdateAccountController(
    makeUpdateAccountValidation(),
    makeUpdateAccount(),
    makePublishAccountHandler(),
    makeUpdateAccountPresenter(),
  )

  return updateAccountController
}