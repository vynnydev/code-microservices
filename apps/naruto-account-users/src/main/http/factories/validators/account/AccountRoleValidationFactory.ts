import joiAccountRoleValidatorAdapterFactory from '@main/http/factories/adapters/validators/account/JoiAccountRoleValidatorAdapterFactory';

import { IValidation } from '@presentation/protocols/IValidation';
import AccountRoleValidation from '@utils/validation/validators/account/AccountRoleValidation';

const makeAccountRoleValidation = (): IValidation => {
  const fieldName = 'account_role';

  const joiAccountRoleValidatorAdapter = joiAccountRoleValidatorAdapterFactory.makeJoiAccountRoleValidatorAdapter();

  const avatarUrlValidation = new AccountRoleValidation(fieldName, joiAccountRoleValidatorAdapter);

  return avatarUrlValidation;
};

export default { makeAccountRoleValidation };