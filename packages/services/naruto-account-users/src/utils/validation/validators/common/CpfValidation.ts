import { IValidation } from '@presentation/protocols/IValidation'

import ICpfValidator from '@utils/validation/protocols/common/ICpfValidator'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class CpfValidation<T = any> implements IValidation {
  constructor(private readonly fieldName: string, private readonly cpfValidator: ICpfValidator) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.cpfValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}
