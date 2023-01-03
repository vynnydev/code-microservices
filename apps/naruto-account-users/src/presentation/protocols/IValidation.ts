import { Either } from '@utils/helpers/Either'

export interface IValidation<T = any> {
  validate(data: T): Either<Error, null>
}