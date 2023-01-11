import IAuthentication from '@domain/useCases/account/IAuthentication'
import IAuthenticationDTO from '@domain/useCases/account/dtos/IAuthenticationDTO'
import { TAuthenticationResponse } from '@domain/useCases/account/dtos/TAuthenticationResponse'

import { right } from '@utils/helpers/Either'

export default class FakeAuthentication implements IAuthentication {
  public async authenticate(data: IAuthenticationDTO): Promise<TAuthenticationResponse> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

    return right({ token })
  }
}