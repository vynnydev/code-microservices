import IAccountRepository from '@domain/repositories/account/IAccountRepository';
import PrismaOrmAccountRepository from '@infra/database/repositories/prisma/PrismaOrmAccountRepository';

const makePrismaOrmAccountRepository = (): IAccountRepository => {
  const prismaOrmAccountRepository = new PrismaOrmAccountRepository()

  return prismaOrmAccountRepository
}

export default { makePrismaOrmAccountRepository }