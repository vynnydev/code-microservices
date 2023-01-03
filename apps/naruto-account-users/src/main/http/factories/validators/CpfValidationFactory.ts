import joiCpfValidatorAdapterFactory from '@main/http/factories/adapters/validators/common/JoiCpfValidatorAdapterFactory';

import { IValidation } from '@presentation/protocols/IValidation';
import CpfValidation from '@utils/validation/validators/common/CpfValidation';

const makeCpfValidation = (): IValidation => {
  const fieldName = 'cpf';

  const joiCpfValidatorAdapter = joiCpfValidatorAdapterFactory.makeJoiCpfValidatorAdapter();

  const cpfValidation = new CpfValidation(fieldName, joiCpfValidatorAdapter);

  return cpfValidation;
};

export default { makeCpfValidation };
