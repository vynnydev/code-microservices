import { IValidation } from '@presentation/protocols/IValidation'

import IAvatarUrlValidator from '@utils/validation/protocols/common/IAvatarUrlValidator'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class AvatarUrlValidation<T = any> implements IValidation {
  constructor(private readonly fieldName: string, private readonly avatarUrlValidator: IAvatarUrlValidator) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.avatarUrlValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}
