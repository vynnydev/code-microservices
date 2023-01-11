import IAccountRoleValidator from '@utils/validation/protocols/account/IAccountRoleValidator';

export default class FakeAccountRoleValidatorAdapter implements IAccountRoleValidator {
  public isValid(account_role: any): boolean {
    return true;
  }
}
