import { IValidation } from '@presentation/protocols/IValidation'
import { Either } from '@utils/helpers/Either'

import ValidationComposite from '@utils/validation/validators/ValidationComposite'

class ValidationSpy<T = any> implements IValidation {
  private input: any

  public validate(input: T): Either<Error, null> {
    this.input = input
    
    if (this.input) return null    
  }
}

let validationComposite: ValidationComposite
let validationSpy: ValidationSpy

describe('ValidationComposite', () => {
  beforeEach(() => {
    validationSpy = new ValidationSpy()

    validationComposite = new ValidationComposite([validationSpy])
  })

  it('should be able to call validate with correct values', () => {
    const validateSpy = jest.spyOn(validationSpy, 'validate')

    validationComposite.validate({ any_field: 'any_value' })

    expect(validateSpy).toHaveBeenCalledWith({ any_field: 'any_value' })
  })

  it('should be able to throw if validate throws', () => {
    jest.spyOn(validationSpy, 'validate').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      validationComposite.validate({
        any_field: 'any_value',
      })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = validationComposite.validate({
      any_field: 'any_value',
    })

    expect(error).toBeFalsy()
  })
})