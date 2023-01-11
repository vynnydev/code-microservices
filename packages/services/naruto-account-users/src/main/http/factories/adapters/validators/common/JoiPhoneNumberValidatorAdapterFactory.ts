import IPhoneNumberValidator from '@utils/validation/protocols/common/IPhoneNumberValidator'

import JoiPhoneNumberValidatorAdapter from '@infra/adapters/validators/common/joi/PhoneNumberValidatorAdapter'

export const makeJoIPhoneNumberValidatorAdapter = (): IPhoneNumberValidator => {
  const joIPhoneNumberValidatorAdapter = new JoiPhoneNumberValidatorAdapter()

  return joIPhoneNumberValidatorAdapter
}
