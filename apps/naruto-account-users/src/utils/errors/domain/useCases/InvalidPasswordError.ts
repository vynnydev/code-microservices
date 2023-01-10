import { IUseCaseError } from '../IUseCaseError'

export class InvalidPasswordError extends Error implements IUseCaseError {
  constructor() {
    super(`Invalid password combination.`)
    this.name = 'InvalidPasswordError'
  }
}