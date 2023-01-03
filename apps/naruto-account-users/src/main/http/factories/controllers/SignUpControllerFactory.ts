import { IController } from "@presentation/protocols/IController"
import SignUpController from "@presentation/controllers/account/SignUpController"

import signUpControllerValidationFactory from "@main/http/factories/controllers/SignUpControllerValidationFactory"
import registerAccountFactory from "@main/http/factories/useCases/account/RegisterAccountFactory"
import publishAccountHandlerFactory from "@infra/external/kafka/factories/PublishAccountHandlerFactory"
import authenticationFactory from "@main/http/factories/useCases/account/AuthenticationFactory"
import signUpPresenterFactory from "@main/http/factories/presenters/SignUpPresenterFactory"

const makeSignUpController = (): IController => {
  const signUpControllerValidation = signUpControllerValidationFactory.makeSignUpValidation()
  const registerAccount = registerAccountFactory.makeRegisterAccount()
  const publishAccountHandler = publishAccountHandlerFactory.makePublishAccountHandler()
  const authentication = authenticationFactory.makeAuthentication()
  const signUpPresenter = signUpPresenterFactory.makeSignUpPresenter()

  const signUpController = new SignUpController(
    signUpControllerValidation,
    registerAccount,
    publishAccountHandler,
    authentication,
    signUpPresenter,
  )

  return signUpController
}

export default { makeSignUpController }