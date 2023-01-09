import { IValidation } from '@presentation/protocols/IValidation'

import { Either, right } from '@utils/helpers/Either'

export default class FakeNameValidation<T = any> implements IValidation {
  private input: T

  public validate(input: T): Either<Error, null> {
    this.input = input

    return right(null)
  }
}

