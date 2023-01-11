import { makeJoiAccountRoleValidatorAdapter } from '@main/http/factories/adapters/validators/account/JoiAccountRoleValidatorAdapterFactory'

import { IValidation } from '@presentation/protocols/IValidation'
import AccountRoleValidation from '@utils/validation/validators/account/AccountRoleValidation'

export const makeAccountRoleValidation = (): IValidation => {
  const fieldName = 'account_role'
  const avatarUrlValidation = new AccountRoleValidation(fieldName, makeJoiAccountRoleValidatorAdapter())

  return avatarUrlValidation
}