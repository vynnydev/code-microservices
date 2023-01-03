import { IValidation } from '@presentation/protocols/IValidation'

import IPasswordValidator from '@utils/validation/protocols/common/IPasswordValidator'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class PasswordValidation<T = any> implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly passwordValidator: IPasswordValidator,
  ) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.passwordValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}