import { IController } from '@presentation/protocols/IController'
import LoginController from '@presentation/controllers/account/LoginController'

import { makeLoginValidation } from '@main/http/factories/controllers/account/login/LoginControllerValidationFactory'
import { makeAuthentication } from '@main/http/factories/useCases/account/AuthenticationFactory'

export const makeLoginController = (): IController => {
  const loginController = new LoginController(
    makeLoginValidation(),
    makeAuthentication()
  )

  return loginController
}
