import IPresenter from '@presentation/protocols/IPresenter'

import UpdateAccountPresenter from '@presentation/presenters/account/UpdateAccountPresenter'

export const makeUpdateAccountPresenter = (): IPresenter => {
  const updateAccountPresenter = new UpdateAccountPresenter()

  return updateAccountPresenter
}