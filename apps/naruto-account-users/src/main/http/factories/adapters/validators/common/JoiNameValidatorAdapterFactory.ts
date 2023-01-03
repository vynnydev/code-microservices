import INameValidator from '@utils/validation/protocols/common/INameValidator';
import JoiNameValidatorAdapter from '@infra/adapters/validators/common/joi/NameValidatorAdapter';

const makeJoiNameValidatorAdapter = (): INameValidator => {
  const joiNameValidatorAdapter = new JoiNameValidatorAdapter();

  return joiNameValidatorAdapter;
};

export default { makeJoiNameValidatorAdapter };
