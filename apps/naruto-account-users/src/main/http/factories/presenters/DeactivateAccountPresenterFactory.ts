import IPresenter from '@presentation/protocols/IPresenter'

import DeactivateAccountPresenter from '@presentation/presenters/account/DeactivateAccountPresenter'

export const makeDeactivateAccountPresenter = (): IPresenter => {
  const deactivateAccountPresenter = new DeactivateAccountPresenter()

  return deactivateAccountPresenter
}