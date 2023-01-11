import { makeJoiPasswordValidatorAdapter } from '@main/http/factories/adapters/validators/common/JoiPasswordValidatorAdapterFactory'

import { IValidation } from '@presentation/protocols/IValidation'
import PasswordValidation from '@utils/validation/validators/common/PasswordValidation'

export const makePasswordValidation = (): IValidation => {
  const fieldName = 'password'
  const passwordValidation = new PasswordValidation(fieldName, makeJoiPasswordValidatorAdapter())

  return passwordValidation
}