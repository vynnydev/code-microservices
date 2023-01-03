import AppError from "@utils/errors/AppError";

import Account from "@domain/models/account/Account";
import IAccountRepository from "@domain/repositories/account/IAccountRepository";
import IFindAccountByEmail from "@domain/useCases/account/IFindAccount";

export default class FindAccount implements IFindAccountByEmail {
  constructor(private readonly accountRepository: IAccountRepository) {}

  public async find(email: string): Promise<Account> {
    const account = await this.accountRepository.findByEmail(email)

    if (!account)
      throw new AppError({ message: 'Account does not exists', status_code: 400 })

    return account
  }
}