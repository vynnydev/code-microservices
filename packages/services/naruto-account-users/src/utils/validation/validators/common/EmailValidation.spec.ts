import FakeEmailValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeEmailValidatorAdapter'

import EmailValidation from '@utils/validation/validators/common/EmailValidation'

let emailValidation: EmailValidation

let fakeEmailValidatorAdapter: FakeEmailValidatorAdapter

describe('EmailValidation', () => {
  beforeAll(() => {
    fakeEmailValidatorAdapter = new FakeEmailValidatorAdapter()

    emailValidation = new EmailValidation('email', fakeEmailValidatorAdapter)
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeEmailValidatorAdapter, 'isValid')

    emailValidation.validate({ email: 'any_email' })

    expect(isValidSpy).toHaveBeenCalledWith('any_email')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeEmailValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      emailValidation.validate({ email: 'any_email' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeEmailValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      emailValidation.validate({ email: 'any_email' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = emailValidation.validate({ email: 'any_email' })

    expect(error).toBeFalsy()
  })
})
