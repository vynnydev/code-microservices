import AppError from "@utils/errors/AppError";

import IAccountRepository from "@domain/repositories/account/IAccountRepository";
import IUpdateAccountDTO from "@domain/useCases/account/dtos/IUpdateAccountDTO";
import IUpdateAccount from "@domain/useCases/account/IUpdateAccount";
import { TUpdateAccountResponse } from "@domain/useCases/account/dtos/TUpdateAccountResponse";

import { InvalidAliasIdOrAccountIsNotActiveError } 
  from "@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError";
import { left, right } from "@utils/helpers/Either";

export default class UpdateAccount implements IUpdateAccount {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async update({
    data,
    account_alias_id
  }: IUpdateAccountDTO): Promise<TUpdateAccountResponse> {
    const foundAccount = await this.accountRepository.findByAliasId(account_alias_id)

    if (!foundAccount || !foundAccount.is_active) 
      return left(new InvalidAliasIdOrAccountIsNotActiveError())

    const { name, email, cpf, phone_number, avatar_url, password } = data

    const updatedAccount = await this.accountRepository.update({
      id: foundAccount.id,
      data: { name, email, cpf, avatar_url, phone_number, password }
    })

    if (!updatedAccount) 
      throw new AppError({ message: 'Could not update account', status_code: 400 })

    return right(updatedAccount)
  }
}