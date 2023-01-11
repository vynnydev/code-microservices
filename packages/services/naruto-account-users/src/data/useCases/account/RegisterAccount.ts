import IAliasGenerator from '@data/protocols/utils/aliasGenerator/IAliasGenerator'

import IAccountRepository from '@domain/repositories/prisma/account/IAccountRepository'

import IRegisterAccount from '@domain/useCases/account/IRegisterAccount'
import IRegisterAccountDTO from '@domain/useCases/account/dtos/IRegisterAccountDTO'
import { TRegisterAccountResponse } from '@domain/useCases/account/dtos/TRegisterAccountResponse'

import IHasher from '@data/protocols/cryptography/IHasher'
import { EAccountRole } from '@domain/enums/account/EAccountRole'
 
import { left, right } from '@utils/helpers/Either'
import { AccountAlreadyExistsError } from '@utils/errors/domain/useCases/AccountAlreadyExistsError'

export default class RegisterAccount implements IRegisterAccount {
  constructor(
    private readonly aliasGenerator: IAliasGenerator,
    private readonly hasher: IHasher,
    private readonly accountRepository: IAccountRepository,
  ) {}

  async register({
    name,
    avatar_url,
    cpf,
    email,
    phone_number,
    role,
    password
  }: IRegisterAccountDTO): Promise<TRegisterAccountResponse> {
    const generatedAlias = this.aliasGenerator.generate('account')
    
    const accountAlreadyExists = await this.accountRepository.exists(email)

    if (accountAlreadyExists)
      return left(new AccountAlreadyExistsError(email))

    const hashedPassword = await this.hasher.hash(password)

    const createdAccount = await this.accountRepository.create({
      alias_id: generatedAlias,
      name,
      avatar_url,
      cpf,
      email,
      phone_number,
      is_active: true,
      role: EAccountRole[role],
      password: hashedPassword,
    })

    return right(createdAccount)
  }
}