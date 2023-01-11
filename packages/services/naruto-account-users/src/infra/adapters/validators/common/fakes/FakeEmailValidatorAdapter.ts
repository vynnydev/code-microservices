import IEmailValidator from '@utils/validation/protocols/common/IEmailValidator'

export default class FakeEmailValidatorAdapter implements IEmailValidator {
  public isValid(email: string): boolean {
    return true
  }
}
