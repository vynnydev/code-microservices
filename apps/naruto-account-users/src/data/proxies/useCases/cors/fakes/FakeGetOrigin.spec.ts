import FakeGetOrigin from '@data/proxies/useCases/cors/fakes/FakeGetOrigin';

let fakeGetOrigin: FakeGetOrigin;

describe('FakeGetOrigin', () => {
  beforeEach(() => {
    fakeGetOrigin = new FakeGetOrigin();
  });

  it('should be able to get domain to origin', () => {
    const domain = fakeGetOrigin.get('any_domain');

    expect(domain).toBe('any_domain');
  });
});
