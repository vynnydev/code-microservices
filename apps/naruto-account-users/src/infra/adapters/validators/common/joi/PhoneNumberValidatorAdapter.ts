import PhoneValidator from 'awesome-phonenumber';
import Joi from 'joi';

import IPhoneNumberValidator from '@utils/validation/protocols/common/IPhoneNumberValidator';

export default class PhoneNumberValidatorAdapter implements IPhoneNumberValidator {
  public isValid(phone_number: any): boolean {
    const schema = Joi.object().keys({
      phone_number: Joi.string().required(),
    });

    const region = new PhoneValidator(`+${phone_number}`).getRegionCode();
    const phoneNumberValidator = new PhoneValidator(phone_number, region);

    const isValid = phoneNumberValidator.isValid();

    return isValid;
  }
}
