import IAuthenticationDTO from './dtos/IAuthenticationDTO'
import { TAuthenticationResponse } from './dtos/TAuthenticationResponse'

export default interface IAuthentication {
  authenticate(data: IAuthenticationDTO): Promise<TAuthenticationResponse>
}