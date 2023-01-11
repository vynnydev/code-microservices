import { makeJoiCpfValidatorAdapter } from '@main/http/factories/adapters/validators/common/JoiCpfValidatorAdapterFactory'

import { IValidation } from '@presentation/protocols/IValidation'
import CpfValidation from '@utils/validation/validators/common/CpfValidation'

export const makeCpfValidation = (): IValidation => {
  const fieldName = 'cpf'
  const cpfValidation = new CpfValidation(fieldName, makeJoiCpfValidatorAdapter())

  return cpfValidation
}
