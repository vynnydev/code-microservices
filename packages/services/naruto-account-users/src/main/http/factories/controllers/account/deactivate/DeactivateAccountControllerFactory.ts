import { IController } from '@presentation/protocols/IController'
import DeactivateAccountController from '@presentation/controllers/account/DeactivateAccountController'

import { makeDeactivateAccount } from '@main/http/factories/useCases/account/DeactivateAccountFactory'
import { makePublishAccountHandler } from '@infra/external/kafka/factories/account/PublishAccountHandlerFactory'
import { makeDeactivateAccountPresenter } from '@main/http/factories/presenters/DeactivateAccountPresenterFactory'

export const makeDeactivateAccountController = (): IController => {
  const deactivateAccountController = new DeactivateAccountController(
    makeDeactivateAccount(),
    makePublishAccountHandler(),
    makeDeactivateAccountPresenter(),
  )

  return deactivateAccountController
}