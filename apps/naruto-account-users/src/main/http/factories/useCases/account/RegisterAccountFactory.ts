import aliasGeneratorFactory from '@main/http/factories/aliasGenerator/AliasGeneratorFactory';
import BcryptAdapter from "@infra/adapters/cryptography/BcryptAdapter";

import IRegisterAccount from "@domain/useCases/account/IRegisterAccount";

import prismaOrmAccountRepositoryFactory from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import RegisterAccount from '@data/useCases/account/RegisterAccount'
 
const makeRegisterAccount = (): IRegisterAccount => {
  const aliasGenerator = aliasGeneratorFactory.makeAliasGenerator()

  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)

  const prismaAccountRepository = prismaOrmAccountRepositoryFactory.makePrismaOrmAccountRepository()

  const registerAccount = new RegisterAccount(
    aliasGenerator,
    bcryptAdapter,
    prismaAccountRepository,
  )

  return registerAccount
}

export default { makeRegisterAccount }