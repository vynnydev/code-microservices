import IValidateOrigin from '@domain/proxies/useCases/cors/IValidateOrigin'

import ValidateOrigin from '@data/proxies/useCases/cors/ValidateOrigin'

const makeValidateOrigin = (): IValidateOrigin => {
  const validateOrigin = new ValidateOrigin()

  return validateOrigin
}

export default { makeValidateOrigin }
