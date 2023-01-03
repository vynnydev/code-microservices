import ValidateOrigin from '@data/proxies/useCases/cors/ValidateOrigin';

let validateOrigin: ValidateOrigin;

describe('ValidateOrigin', () => {
  beforeEach(() => {
    validateOrigin = new ValidateOrigin();
  });

  it('should be able to return true when domain is allowed', () => {
    const isValid = validateOrigin.isValid('https://localhost:3000');

    expect(isValid).toBeTruthy();
  });

  it('should be able to return false when domain is not allowed', () => {
    const allowedDomain = validateOrigin.isValid('not_allowed_domain');

    expect(allowedDomain).toBeFalsy();
  });
});
