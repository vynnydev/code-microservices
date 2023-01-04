import IAccountRepository from "@domain/repositories/account/IAccountRepository";
import IFindAccountByEmail from "@domain/useCases/account/IFindAccount";
import { TFindAccountResponse } from "@domain/useCases/account/dtos/TFindAccountResponse";

import { InvalidAliasIdOrAccountIsNotActiveError } 
  from "@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError";
import { left, right } from "@utils/helpers/Either";

export default class FindAccount implements IFindAccountByEmail {
  constructor(private readonly accountRepository: IAccountRepository) {}

  public async find(account_alias_id: string): Promise<TFindAccountResponse> {
    const foundAccount = await this.accountRepository.findByAliasId(account_alias_id)

    if (!foundAccount || !foundAccount.is_active) 
      return left(new InvalidAliasIdOrAccountIsNotActiveError())

    return right(foundAccount)
  }
}