import {
  loginAccountPath,
  signUpAccountPath,
  findAccountPath,
  updateAccountPath,
  deactivateAccountPath,
} from './paths/account'

export default {
  '/accounts/login': loginAccountPath,
  '/accounts/signup': signUpAccountPath,
  '/accounts/find/:account_alias_id': findAccountPath,
  '/accounts/update/:account_alias_id': updateAccountPath,
  '/accounts/deactivate/:account_alias_id': deactivateAccountPath
}