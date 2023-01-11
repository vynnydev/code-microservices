import FakeCpfValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeCpfValidatorAdapter'

import CpfValidation from '@utils/validation/validators/common/CpfValidation'

let cpfValidation: CpfValidation

let fakeCpfValidatorAdapter: FakeCpfValidatorAdapter

describe('CpfValidation', () => {
  beforeAll(() => {
    fakeCpfValidatorAdapter = new FakeCpfValidatorAdapter()

    cpfValidation = new CpfValidation('cpf', fakeCpfValidatorAdapter)
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeCpfValidatorAdapter, 'isValid')

    cpfValidation.validate({ cpf: 'any_cpf' })

    expect(isValidSpy).toHaveBeenCalledWith('any_cpf')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeCpfValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      cpfValidation.validate({ cpf: 'any_cpf' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeCpfValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      cpfValidation.validate({ cpf: 'any_cpf' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = cpfValidation.validate({ cpf: 'any_cpf' })

    expect(error).toBeFalsy()
  })
})
