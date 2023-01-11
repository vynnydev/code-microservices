import FakePasswordValidatorAdapter from '@infra/adapters/validators/common/fakes/FakePasswordValidatorAdapter'

import PasswordValidation from '@utils/validation/validators/common/PasswordValidation'

let passwordValidation: PasswordValidation

let fakePasswordValidatorAdapter: FakePasswordValidatorAdapter

describe('PasswordValidation', () => {
  beforeAll(() => {
    fakePasswordValidatorAdapter = new FakePasswordValidatorAdapter()

    passwordValidation = new PasswordValidation(
      'password',
      fakePasswordValidatorAdapter,
    )
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakePasswordValidatorAdapter, 'isValid')

    passwordValidation.validate({ password: 'any_password' })

    expect(isValidSpy).toHaveBeenCalledWith('any_password')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakePasswordValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      passwordValidation.validate({ password: 'any_password' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakePasswordValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      passwordValidation.validate({ password: 'any_password' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = passwordValidation.validate({ password: 'any_password' })

    expect(error).toBeFalsy()
  })
})
