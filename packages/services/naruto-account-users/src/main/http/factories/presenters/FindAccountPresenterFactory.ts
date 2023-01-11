import IPresenter from '@presentation/protocols/IPresenter'

import FindAccountPresenter from '@presentation/presenters/account/FindAccountPresenter'

export const makeFindAccountPresenter = (): IPresenter => {
  const findAccountPresenter = new FindAccountPresenter()

  return findAccountPresenter
}