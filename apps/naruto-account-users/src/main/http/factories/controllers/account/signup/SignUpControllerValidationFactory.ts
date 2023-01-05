import ValidationComposite from '@utils/validation/validators/ValidationComposite'

import nameValidationFactory from '@main/http/factories/validators/NameValidationFactory'
import cpfValidationFactory from '@main/http/factories/validators/CpfValidationFactory'
import emailValidationFactory from '@main/http/factories/validators/EmailValidationFactory'
import phoneNumberValidationFactory from '@main/http/factories/validators/PhoneNumberValidationFactory'
import passwordValidationFactory from '@main/http/factories/validators/PasswordValidationFactory'

export const makeSignUpValidation = (): ValidationComposite => {
  const nameValidation = nameValidationFactory.makeNameValidation()
  const cpfValidation = cpfValidationFactory.makeCpfValidation()
  const emailValidation = emailValidationFactory.makeEmailValidation()
  const phoneNumberValidation = phoneNumberValidationFactory.makePhoneNumberValidation()
  const passwordValidation = passwordValidationFactory.makePasswordValidation()

  const validations = [
    nameValidation, 
    cpfValidation, 
    emailValidation, 
    phoneNumberValidation,
    passwordValidation,
  ]

  const validationComposite = new ValidationComposite(validations)

  return validationComposite;
}
