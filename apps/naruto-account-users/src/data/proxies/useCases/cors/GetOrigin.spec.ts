import GetOrigin from '@data/proxies/useCases/cors/GetOrigin';

let getOrigin: GetOrigin;

describe('GetOrigin', () => {
  beforeEach(() => {
    getOrigin = new GetOrigin();
  });

  it('should be able to get default domain to origin when domain is not allowed', () => {
    const defaultDomain = getOrigin.get('not_allowed_domain');

    expect(defaultDomain).toBe('https://localhost:3000');
  });

  it('should be able to get domain to origin when domain is allowed', () => {
    const allowedDomain = getOrigin.get('https://localhost:3000');

    expect(allowedDomain).toBe('https://localhost:3000');
  });
});
