import { IController } from "@presentation/protocols/IController"
import { IValidation } from "@presentation/protocols/IValidation"

import IAuthentication from "@domain/useCases/account/IAuthentication"

import { clientError, forbidden, IHttpResponse, success } from "@presentation/protocols/IHttp"
import { InvalidEmailOrPasswordError } from "@utils/errors/domain/useCases/InvalidEmailOrPasswordError"

type LoginControllerRequest = {
  email: string
  password: string
}

export default class LoginController implements IController {
  constructor(
    private readonly validation: IValidation,
    private readonly authentication: IAuthentication,
  ) {}

  async handle(request: LoginControllerRequest): Promise<IHttpResponse> {
    try {
      const validationResult = this.validation.validate(request)

      if (validationResult.isLeft()) return clientError(validationResult.value)

      const { email, password } = request

      const auth = await this.authentication.authenticate({
        email,
        password,
      })

      if (auth.isLeft()) {
        const error = auth.value
        
        switch (error.constructor) {
          case InvalidEmailOrPasswordError:
            return forbidden(error)
          default: 
            return clientError(error)
        }

      } else {
        const { token } = auth.value

        return success({ token })
      }
    } catch (err) {
      return fail(err)
    }
  }
}
