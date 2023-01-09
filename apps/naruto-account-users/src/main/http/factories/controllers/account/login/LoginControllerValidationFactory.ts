import ValidationComposite from '@utils/validation/validators/ValidationComposite'

import emailValidationFactory from '@main/http/factories/validators/common/EmailValidationFactory'
import passwordValidationFactory from '@main/http/factories/validators/common/PasswordValidationFactory'

export const makeLoginValidation = (): ValidationComposite => {
  const emailValidation = emailValidationFactory.makeEmailValidation()
  const passwordValidation = passwordValidationFactory.makePasswordValidation()

  const validations = [
    emailValidation,
    passwordValidation,
  ]

  const validationComposite = new ValidationComposite(validations)

  return validationComposite;
}