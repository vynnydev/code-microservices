import { IController } from '@presentation/protocols/IController'
import { IValidation } from '@presentation/protocols/IValidation'

import IAuthentication from '@domain/useCases/account/IAuthentication'

import { clientError, forbidden, IHttpRequest, IHttpResponse, success } from '@presentation/protocols/IHttp'
import { InvalidEmailOrPasswordOrIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidEmailOrPasswordOrIsNotActiveError'

export default class LoginController implements IController {
  constructor(
    private readonly validation: IValidation,
    private readonly authentication: IAuthentication,
  ) {}

  async handle({ body }: IHttpRequest): Promise<IHttpResponse> {
    try {
      const validationResult = this.validation.validate(body)

      if (validationResult.isLeft()) return clientError(validationResult.value)

      const { email, password } = body

      const auth = await this.authentication.authenticate({
        email,
        password,
      })

      if (auth.isLeft()) {
        const error = auth.value
        
        switch (error.constructor) {
          case InvalidEmailOrPasswordOrIsNotActiveError:
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
