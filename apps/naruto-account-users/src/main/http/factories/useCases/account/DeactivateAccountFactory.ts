import IDeactivateAccount from "@domain/useCases/account/IDeactivateAccount";

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import DeactivateAccount from '@data/useCases/account/DeactivateAccount'

export const makeDeactivateAccount = (): IDeactivateAccount => {
  const deactivateAccount = new DeactivateAccount(
    makePrismaOrmAccountRepository()
  )

  return deactivateAccount
}