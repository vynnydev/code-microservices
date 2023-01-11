import mockAccountModel from '@tests/domain/mocks/MockAccountModel'

import DeactivateAccountPresenter from '@presentation/presenters/account/DeactivateAccountPresenter'

let createAccountPresenter: DeactivateAccountPresenter

describe('DeactivateAccountPresenter', () => {
  beforeEach(() => {
    createAccountPresenter = new DeactivateAccountPresenter()
  })

  it('should be able to reply data on success', async () => {
    const account = mockAccountModel.mock()

    const httpResponse = await createAccountPresenter.reply({
      data: { account },
    })

    expect(httpResponse.status_code).toBe(200)
    expect(httpResponse.body).toEqual({
      status: 'success',
      account: {
        id: account.id,
        alias_id: account.alias_id,
        name: account.name,
        avatar_url: account.avatar_url,
        email: account.email,
        cpf: account.cpf,
        phone_number: account.phone_number,
        password: account.password,
        is_active: account.is_active,
        created_at: account.created_at,
        updated_at: account.updated_at,
      },
    })
  })
})