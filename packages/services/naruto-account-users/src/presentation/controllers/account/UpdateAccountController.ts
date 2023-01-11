import { IController } from '@presentation/protocols/IController'
import { IValidation } from '@presentation/protocols/IValidation'
import IPresenter from '@presentation/protocols/IPresenter'

import IUpdateAccount from '@domain/useCases/account/IUpdateAccount'
import { IPublishAccountHandler } from '@infra/external/kafka/protocols/IPublishAccountHandler'

import { clientError, forbidden, IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp'
import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError'

export default class UpdateAccountController implements IController {
  constructor(
    private readonly validation: IValidation,
    private readonly updateAccount: IUpdateAccount,
    private readonly kafkaPublishAccountHandler: IPublishAccountHandler,
    private readonly presenter: IPresenter,
  ) {}

  async handle({ body, params }: IHttpRequest): Promise<IHttpResponse> {
    try {
      const validationResult = this.validation.validate(body)

      if (validationResult.isLeft()) return clientError(validationResult.value)

      const { account_alias_id } = params
      const {
        name,
        avatar_url, 
        email, 
        cpf, 
        phone_number, 
        role,
        password 
      } = body 

      const updatedAccount = await this.updateAccount.update({
        account_alias_id,
        data: {
          name,
          avatar_url, 
          email, 
          cpf, 
          phone_number, 
          role,
          password 
        }
      })

      if (updatedAccount.isLeft()) {
        const error = updatedAccount.value
        
        switch (error.constructor) {
          case InvalidAliasIdOrAccountIsNotActiveError:
            return forbidden(error)
          default: 
            return clientError(error)
        }
      } else {
        await this.kafkaPublishAccountHandler.handle({
          topic: 'accounts.change-account',
          account: {
            id: updatedAccount.value.id,
            alias_id: updatedAccount.value.alias_id,
            name: updatedAccount.value.name,
            avatar_url: updatedAccount.value.avatar_url,
            email: updatedAccount.value.email,
            cpf: updatedAccount.value.cpf,
            phone_number: updatedAccount.value.phone_number,
            password: updatedAccount.value.password,
            role: updatedAccount.value.role,
            created_at: updatedAccount.value.created_at,
            updated_at: updatedAccount.value.updated_at,
          }
        })

        return this.presenter.reply({ data: { account: updatedAccount } })
      }
    } catch(err) {
      fail(err)
    }
  }
}