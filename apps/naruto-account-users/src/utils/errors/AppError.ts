import { EErrorType } from './EErrorType';

interface IErrorConstructor {
  message: string;
  status_code: number;
}

export default class AppError extends Error {
  public readonly status_code: number;

  public readonly message: string;

  public readonly type = EErrorType.APP_ERROR;

  constructor({ message, status_code }: IErrorConstructor) {
    super(message);

    this.status_code = status_code;
    this.message = message;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
