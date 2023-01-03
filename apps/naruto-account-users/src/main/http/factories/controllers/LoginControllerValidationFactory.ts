import ValidationComposite from '@utils/validation/validators/ValidationComposite'

import emailValidationFactory from '@main/http/factories/validators/EmailValidationFactory'
import passwordValidationFactory from '@main/http/factories/validators/PasswordValidationFactory'

const makeLoginValidation = (): ValidationComposite => {
  const emailValidation = emailValidationFactory.makeEmailValidation()
  const passwordValidation = passwordValidationFactory.makePasswordValidation()

  const validations = [
    emailValidation,
    passwordValidation,
  ]

  const validationComposite = new ValidationComposite(validations)

  return validationComposite;
};

export default { makeLoginValidation }