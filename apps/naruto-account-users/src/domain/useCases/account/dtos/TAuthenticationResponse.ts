import { InvalidEmailOrPasswordError } from "@utils/errors/domain/useCases/InvalidEmailOrPasswordError"
import { Either } from "@utils/helpers/Either"

type TokenResponse = {
  token: string
}

export type TAuthenticationRequest = {
  email: string
  password: string
}

export type TAuthenticationResponse = Either<
  InvalidEmailOrPasswordError,
  TokenResponse
>