import { Account } from "@prisma/client";
import { Either } from "@utils/helpers/Either";
import { InvalidAliasIdOrAccountIsNotActiveError } 
  from "@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError";

export type TFindAccountResponse = Either<
  InvalidAliasIdOrAccountIsNotActiveError,
  Account
>