import Account from "@domain/models/account/Account";

export default interface IFindAccount {
  find(email: string): Promise<Account>
}