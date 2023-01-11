import INameValidator from '@utils/validation/protocols/common/INameValidator'

export default class FakeNameValidatorAdapter implements INameValidator {
  public isValid(name: any): boolean {
    return true
  }
}
