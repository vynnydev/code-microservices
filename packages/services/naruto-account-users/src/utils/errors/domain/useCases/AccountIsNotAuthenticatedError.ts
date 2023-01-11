import { IUseCaseError } from '../IUseCaseError'

export class AccountIsNotAuthenticatedError extends Error implements IUseCaseError {
  constructor(email: string) {
    super(`The account '${email}' is not authenticated.`)
    this.name = 'AccountIsNotAuthenticatedError'
  }
}