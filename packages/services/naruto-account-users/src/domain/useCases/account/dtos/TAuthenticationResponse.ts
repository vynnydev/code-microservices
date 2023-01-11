import { InvalidEmailOrPasswordOrIsNotActiveError } 
  from '@utils/errors/domain/useCases/InvalidEmailOrPasswordOrIsNotActiveError';import { Either } from "@utils/helpers/Either"

type TokenResponse = {
  token: string
}

export type TAuthenticationRequest = {
  email: string
  password: string
}

export type TAuthenticationResponse = Either<
  InvalidEmailOrPasswordOrIsNotActiveError,
  TokenResponse
>