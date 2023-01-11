import IFindAccount from '@domain/useCases/account/IFindAccount';

import FindAccount from '@data/useCases/account/FindAccount'

import { makeAccountCacheProviderRepository } from '@main/http/factories/repositories/redis/cache/account/AccountCacheProviderRepositoryFactory'

export const makeFindAccount = (): IFindAccount => {
  const findAccount = new FindAccount(
    makeAccountCacheProviderRepository()
  )

  return findAccount
}