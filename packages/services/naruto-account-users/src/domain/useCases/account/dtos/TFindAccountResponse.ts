import Account from '@domain/models/account/Account';
import { Either } from '@utils/helpers/Either';
import { InvalidAliasIdOrAccountIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidAliasIdOrAccountIsNotActiveError';

export type TFindAccountResponse = Either<
  InvalidAliasIdOrAccountIsNotActiveError,
  Account
>