import NameValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeNameValidatorAdapter'

import NameValidation from '@utils/validation/validators/common/NameValidation'

let lastNameValidation: NameValidation

let fakeNameValidatorAdapter: NameValidatorAdapter

describe('NameValidation', () => {
  beforeAll(() => {
    fakeNameValidatorAdapter = new NameValidatorAdapter()

    lastNameValidation = new NameValidation('name', fakeNameValidatorAdapter)
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeNameValidatorAdapter, 'isValid')

    lastNameValidation.validate({ name: 'any_name' })

    expect(isValidSpy).toHaveBeenCalledWith('any_name')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeNameValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      lastNameValidation.validate({ name: 'any_name' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeNameValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      lastNameValidation.validate({ name: 'any_name' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = lastNameValidation.validate({ name: 'any_name' })

    expect(error).toBeFalsy()
  })
})
