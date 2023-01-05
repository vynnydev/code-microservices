import AppError from "@utils/errors/AppError";

import IAccountRepository from "@domain/repositories/account/IAccountRepository";
import IDeactivateAccount from "@domain/useCases/account/IDeactivateAccount";
import { TDeactivateAccountResponse } from "@domain/useCases/account/dtos/TDeactivateAccountResponse";

import { InvalidAliasIdOrAccountIsNotActiveError } 
  from "@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError";
import { left, right } from "@utils/helpers/Either";

export default class DeactivateAccount implements IDeactivateAccount {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async deactivate(account_alias_id: string): Promise<TDeactivateAccountResponse> {
    const foundAccount = await this.accountRepository.findByAliasId(account_alias_id)

    if (!foundAccount || !foundAccount.is_active) 
      return left(new InvalidAliasIdOrAccountIsNotActiveError())

    const updatedAccount = await this.accountRepository.update({
      id: foundAccount.id,
      data: { is_active: false }
    })

    if (!updatedAccount) 
      throw new AppError({ message: 'Could not deactivate account', status_code: 400 })
    
    return right(updatedAccount)
  }
}