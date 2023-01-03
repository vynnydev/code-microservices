import PhoneNumberValidatorAdapter from '@infra/adapters/validators/common/joi/PhoneNumberValidatorAdapter';

let phoneNumberValidatorAdapter: PhoneNumberValidatorAdapter;

describe('PhoneNumberValidatorAdapter', () => {
  beforeEach(() => {
    phoneNumberValidatorAdapter = new PhoneNumberValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidPhoneNumber = '';

    const isValid = phoneNumberValidatorAdapter.isValid(invalidPhoneNumber);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return false if has validation error', () => {
    const invalidPhoneNumber = 'a';

    const isValid = phoneNumberValidatorAdapter.isValid(invalidPhoneNumber);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validPhoneNumber = '+55 (11) 979506023';

    const isValid = phoneNumberValidatorAdapter.isValid(validPhoneNumber);

    expect(isValid).toBeTruthy();
  });
});
