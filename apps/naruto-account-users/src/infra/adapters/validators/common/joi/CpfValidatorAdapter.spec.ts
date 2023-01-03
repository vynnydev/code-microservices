import CpfValidatorAdapter from '@infra/adapters/validators/common/joi/CpfValidatorAdapter';

let cpfValidatorAdapter: CpfValidatorAdapter;

describe('CpfValidatorAdapter', () => {
  beforeEach(() => {
    cpfValidatorAdapter = new CpfValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidCpf = '';

    const isValid = cpfValidatorAdapter.isValid(invalidCpf);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validCpf = '501.695.258-21';

    const isValid = cpfValidatorAdapter.isValid(validCpf);

    expect(isValid).toBeTruthy();
  });
});
