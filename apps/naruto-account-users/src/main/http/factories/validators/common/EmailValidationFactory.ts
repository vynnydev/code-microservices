import joiEmailValidatorAdapterFactory from '@main/http/factories/adapters/validators/common/JoiEmailValidatorAdapterFactory';

import { IValidation } from '@presentation/protocols/IValidation';
import EmailValidation from '@utils/validation/validators/common/EmailValidation';

const makeEmailValidation = (): IValidation => {
  const fieldName = 'email';

  const joiEmailValidatorAdapter = joiEmailValidatorAdapterFactory.makeJoiEmailValidatorAdapter();

  const emailValidation = new EmailValidation(fieldName, joiEmailValidatorAdapter);

  return emailValidation;
};

export default { makeEmailValidation };
