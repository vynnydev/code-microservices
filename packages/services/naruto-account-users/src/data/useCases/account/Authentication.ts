import IAuthentication from '@domain/useCases/account/IAuthentication'
import IAuthenticationDTO from '@domain/useCases/account/dtos/IAuthenticationDTO'

import IAccountRepository from '@domain/repositories/prisma/account/IAccountRepository'
import IHashComparer from '@data/protocols/cryptography/IHashComparer'
import ISignEncrypter from '@data/protocols/cryptography/ISignEncrypter'
import IAccountCacheProviderRepository from '@domain/repositories/redis/account/IAccountCacheProviderRepository'

import { left, right } from '@utils/helpers/Either'
import { TAuthenticationResponse } from '@domain/useCases/account/dtos/TAuthenticationResponse'
import { InvalidEmailOrPasswordOrIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidEmailOrPasswordOrIsNotActiveError'
import { InvalidPasswordError } from '@utils/errors/domain/useCases/InvalidPasswordError'

export default class Authentication implements IAuthentication {
  constructor(
    private readonly hashComparer: IHashComparer,
    private readonly sign: ISignEncrypter,
    private readonly accountRepository: IAccountRepository,
    private readonly accountCacheProviderRepository: IAccountCacheProviderRepository
  ) {}

  async authenticate({
    email,
    password,
  }: IAuthenticationDTO): Promise<TAuthenticationResponse> {
    const foundAccount = await this.accountRepository.findByEmail(email)

    if (!foundAccount || !foundAccount.is_active) 
      return left(new InvalidEmailOrPasswordOrIsNotActiveError())

    const isPasswordValid = await this.hashComparer.compare(password, foundAccount.password)

    if (!isPasswordValid) return left(new InvalidPasswordError())

    const token = await this.sign.signAndEncrypt(foundAccount.id)

    await this.accountCacheProviderRepository.auth(foundAccount)

    return right({ token })
  }
}