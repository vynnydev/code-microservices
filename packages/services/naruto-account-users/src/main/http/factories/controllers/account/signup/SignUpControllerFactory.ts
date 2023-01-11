import { IController } from '@presentation/protocols/IController'
import SignUpController from '@presentation/controllers/account/SignUpController'

import { makeSignUpValidation } from '@main/http/factories/controllers/account/signup/SignUpControllerValidationFactory'
import { makeRegisterAccount } from '@main/http/factories/useCases/account/RegisterAccountFactory'
import { makePublishAccountHandler } from '@infra/external/kafka/factories/account/PublishAccountHandlerFactory'
import { makeSignUpPresenter } from '@main/http/factories/presenters/SignUpPresenterFactory'

export const makeSignUpController = (): IController => {
  const signUpController = new SignUpController(
    makeSignUpValidation(),
    makeRegisterAccount(),
    makePublishAccountHandler(),
    makeSignUpPresenter(),
  )

  return signUpController
}