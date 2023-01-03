import { left, right } from "@utils/helpers/Either";
import { TAuthenticationResponse } from "@domain/useCases/account/dtos/TAuthenticationResponse";
import { InvalidEmailOrPasswordError } from "@utils/errors/domain/useCases/InvalidEmailOrPasswordError";
import IAuthentication from "@domain/useCases/account/IAuthentication";
import IAuthenticationDTO from "@domain/useCases/account/dtos/IAuthenticationDTO";
import IAccountRepository from "@domain/repositories/account/IAccountRepository";
import IHashComparer from "@data/protocols/cryptography/IHashComparer";
import ISignEncrypter from "@data/protocols/cryptography/ISignEncrypter";

export default class Authentication implements IAuthentication {
  constructor(
    private readonly hashComparer: IHashComparer,
    private readonly sign: ISignEncrypter,
    private readonly accountRepository: IAccountRepository,
  ) {}

  public async authenticate({
    email,
    password,
  }: IAuthenticationDTO): Promise<TAuthenticationResponse> {
    const account = await this.accountRepository.findByEmail(email)

    if (!account) return left(new InvalidEmailOrPasswordError())

    const isPasswordValid = await this.hashComparer.compare(password, account.password)

    if (!isPasswordValid) return left(new InvalidEmailOrPasswordError())

    const token = await this.sign.signAndEncrypt(account.id)

    return right({ token })
  }
}