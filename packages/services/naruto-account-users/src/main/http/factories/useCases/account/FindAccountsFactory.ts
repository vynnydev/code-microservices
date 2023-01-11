import IFindAccounts from '@domain/useCases/account/IFindAccounts';

import FindAccounts from '@data/useCases/account/FindAccounts'

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 

export const makeFindAccounts = (): IFindAccounts => {
  const findAccounts = new FindAccounts(
    makePrismaOrmAccountRepository()
  )

  return findAccounts
}