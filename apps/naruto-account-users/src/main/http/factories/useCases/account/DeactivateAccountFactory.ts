import IDeactivateAccount from "@domain/useCases/account/IDeactivateAccount";

import DeactivateAccount from '@data/useCases/account/DeactivateAccount'

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 

export const makeDeactivateAccount = (): IDeactivateAccount => {
  const deactivateAccount = new DeactivateAccount(
    makePrismaOrmAccountRepository()
  )

  return deactivateAccount
}