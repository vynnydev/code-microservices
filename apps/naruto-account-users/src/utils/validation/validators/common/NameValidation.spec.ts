import FakeLastNameValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeLastNameValidatorAdapter';

import LastNameValidation from '@utils/validation/validators/common/LastNameValidation';

let lastNameValidation: LastNameValidation;

let fakeLastNameValidatorAdapter: FakeLastNameValidatorAdapter;

describe('LastNameValidation', () => {
  beforeAll(() => {
    fakeLastNameValidatorAdapter = new FakeLastNameValidatorAdapter();

    lastNameValidation = new LastNameValidation('last_name', fakeLastNameValidatorAdapter);
  });

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeLastNameValidatorAdapter, 'isValid');

    lastNameValidation.validate({ last_name: 'any_last_name' });

    expect(isValidSpy).toHaveBeenCalledWith('any_last_name');
  });

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeLastNameValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      lastNameValidation.validate({ last_name: 'any_last_name' });
    }).toThrow();
  });

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeLastNameValidatorAdapter, 'isValid').mockImplementationOnce(() => false);

    expect(() => {
      lastNameValidation.validate({ last_name: 'any_last_name' });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = lastNameValidation.validate({ last_name: 'any_last_name' });

    expect(error).toBeFalsy();
  });
});
