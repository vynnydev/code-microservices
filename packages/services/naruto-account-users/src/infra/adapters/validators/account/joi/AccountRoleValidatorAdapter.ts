import Joi from 'joi';

import { EAccountRole } from '@domain/enums/account/EAccountRole';

import IAccountRoleValidator from '@utils/validation/protocols/account/IAccountRoleValidator';

export default class AccountRoleValidatorAdapter implements IAccountRoleValidator {
  public isValid(account_role: any): boolean {
    const schema = Joi.object().keys({
      account_role: Joi.string()
        .valid(
          EAccountRole.ADMIN,
          EAccountRole.DEFAULT_USER,
        )
        .required(),
    });

    const { error } = schema.validate({ account_role });

    if (error) return false;

    return true;
  }
}
