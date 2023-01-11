import { IController } from '@presentation/protocols/IController'
import IPresenter from '@presentation/protocols/IPresenter'

import IDeactivateAccount from '@domain/useCases/account/IDeactivateAccount'
import { IPublishAccountHandler } from '@infra/external/kafka/protocols/IPublishAccountHandler'

import { clientError, forbidden, IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp'
import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError'

export default class DeactivateAccountController implements IController {
  constructor(
    private readonly deactivateAccount: IDeactivateAccount,
    private readonly kafkaPublishAccountHandler: IPublishAccountHandler,
    private readonly presenter: IPresenter,
  ) {}

  async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { account_alias_id } = params

      const deactivatedAccount = await this.deactivateAccount.deactivate(account_alias_id)

      if (deactivatedAccount.isLeft()) {
        const error = deactivatedAccount.value
        
        switch (error.constructor) {
          case InvalidAliasIdOrAccountIsNotActiveError:
            return forbidden(error)
          default: 
            return clientError(error)
        }
      } else {
        await this.kafkaPublishAccountHandler.handle({
          topic: 'accounts.deactivate-account',
          account: {
            id: deactivatedAccount.value.id,
            alias_id: deactivatedAccount.value.alias_id,
            name: deactivatedAccount.value.name,
            avatar_url: deactivatedAccount.value.avatar_url,
            email: deactivatedAccount.value.email,
            cpf: deactivatedAccount.value.cpf,
            phone_number: deactivatedAccount.value.phone_number,
            password: deactivatedAccount.value.password,
            role: deactivatedAccount.value.role,
            created_at: deactivatedAccount.value.created_at,
            updated_at: deactivatedAccount.value.updated_at,
          }
        })

        return this.presenter.reply({ data: { account: deactivatedAccount } })
      }
    } catch(err) {
      fail(err)
    }
  }
}