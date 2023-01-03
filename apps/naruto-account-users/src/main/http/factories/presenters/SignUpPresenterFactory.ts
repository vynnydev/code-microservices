import IPresenter from '@presentation/protocols/IPresenter';

import SignUpPresenter from '@presentation/presenters/account/SignUpPresenter';

const makeSignUpPresenter = (): IPresenter => {
  const registerAccountPresenter = new SignUpPresenter();

  return registerAccountPresenter;
};

export default { makeSignUpPresenter };
