import IPhoneNumberValidator from '@utils/validation/protocols/common/IPhoneNumberValidator'

export default class FakePhoneNumberValidatorAdapter implements IPhoneNumberValidator {
  public isValid(phone_number: string): boolean {
    return true
  }
}
