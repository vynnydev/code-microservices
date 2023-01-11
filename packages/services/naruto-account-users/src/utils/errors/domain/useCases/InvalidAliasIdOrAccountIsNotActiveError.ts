import { IUseCaseError } from '../IUseCaseError'

export class InvalidAliasIdOrAccountIsNotActiveError extends Error implements IUseCaseError {
  constructor() {
    super(`Invalid alias_id/account is not active.`)
    this.name = 'InvalidAliasIdOrAccountIsNotActiveError'
  }
}