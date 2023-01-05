import {
  signUpAccountParamsSchema,
  signUpAccountResponseSchema,
  loginAccountParamsSchema,
  loginAccountResponseSchema,
  findAccountParamsSchema,
  findAccountResponseSchema,
  updateAccountParamsSchema,
  updateAccountResponseSchema,
  deactivateAccountParamsSchema,
  deactivateAccountResponseSchema,
} from './schemas/account'
import { errorSchema } from './schemas/error'

export default {
  signUpAccountParams: signUpAccountParamsSchema,
  signUpAccountResponse: signUpAccountResponseSchema,
  loginAccountParams: loginAccountParamsSchema,
  loginAccountResponse: loginAccountResponseSchema,
  findAccountParams: findAccountParamsSchema,
  findAccountResponse: findAccountResponseSchema,
  updateAccountParams: updateAccountParamsSchema,
  updateAccountResponse: updateAccountResponseSchema,
  deactivateAccountParams: deactivateAccountParamsSchema,
  deactivateAccountResponse: deactivateAccountResponseSchema,
  error: errorSchema,
}