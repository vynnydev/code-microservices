import IUpdateAccount from '@domain/useCases/account/IUpdateAccount';

import { makePrismaOrmAccountRepository } from '@main/http/factories/repositories/prisma/account/PrismaOrmAccountRepositoryFactory' 
import UpdateAccount from '@data/useCases/account/UpdateAccount'

export const makeUpdateAccount = (): IUpdateAccount => {
  const updateAccount = new UpdateAccount(
    makePrismaOrmAccountRepository()
  )

  return updateAccount
}