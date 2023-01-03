import env from '@main/config/env'
import BcryptAdapter from "@infra/adapters/cryptography/BcryptAdapter"

import IAuthentication from "@domain/useCases/account/IAuthentication"

import prismaOrmAccountRepositoryFactory from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import Authentication from '@data/useCases/account/Authentication'
import { JwtAdapter } from "@infra/adapters/cryptography/JwtAdapter"

const makeAuthentication = (): IAuthentication => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)

  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)

  const prismaOrmAccountRepository = prismaOrmAccountRepositoryFactory.makePrismaOrmAccountRepository()

  const authenticateAccount = new Authentication(
    bcryptAdapter,
    jwtAdapter,
    prismaOrmAccountRepository
  )

  return authenticateAccount
}

export default { makeAuthentication }