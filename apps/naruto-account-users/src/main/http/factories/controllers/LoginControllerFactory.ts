import { IController } from "@presentation/protocols/IController"
import LoginController from "@presentation/controllers/account/LoginController"

import authenticationFactory from "@main/http/factories/useCases/account/AuthenticationFactory"
import loginControllerValidationFactory from "@main/http/factories/controllers/LoginControllerValidationFactory"

const makeLoginController = (): IController => {
  const loginControllerValidation = loginControllerValidationFactory.makeLoginValidation()
  const authentication = authenticationFactory.makeAuthentication()

  const loginController = new LoginController(
    loginControllerValidation,
    authentication
  )

  return loginController
}

export default { makeLoginController }
