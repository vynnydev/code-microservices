import UuidAdapter from '@infra/adapters/tokenGenerator/UuidAdapter';

let uuidAdapter: UuidAdapter;

jest.mock('uuid', () => {
  return { v4: (): string => 'any_token' };
});

describe('UuidAdapter', () => {
  beforeEach(() => {
    uuidAdapter = new UuidAdapter();
  });

  it('should be able to generate token', () => {
    const generatedToken = uuidAdapter.generate();

    expect(generatedToken).toEqual('any_token');
  });
});
