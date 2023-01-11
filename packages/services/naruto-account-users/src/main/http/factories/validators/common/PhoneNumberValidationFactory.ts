import { makeJoIPhoneNumberValidatorAdapter } from '@main/http/factories/adapters/validators/common/JoiPhoneNumberValidatorAdapterFactory'

import { IValidation } from '@presentation/protocols/IValidation'
import PhoneNumberValidation from '@utils/validation/validators/common/PhoneNumberValidation'

export const makePhoneNumberValidation = (): IValidation => {
  const fieldName = 'phone_number'
  const phoneNumberValidation = new PhoneNumberValidation(
    fieldName,
    makeJoIPhoneNumberValidatorAdapter(),
  )

  return phoneNumberValidation
}
