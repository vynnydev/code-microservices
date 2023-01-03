import ICpfValidator from '@utils/validation/protocols/common/ICpfValidator'

export default class FakeCpfValidatorAdapter implements ICpfValidator {
  public isValid(cpf: string): boolean {
    return true
  }
}
