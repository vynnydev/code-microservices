import IPresenter from '@presentation/protocols/IPresenter'

import FindAccountsPresenter from '@presentation/presenters/account/FindAccountsPresenter'

export const makeFindAccountsPresenter = (): IPresenter => {
  const findAccountsPresenter = new FindAccountsPresenter()

  return findAccountsPresenter
}