import IFindAccount from "@domain/useCases/account/IFindAccount";

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import FindAccount from '@data/useCases/account/FindAccount'

export const makeFindAccount = (): IFindAccount => {
  const findAccount = new FindAccount(
    makePrismaOrmAccountRepository()
  )

  return findAccount
}