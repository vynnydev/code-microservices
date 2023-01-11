import AppError from '@utils/errors/AppError'

import IAccountRepository from '@domain/repositories/prisma/account/IAccountRepository'
import IAccountCacheProviderRepository from '@domain/repositories/redis/account/IAccountCacheProviderRepository'

import IDeactivateAccount from '@domain/useCases/account/IDeactivateAccount'
import { TDeactivateAccountResponse } from '@domain/useCases/account/dtos/TDeactivateAccountResponse'

import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError'
import { left, right } from '@utils/helpers/Either'

export default class DeactivateAccount implements IDeactivateAccount {
  constructor(
    private readonly accountRepository: IAccountRepository,
    private readonly accountCacheProviderRepository: IAccountCacheProviderRepository
  ) {}

  async deactivate(alias_id: string): Promise<TDeactivateAccountResponse> {
    const foundAccount = await this.accountRepository.findByAliasId(alias_id)

    if (!foundAccount || !foundAccount.is_active) 
      return left(new InvalidAliasIdOrAccountIsNotActiveError())

    const updatedAccount = await this.accountRepository.update({
      id: foundAccount.id,
      data: { is_active: false }
    })

    await this.accountCacheProviderRepository.deactivateAccount(updatedAccount)

    if (!updatedAccount) 
      throw new AppError({ message: 'Could not deactivate account', status_code: 400 })
    
    return right(updatedAccount)
  }
}