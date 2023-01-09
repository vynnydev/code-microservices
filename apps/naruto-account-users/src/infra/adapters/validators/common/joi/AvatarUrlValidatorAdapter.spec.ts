import AvatarUrlValidatorAdapter from '@infra/adapters/validators/common/joi/AvatarUrlValidatorAdapter';

let avatarUrlValidatorAdapter: AvatarUrlValidatorAdapter;

describe('AvatarUrlValidatorAdapter', () => {
  beforeEach(() => {
    avatarUrlValidatorAdapter = new AvatarUrlValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidAvatarUrl = '';

    const isValid = avatarUrlValidatorAdapter.isValid(invalidAvatarUrl);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validAvatarUrl = 'https://github.com/vynnydev.png';

    const isValid = avatarUrlValidatorAdapter.isValid(validAvatarUrl);

    expect(isValid).toBeTruthy();
  });
});