import { IController } from '@presentation/protocols/IController'
import { IValidation } from '@presentation/protocols/IValidation'
import IPresenter from '@presentation/protocols/IPresenter'

import IRegisterAccount from '@domain/useCases/account/IRegisterAccount'
import { IPublishAccountHandler } from '@infra/external/kafka/protocols/IPublishAccountHandler'

import { clientError, conflict, IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp'
import { AccountAlreadyExistsError } from '@utils/errors/domain/useCases/AccountAlreadyExistsError'

export default class SignUpController implements IController {
  constructor(
    private readonly validation: IValidation,
    private readonly registerAccount: IRegisterAccount,
    private readonly kafkaPublishAccountHandler: IPublishAccountHandler,
    private readonly presenter: IPresenter,
  ) {}

  async handle({ body }: IHttpRequest): Promise<IHttpResponse> {
    try {
      const validationResult = this.validation.validate(body)

      if (validationResult.isLeft()) return clientError(validationResult.value)
  
      const { 
        name,
        avatar_url, 
        email, 
        cpf, 
        phone_number, 
        role,
        password 
      } = body
  
      const createdAccount = await this.registerAccount.register({
        name, 
        avatar_url, 
        email, 
        cpf, 
        phone_number, 
        role,
        password 
      })
  
      if (createdAccount.isLeft()) {
        const error = createdAccount.value
  
        switch (error.constructor) {
          case AccountAlreadyExistsError:
            return conflict(error)
          default:
            return clientError(error)
        }
      } else {
        await this.kafkaPublishAccountHandler.handle({
          topic: 'accounts.new-account',
          account: {
            id: createdAccount.value.id,
            alias_id: createdAccount.value.alias_id,
            name: createdAccount.value.name,
            avatar_url: createdAccount.value.avatar_url,
            email: createdAccount.value.email,
            cpf: createdAccount.value.cpf,
            phone_number: createdAccount.value.phone_number,
            password: createdAccount.value.password,
            role: createdAccount.value.role,
            created_at: createdAccount.value.created_at,
            updated_at: createdAccount.value.updated_at,
          }
        })
  
        return this.presenter.reply({ data: { account: createdAccount } })
      }
    } catch (err) {
      return fail(err)
    }
  }
}