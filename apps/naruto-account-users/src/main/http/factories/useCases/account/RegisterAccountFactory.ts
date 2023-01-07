import { makeAliasGenerator } from '@main/http/factories/aliasGenerator/AliasGeneratorFactory';
import BcryptAdapter from "@infra/adapters/cryptography/BcryptAdapter";

import IRegisterAccount from "@domain/useCases/account/IRegisterAccount";
import RegisterAccount from '@data/useCases/account/RegisterAccount'

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import { makeRedisCacheProvider } from '@infra/external/redis/providers/factories/RedisCacheProviderFactory'

export const makeRegisterAccount = (): IRegisterAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)

  const registerAccount = new RegisterAccount(
    makeAliasGenerator(),
    bcryptAdapter,
    makePrismaOrmAccountRepository(),
    makeRedisCacheProvider()
  )

  return registerAccount
}