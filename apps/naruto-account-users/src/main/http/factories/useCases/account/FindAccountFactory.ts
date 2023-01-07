import IFindAccount from "@domain/useCases/account/IFindAccount";

import FindAccount from '@data/useCases/account/FindAccount'

import { makeRedisCacheProvider } from '@infra/external/redis/providers/factories/RedisCacheProviderFactory'
import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 

export const makeFindAccount = (): IFindAccount => {
  const findAccount = new FindAccount(
    makeRedisCacheProvider(),
    makePrismaOrmAccountRepository()
  )

  return findAccount
}