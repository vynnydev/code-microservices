import PasswordValidatorAdapter from '@infra/adapters/validators/common/joi/PasswordValidatorAdapter';

let phoneNumberValidatorAdapter: PasswordValidatorAdapter;

describe('PasswordValidatorAdapter', () => {
  beforeEach(() => {
    phoneNumberValidatorAdapter = new PasswordValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidPassword = '';

    const isValid = phoneNumberValidatorAdapter.isValid(invalidPassword);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return false if has validation error', () => {
    const invalidPassword = 'a';

    const isValid = phoneNumberValidatorAdapter.isValid(invalidPassword);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validPassword = 'A1fc148';

    const isValid = phoneNumberValidatorAdapter.isValid(validPassword);

    expect(isValid).toBeTruthy();
  });
});
