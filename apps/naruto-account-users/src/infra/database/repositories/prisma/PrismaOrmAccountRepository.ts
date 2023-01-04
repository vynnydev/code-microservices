import { prisma } from '@infra/external/prisma/client'

import IAccountRepository from "@domain/repositories/account/IAccountRepository"
import Account from "@domain/models/account/Account"

import IUpdateAccountDTO from '@domain/repositories/account/dtos/IUpdateAccountDTO'

import accountMapper from '@presentation/mappers/AccountMapper'

export default class PrismaOrmAccountRepository implements IAccountRepository {
  async create(account: Account): Promise<Account> {
    const data = accountMapper.toPersistence(account)

    const createdAccount = await prisma.account.create({ 
      data
    })

    return createdAccount
  }

  async findByAliasId(alias_id: string): Promise<Account> {
    const foundAccount = await prisma.account.findUnique({
      where: { alias_id }
    })

    if (!foundAccount) {
      return null
    }

    return foundAccount
  }

  async exists(email: string): Promise<boolean> {
    const userExists = await prisma.account.findUnique({
      where: { email },
    })

    return !!userExists
  }

  async findByEmail(email: string): Promise<Account> {
    const foundAccount = await prisma.account.findUnique({
      where: { email },
    })

    if (!foundAccount) {
      return null
    }

    return foundAccount
  }

  async update({ id, data }: IUpdateAccountDTO): Promise<Account> {
    const updatedAccount = await prisma.account.update({
      where: {
        id,
      },
      data
    })

    return updatedAccount
  }
}