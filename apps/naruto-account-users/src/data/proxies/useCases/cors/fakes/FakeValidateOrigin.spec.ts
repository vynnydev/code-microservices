import FakeValidateOrigin from '@data/proxies/useCases/cors/fakes/FakeValidateOrigin';

let fakeValidateOrigin: FakeValidateOrigin;

describe('FakeValidateOrigin', () => {
  beforeEach(() => {
    fakeValidateOrigin = new FakeValidateOrigin();
  });

  it('should be able to return true when domain is allowed', () => {
    const isValid = fakeValidateOrigin.isValid('valid_domain');

    expect(isValid).toBeTruthy();
  });
});
