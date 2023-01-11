import { IValidation } from '@presentation/protocols/IValidation'

import NameValidation from '@utils/validation/validators/common/NameValidation'
import { makeJoiNameValidatorAdapter } from '@main/http/factories/adapters/validators/common/JoiNameValidatorAdapterFactory'

export const makeNameValidation = (): IValidation => {
  const fieldName = 'name'
  const nameValidation = new NameValidation(fieldName, makeJoiNameValidatorAdapter())

  return nameValidation
}