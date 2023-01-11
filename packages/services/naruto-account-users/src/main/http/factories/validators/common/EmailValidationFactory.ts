import { makeJoiEmailValidatorAdapter } from '@main/http/factories/adapters/validators/common/JoiEmailValidatorAdapterFactory'

import { IValidation } from '@presentation/protocols/IValidation'
import EmailValidation from '@utils/validation/validators/common/EmailValidation'

export const makeEmailValidation = (): IValidation => {
  const fieldName = 'email'
  const emailValidation = new EmailValidation(fieldName, makeJoiEmailValidatorAdapter())

  return emailValidation
}
