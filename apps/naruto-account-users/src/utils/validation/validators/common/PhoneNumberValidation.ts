import { IValidation } from '@presentation/protocols/IValidation'

import IPhoneNumberValidator from '@utils/validation/protocols/common/IPhoneNumberValidator'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class PhoneNumberValidation<T = any> implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly phoneNumberValidator: IPhoneNumberValidator,
  ) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.phoneNumberValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}
