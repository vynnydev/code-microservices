import IEmailValidator from '@utils/validation/protocols/common/IEmailValidator'

import JoiEmailValidatorAdapter from '@infra/adapters/validators/common/joi/EmailValidatorAdapter'

export const makeJoiEmailValidatorAdapter = (): IEmailValidator => {
  const joiEmailValidatorAdapter = new JoiEmailValidatorAdapter()

  return joiEmailValidatorAdapter
}