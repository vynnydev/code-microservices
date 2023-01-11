import EmailValidatorAdapter from '@infra/adapters/validators/common/joi/EmailValidatorAdapter';

let emailValidatorAdapter: EmailValidatorAdapter;

describe('EmailValidatorAdapter', () => {
  beforeEach(() => {
    emailValidatorAdapter = new EmailValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidEmail = 'invalidmail.com';

    const isValid = emailValidatorAdapter.isValid(invalidEmail);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validEmail = 'valid@mail.com';

    const isValid = emailValidatorAdapter.isValid(validEmail);

    expect(isValid).toBeTruthy();
  });
});
