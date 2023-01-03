import { prisma } from '@infra/external/prisma/client'

import IAccountRepository from "@domain/repositories/account/IAccountRepository"
import Account from "@domain/models/account/Account"
import ILoadAccountByEmailResponse from '@domain/repositories/account/dtos/ILoadAccountByEmailResponse'

import AccountMapper from '@presentation/mappers/AccountMapper'

export default class PrismaOrmAccountRepository implements IAccountRepository {
  async create(account: Account): Promise<Account> {
    const data = AccountMapper.toPersistence(account)

    const createdAccount = await prisma.account.create({ 
      data
    })

    return createdAccount
  }

  async exists(email: string): Promise<boolean> {
    const userExists = await prisma.account.findUnique({
      where: { email },
    })

    return !!userExists
  }

  async findByEmail(email: string): Promise<Account> {
    const account = await prisma.account.findUnique({
      where: { email },
    })

    if (!account) {
      return null
    }

    return account
  }

  async loadByEmail(email: string): Promise<ILoadAccountByEmailResponse> {
    const foundAccountByEmail = await prisma.account.findUnique({ where: { email }})

    return foundAccountByEmail
  }

  async update(account: Account): Promise<void> {
    const data = account

    await prisma.account.update({
      where: {
        id: account.id,
      },
      data
    })
  }
}