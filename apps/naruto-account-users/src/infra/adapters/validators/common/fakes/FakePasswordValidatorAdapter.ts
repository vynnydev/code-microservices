import IPasswordValidator from '@utils/validation/protocols/common/IPasswordValidator'

export default class FakePasswordValidatorAdapter implements IPasswordValidator {
  public isValid(password: any): boolean {
     return true 
  }
}