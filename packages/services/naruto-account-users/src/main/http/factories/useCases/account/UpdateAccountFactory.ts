import IUpdateAccount from '@domain/useCases/account/IUpdateAccount'

import UpdateAccount from '@data/useCases/account/UpdateAccount'

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory'
import { makeAccountCacheProviderRepository } from '@main/http/factories/repositories/redis/cache/account/AccountCacheProviderRepositoryFactory'

export const makeUpdateAccount = (): IUpdateAccount => {
  const updateAccount = new UpdateAccount(
    makePrismaOrmAccountRepository(),
    makeAccountCacheProviderRepository()
  )

  return updateAccount
}