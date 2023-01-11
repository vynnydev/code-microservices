import FakeAccountRoleValidatorAdapter from '@infra/adapters/validators/account/fakes/FakeAccountRoleValidatorAdapter'

import AccountRoleValidation from '@utils/validation/validators/account/AccountRoleValidation'

let roleAccountValidation: AccountRoleValidation

let fakeAccountRoleValidatorAdapter: FakeAccountRoleValidatorAdapter

describe('AccountRoleValidation', () => {
  beforeAll(() => {
    fakeAccountRoleValidatorAdapter = new FakeAccountRoleValidatorAdapter()

    roleAccountValidation = new AccountRoleValidation('account_role', fakeAccountRoleValidatorAdapter)
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeAccountRoleValidatorAdapter, 'isValid')

    roleAccountValidation.validate({ account_role: 'any_account_role' })

    expect(isValidSpy).toHaveBeenCalledWith('any_account_role')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeAccountRoleValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      roleAccountValidation.validate({ account_role: 'any_account_role' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeAccountRoleValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      roleAccountValidation.validate({ account_role: 'any_account_role' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = roleAccountValidation.validate({ account_role: 'any_account_role' })

    expect(error).toBeFalsy()
  })
})