import ValidationComposite from '@utils/validation/validators/ValidationComposite'

import nameValidationFactory from '@main/http/factories/validators/common/NameValidationFactory'
import cpfValidationFactory from '@main/http/factories/validators/common/CpfValidationFactory'
import avatarUrlValidationFactory from '@main/http/factories/validators/common/AvatarUrlValidationFactory'
import emailValidationFactory from '@main/http/factories/validators/common/EmailValidationFactory'
import phoneNumberValidationFactory from '@main/http/factories/validators/common/PhoneNumberValidationFactory'
import accountRoleValidationFactory from '@main/http/factories/validators/account/AccountRoleValidationFactory'
import passwordValidationFactory from '@main/http/factories/validators/common/PasswordValidationFactory'

export const makeSignUpValidation = (): ValidationComposite => {
  const nameValidation = nameValidationFactory.makeNameValidation()
  const cpfValidation = cpfValidationFactory.makeCpfValidation()
  const avatarUrlValidation = avatarUrlValidationFactory.makeAvatarUrlValidation()
  const emailValidation = emailValidationFactory.makeEmailValidation()
  const phoneNumberValidation = phoneNumberValidationFactory.makePhoneNumberValidation()
  const accountRoleValidation = accountRoleValidationFactory.makeAccountRoleValidation()
  const passwordValidation = passwordValidationFactory.makePasswordValidation()

  const validations = [
    nameValidation, 
    cpfValidation, 
    avatarUrlValidation,
    emailValidation, 
    phoneNumberValidation,
    accountRoleValidation,
    passwordValidation,
  ]

  const validationComposite = new ValidationComposite(validations)

  return validationComposite;
}
