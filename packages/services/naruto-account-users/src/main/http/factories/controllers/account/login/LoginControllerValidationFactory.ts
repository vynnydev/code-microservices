import ValidationComposite from '@utils/validation/validators/ValidationComposite'

import { makeEmailValidation } from '@main/http/factories/validators/common/EmailValidationFactory'
import { makePasswordValidation } from '@main/http/factories/validators/common/PasswordValidationFactory'

export const makeLoginValidation = (): ValidationComposite => {
  const validations = [
    makeEmailValidation(),
    makePasswordValidation(),
  ]

  const validationComposite = new ValidationComposite(validations)

  return validationComposite;
}