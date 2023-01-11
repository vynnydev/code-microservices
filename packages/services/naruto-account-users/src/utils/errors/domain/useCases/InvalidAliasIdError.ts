import { IUseCaseError } from '../IUseCaseError'

export class InvalidAliasIdError extends Error implements IUseCaseError {
  constructor() {
    super(`Invalid alias_id.`)
    this.name = 'InvalidAliasIdError'
  }
}
