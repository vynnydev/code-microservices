import joiPhoneNumberValidatorAdapterFactory from '@main/http/factories/adapters/validators/common/JoiPhoneNumberValidatorAdapterFactory';

import { IValidation } from '@presentation/protocols/IValidation';
import PhoneNumberValidation from '@utils/validation/validators/common/PhoneNumberValidation';

const makePhoneNumberValidation = (): IValidation => {
  const fieldName = 'phone_number';

  const joiPhoneNumberValidatorAdapter =
    joiPhoneNumberValidatorAdapterFactory.makeJoIPhoneNumberValidatorAdapter();

  const phoneNumberValidation = new PhoneNumberValidation(
    fieldName,
    joiPhoneNumberValidatorAdapter,
  );

  return phoneNumberValidation;
};

export default { makePhoneNumberValidation };
