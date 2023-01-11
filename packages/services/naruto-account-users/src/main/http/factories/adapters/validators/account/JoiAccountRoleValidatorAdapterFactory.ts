import IAccountRoleValidator from '@utils/validation/protocols/account/IAccountRoleValidator'

import JoiAccountRoleValidatorAdapter from '@infra/adapters/validators/account/joi/AccountRoleValidatorAdapter'

export const makeJoiAccountRoleValidatorAdapter = (): IAccountRoleValidator => {
  const joiAccountRoleValidatorAdapter = new JoiAccountRoleValidatorAdapter()

  return joiAccountRoleValidatorAdapter
}