import Joi from 'joi';

import IEmailValidator from '@utils/validation/protocols/common/IEmailValidator';

export default class EmailValidatorAdapter implements IEmailValidator {
  public isValid(email: any): boolean {
    const schema = Joi.object().keys({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });

    const { error } = schema.validate({ email });

    if (error) return false;

    return true;
  }
}
