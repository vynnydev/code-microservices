import ICpfValidator from '@utils/validation/protocols/common/ICpfValidator'

import JoiCpfValidatorAdapter from '@infra/adapters/validators/common/joi/CpfValidatorAdapter'

export const makeJoiCpfValidatorAdapter = (): ICpfValidator => {
  const joiCpfValidatorAdapter = new JoiCpfValidatorAdapter()

  return joiCpfValidatorAdapter
}
