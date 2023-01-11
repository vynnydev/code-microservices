import IPasswordValidator from '@utils/validation/protocols/common/IPasswordValidator'

import JoiPasswordValidatorAdapter from '@infra/adapters/validators/common/joi/PasswordValidatorAdapter'

export const makeJoiPasswordValidatorAdapter = (): IPasswordValidator => {
  const joiPasswordValidatorAdapter = new JoiPasswordValidatorAdapter()

  return joiPasswordValidatorAdapter
}
