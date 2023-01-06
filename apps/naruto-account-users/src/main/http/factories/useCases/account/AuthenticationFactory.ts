import env from '@main/config/environment'
import BcryptAdapter from "@infra/adapters/cryptography/BcryptAdapter"

import IAuthentication from "@domain/useCases/account/IAuthentication"

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import Authentication from '@data/useCases/account/Authentication'
import { JwtAdapter } from "@infra/adapters/cryptography/JwtAdapter"

export const makeAuthentication = (): IAuthentication => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)

  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)

  const authenticateAccount = new Authentication(
    bcryptAdapter,
    jwtAdapter,
    makePrismaOrmAccountRepository()
  )

  return authenticateAccount
}