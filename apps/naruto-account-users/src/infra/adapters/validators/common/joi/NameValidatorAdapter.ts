import Joi from 'joi';

import INameValidator from '@utils/validation/protocols/common/INameValidator';

export default class NameValidatorAdapter implements INameValidator {
  public isValid(name: any): boolean {
    const schema = Joi.object().keys({
      name: Joi.string().min(2).max(1000).required(),
    });

    const { error } = schema.validate({ name });

    if (error) return false;

    return true;
  }
}
