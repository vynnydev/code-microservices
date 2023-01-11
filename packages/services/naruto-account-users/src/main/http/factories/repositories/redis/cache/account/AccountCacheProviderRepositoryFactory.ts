import IAccountCacheProviderRepository from '@domain/repositories/redis/account/IAccountCacheProviderRepository'
import AccountCacheProviderRepository from '@infra/database/repositories/redis/cache/account/AccountCacheProviderRepository'

import { makeRedisCacheProvider } from '@infra/external/redis/providers/factories/RedisCacheProviderFactory'

export const makeAccountCacheProviderRepository = (): IAccountCacheProviderRepository => {
  const accountCacheProviderRepository = new AccountCacheProviderRepository(
    makeRedisCacheProvider()
  )

  return accountCacheProviderRepository
}