import { TAccountRole } from '@domain/types/account/TAccountRole'

interface IUpdateAccount {
  cpf: string,
  email: string,
  name: string,
  avatar_url: string,
  phone_number: string,
  password: string,
  role: TAccountRole,
}

export default interface IUpdateAccountDTO {
  account_alias_id: string,
  data: IUpdateAccount,
}