import { IUseCaseError } from '../IUseCaseError'

export class InvalidEmailOrPasswordOrIsNotActiveError extends Error implements IUseCaseError {
  constructor() {
    super(`Invalid e-mail/password combination/is not active.`)
    this.name = 'InvalidEmailOrPasswordOrIsNotActiveError'
  }
}
