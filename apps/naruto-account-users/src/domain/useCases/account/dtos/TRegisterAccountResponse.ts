import { Either } from "@utils/helpers/Either"
import { Account } from "@prisma/client"
import { AccountAlreadyExistsError } from "@utils/errors/domain/useCases/AccountAlreadyExistsError"

export type TRegisterAccountResponse = Either<
  | AccountAlreadyExistsError,
  Account
>