import Joi from 'joi';

import IPasswordValidator from '@utils/validation/protocols/common/IPasswordValidator';

export default class PasswordValidatorAdapter implements IPasswordValidator {
  public isValid(password: any): boolean {
    const schema = Joi.object().keys({
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .messages({
        "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
        "string.empty": `Password cannot be empty`,
        "any.required": `Password is required`,
      }),
    });

    const { error } = schema.validate({ password });

    if (error) return false;

    return true;
  }
}