import IDeactivateAccount from '@domain/useCases/account/IDeactivateAccount';

import DeactivateAccount from '@data/useCases/account/DeactivateAccount'

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory'
import { makeAccountCacheProviderRepository } from '@main/http/factories/repositories/redis/cache/account/AccountCacheProviderRepositoryFactory'

export const makeDeactivateAccount = (): IDeactivateAccount => {
  const deactivateAccount = new DeactivateAccount(
    makePrismaOrmAccountRepository(),
    makeAccountCacheProviderRepository()
  )

  return deactivateAccount
}