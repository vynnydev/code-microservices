import { IValidation } from '@presentation/protocols/IValidation'

import IEmailValidator from '@utils/validation/protocols/common/IEmailValidator'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class EmailValidation<T = any> implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: IEmailValidator,
  ) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.emailValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}
