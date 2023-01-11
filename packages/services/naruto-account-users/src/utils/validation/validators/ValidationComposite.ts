import { IValidation } from '@presentation/protocols/IValidation'
import { Either } from '@utils/helpers/Either'

export default class ValidationComposite<T = any> implements IValidation<T> {
  constructor(private readonly validations: IValidation<T>[]) {}

  public validate(input: T): Either<Error, null> {
    for (const validator of this.validations) {
      const error = validator.validate(input)
      if (error !== null) return error
    }

    return null
  }
}