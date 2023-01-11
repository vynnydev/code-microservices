import ValidationComposite from '@utils/validation/validators/ValidationComposite'

import { makeNameValidation } from '@main/http/factories/validators/common/NameValidationFactory'
import { makeCpfValidation } from '@main/http/factories/validators/common/CpfValidationFactory'
import { makeAvatarUrlValidation } from '@main/http/factories/validators/common/AvatarUrlValidationFactory'
import { makeEmailValidation } from '@main/http/factories/validators/common/EmailValidationFactory'
import { makePhoneNumberValidation } from '@main/http/factories/validators/common/PhoneNumberValidationFactory'
import { makeAccountRoleValidation } from '@main/http/factories/validators/account/AccountRoleValidationFactory'
import { makePasswordValidation } from '@main/http/factories/validators/common/PasswordValidationFactory'

export const makeUpdateAccountValidation = (): ValidationComposite => {
  const validations = [
    makeNameValidation(), 
    makeCpfValidation(), 
    makeAvatarUrlValidation(),
    makeEmailValidation(), 
    makePhoneNumberValidation(),
    makeAccountRoleValidation(),
    makePasswordValidation(),
  ]

  const validationComposite = new ValidationComposite(validations)

  return validationComposite
}
