import { EAccountRole } from '@domain/enums/account/EAccountRole'

interface IUpdateAccount {
  cpf: string,
  email: string,
  name: string,
  avatar_url: string,
  phone_number: string,
  password: string,
  role: EAccountRole,
}

export default interface IUpdateAccountDTO {
  account_alias_id: string,
  data: IUpdateAccount,
}