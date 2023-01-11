import { Either } from '@utils/helpers/Either'
import Account from '@domain/models/account/Account'
import { AccountAlreadyExistsError } from '@utils/errors/domain/useCases/AccountAlreadyExistsError'

export type TRegisterAccountResponse = Either<
  | AccountAlreadyExistsError,
  Account
>