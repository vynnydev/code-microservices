import joiAvatarUrlValidatorAdapterFactory from '@main/http/factories/adapters/validators/common/JoiAvatarUrlValidatorAdapterFactory';

import { IValidation } from '@presentation/protocols/IValidation';
import AvatarUrlValidation from '@utils/validation/validators/common/AvatarUrlValidation';

const makeAvatarUrlValidation = (): IValidation => {
  const fieldName = 'avatar_url';

  const joiAvatarUrlValidatorAdapter = joiAvatarUrlValidatorAdapterFactory.makeJoiAvatarUrlValidatorAdapter();

  const avatarUrlValidation = new AvatarUrlValidation(fieldName, joiAvatarUrlValidatorAdapter);

  return avatarUrlValidation;
};

export default { makeAvatarUrlValidation };