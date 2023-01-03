import RandTokenAdapter from '@infra/adapters/tokenGenerator/RandTokenAdapter';

let randTokenAdapter: RandTokenAdapter;

jest.mock('rand-token', () => {
  return { generate: (): string => 'any_token' };
});

describe('RandTokenAdapter', () => {
  beforeEach(() => {
    randTokenAdapter = new RandTokenAdapter();
  });

  it('should be able to generate token', () => {
    const generatedToken = randTokenAdapter.generate();

    expect(generatedToken).toEqual('any_token');
  });
});
