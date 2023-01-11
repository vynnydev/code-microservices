import { makeJoiAvatarUrlValidatorAdapter } from '@main/http/factories/adapters/validators/common/JoiAvatarUrlValidatorAdapterFactory'

import { IValidation } from '@presentation/protocols/IValidation'
import AvatarUrlValidation from '@utils/validation/validators/common/AvatarUrlValidation'

export const makeAvatarUrlValidation = (): IValidation => {
  const fieldName = 'avatar_url'
  const avatarUrlValidation = new AvatarUrlValidation(fieldName, makeJoiAvatarUrlValidatorAdapter())

  return avatarUrlValidation
}