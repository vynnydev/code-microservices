import INameValidator from '@utils/validation/protocols/common/INameValidator'

import { IValidation } from '@presentation/protocols/IValidation'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class NameValidation<T = any> implements IValidation {
  constructor(private readonly fieldName: string, private readonly nameValidator: INameValidator) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.nameValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}
