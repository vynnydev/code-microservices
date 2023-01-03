import { IValidation } from '@presentation/protocols/IValidation';

import NameValidation from '@utils/validation/validators/common/NameValidation';
import joiNameValidatorAdapterFactory from '@main/http/factories/adapters/validators/common/JoiNameValidatorAdapterFactory';

const makeNameValidation = (): IValidation => {
  const fieldName = 'name';
  const joiNameValidatorAdapter = joiNameValidatorAdapterFactory.makeJoiNameValidatorAdapter();

  const nameValidation = new NameValidation(fieldName, joiNameValidatorAdapter);

  return nameValidation;
};

export default { makeNameValidation };
