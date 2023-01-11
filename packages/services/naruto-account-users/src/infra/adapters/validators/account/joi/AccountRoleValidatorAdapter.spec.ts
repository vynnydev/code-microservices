import { EAccountRole } from '@domain/enums/account/EAccountRole';

import AccountRoleValidatorAdapter from '@infra/adapters/validators/account/joi/AccountRoleValidatorAdapter';

let accountRoleValidatorAdapter: AccountRoleValidatorAdapter;

describe('AccountRoleValidatorAdapter', () => {
  beforeEach(() => {
    accountRoleValidatorAdapter = new AccountRoleValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidAccountRole = -1;

    const isValid = accountRoleValidatorAdapter.isValid(invalidAccountRole);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validAccountRole = EAccountRole.ADMIN;

    const isValid = accountRoleValidatorAdapter.isValid(validAccountRole);

    expect(isValid).toBeTruthy();
  });
});
