import IAccountRepository from '@domain/repositories/prisma/account/IAccountRepository'
import PrismaOrmAccountRepository from '@infra/database/repositories/prisma/PrismaOrmAccountRepository'

export const makePrismaOrmAccountRepository = (): IAccountRepository => {
  const prismaOrmAccountRepository = new PrismaOrmAccountRepository()

  return prismaOrmAccountRepository
}