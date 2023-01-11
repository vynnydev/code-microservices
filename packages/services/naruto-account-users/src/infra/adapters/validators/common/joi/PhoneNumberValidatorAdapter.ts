import Joi from 'joi'

import IPhoneNumberValidator from '@utils/validation/protocols/common/IPhoneNumberValidator'

export default class PhoneNumberValidatorAdapter implements IPhoneNumberValidator {
  public isValid(phone_number: any): boolean {
    const schema = Joi.object().keys({
      phone_number: Joi.string().required(),
    });

    const { error } = schema.validate({ phone_number })

    if (error) return false;

    return true;
  }
}
