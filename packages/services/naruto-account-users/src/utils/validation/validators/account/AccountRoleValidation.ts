import { IValidation } from '@presentation/protocols/IValidation'

import IAccountRoleValidator from '@utils/validation/protocols/account/IAccountRoleValidator'

import { Either, left, right } from '@utils/helpers/Either'
import { MissingParamError } from '@utils/errors/MissingParamError'

export default class AccountRoleValidation<T = any> implements IValidation {
  constructor(private readonly fieldName: string, private readonly accountRoleValidator: IAccountRoleValidator) {}

  public validate(input: T): Either<Error, null> {
    const field = input[this.fieldName]

    const isValid = this.accountRoleValidator.isValid(field)

    if (!isValid) return left(new MissingParamError(field))

    return right(null)
  }
}