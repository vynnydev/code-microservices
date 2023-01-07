import IAccountRepository from "@domain/repositories/account/IAccountRepository";
import ICacheProvider from "@infra/external/redis/providers/domain/implementations/ICacheProvider";

import IFindAccountByEmail from "@domain/useCases/account/IFindAccount";
import { TFindAccountResponse } from "@domain/useCases/account/dtos/TFindAccountResponse";

import { InvalidAliasIdOrAccountIsNotActiveError } 
  from "@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError";
import { left, right } from "@utils/helpers/Either";
import Account from "@domain/models/account/Account";

export default class FindAccount implements IFindAccountByEmail {
  constructor(
    private readonly cacheProvider: ICacheProvider,
    private readonly accountRepository: IAccountRepository
  ) {}

  public async find(account_alias_id: string): Promise<TFindAccountResponse> {
    const foundCacheAccount = 
      await this.cacheProvider.recovery<Account>('accounts') 
    
    if (!foundCacheAccount) {
      const foundAccount = await this.accountRepository.findByAliasId(account_alias_id)
        
      if (!foundAccount || !foundAccount.is_active) 
        return left(new InvalidAliasIdOrAccountIsNotActiveError())
        
      await this.cacheProvider.save({
        key: 'accounts',
        value: foundAccount
      })

      return right(foundAccount)
    }

    return right(foundCacheAccount)
  }
}