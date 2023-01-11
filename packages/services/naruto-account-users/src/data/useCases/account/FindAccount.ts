import IAccountCacheProviderRepository from '@domain/repositories/redis/account/IAccountCacheProviderRepository'

import IFindAccountByEmail from '@domain/useCases/account/IFindAccount'
import { TFindAccountResponse } from '@domain/useCases/account/dtos/TFindAccountResponse'

import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError'
import { left, right } from '@utils/helpers/Either'

export default class FindAccount implements IFindAccountByEmail {
  constructor(private readonly accountCacheProviderRepository: IAccountCacheProviderRepository) {}

  async find(alias_id: string): Promise<TFindAccountResponse> {
    const foundCacheAccount = 
      await this.accountCacheProviderRepository.findAccount(alias_id)
    
    if (!foundCacheAccount)
      return left(new InvalidAliasIdOrAccountIsNotActiveError())

    return right(foundCacheAccount)
  }
}