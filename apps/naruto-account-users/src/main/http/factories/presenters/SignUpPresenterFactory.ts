import IPresenter from '@presentation/protocols/IPresenter'

import SignUpPresenter from '@presentation/presenters/account/SignUpPresenter'

export const makeSignUpPresenter = (): IPresenter => {
  const signupAccountPresenter = new SignUpPresenter()

  return signupAccountPresenter
}
