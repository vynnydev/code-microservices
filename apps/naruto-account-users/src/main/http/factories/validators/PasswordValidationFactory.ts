import joiPasswordValidatorAdapterFactory from '@main/http/factories/adapters/validators/common/JoiPasswordValidatorAdapterFactory';

import { IValidation } from '@presentation/protocols/IValidation';
import PasswordValidation from '@utils/validation/validators/common/PasswordValidation';

const makePasswordValidation = (): IValidation => {
  const fieldName = 'password';

  const joiPasswordValidatorAdapter = joiPasswordValidatorAdapterFactory.makeJoiPasswordValidatorAdapter();

  const passwordValidation = new PasswordValidation(fieldName, joiPasswordValidatorAdapter);

  return passwordValidation;
};

export default { makePasswordValidation };