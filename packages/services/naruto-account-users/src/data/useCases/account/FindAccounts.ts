import IAccountRepository from '@domain/repositories/prisma/account/IAccountRepository'
import IFindAccounts from '@domain/useCases/account/IFindAccounts'
import { TFindAccountsResponse } from '@domain/useCases/account/dtos/TFindAccountsResponse'

import { right } from '@utils/helpers/Either'

export default class FindAccounts implements IFindAccounts {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async find(): Promise<TFindAccountsResponse> {
    const foundAccounts = await this.accountRepository.findAccounts()

    return right(foundAccounts)
  }
}