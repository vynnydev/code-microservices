import FakePhoneNumberValidatorAdapter from '@infra/adapters/validators/common/fakes/FakePhoneNumberValidatorAdapter'

import PhoneNumberValidation from '@utils/validation/validators/common/PhoneNumberValidation'

let phoneNumberValidation: PhoneNumberValidation

let fakePhoneNumberValidatorAdapter: FakePhoneNumberValidatorAdapter

describe('PhoneNumberValidation', () => {
  beforeAll(() => {
    fakePhoneNumberValidatorAdapter = new FakePhoneNumberValidatorAdapter()

    phoneNumberValidation = new PhoneNumberValidation(
      'phone_number',
      fakePhoneNumberValidatorAdapter,
    )
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakePhoneNumberValidatorAdapter, 'isValid')

    phoneNumberValidation.validate({ phone_number: 'any_phone_number' })

    expect(isValidSpy).toHaveBeenCalledWith('any_phone_number')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakePhoneNumberValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      phoneNumberValidation.validate({ phone_number: 'any_phone_number' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakePhoneNumberValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      phoneNumberValidation.validate({ phone_number: 'any_phone_number' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = phoneNumberValidation.validate({ phone_number: 'any_phone_number' })

    expect(error).toBeFalsy()
  })
})
