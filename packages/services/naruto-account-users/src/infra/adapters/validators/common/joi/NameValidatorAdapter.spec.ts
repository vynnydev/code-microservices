import NameValidatorAdapter from '@infra/adapters/validators/common/joi/NameValidatorAdapter';

let nameValidatorAdapter: NameValidatorAdapter;

describe('NameValidatorAdapter', () => {
  beforeEach(() => {
    nameValidatorAdapter = new NameValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidName = '';

    const isValid = nameValidatorAdapter.isValid(invalidName);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if has no validation error', () => {
    const validName = 'valid_name';

    const isValid = nameValidatorAdapter.isValid(validName);

    expect(isValid).toBeTruthy();
  });
});
