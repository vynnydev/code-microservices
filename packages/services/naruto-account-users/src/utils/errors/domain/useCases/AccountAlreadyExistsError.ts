import { IUseCaseError } from '../IUseCaseError'

export class AccountAlreadyExistsError extends Error implements IUseCaseError {
  constructor(email: string) {
    super(`The email '${email}' is already registered.`)
    this.name = 'AccountAlreadyExistsError'
  }
}
