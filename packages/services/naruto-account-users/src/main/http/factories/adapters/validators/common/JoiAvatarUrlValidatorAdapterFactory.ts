import IAvatarUrlValidator from '@utils/validation/protocols/common/IAvatarUrlValidator'

import JoiAvatarUrlValidatorAdapter from '@infra/adapters/validators/common/joi/AvatarUrlValidatorAdapter'

export const makeJoiAvatarUrlValidatorAdapter = (): IAvatarUrlValidator => {
  const joiAvatarUrlValidatorAdapter = new JoiAvatarUrlValidatorAdapter()

  return joiAvatarUrlValidatorAdapter
}