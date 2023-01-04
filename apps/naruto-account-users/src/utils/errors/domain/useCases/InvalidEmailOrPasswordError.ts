import { IUseCaseError } from '../IUseCaseError'

export class InvalidEmailOrPasswordError extends Error implements IUseCaseError {
  constructor() {
    super(`Invalid e-mail/password combination.`)
    this.name = 'InvalidEmailOrPasswordError'
  }
}
