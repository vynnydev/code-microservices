import { TAccountRole } from '@domain/types/account/TAccountRole'

interface IUpdateAccount {
  name?: string,
  email?: string,
  cpf?: string,
  phone_number?: string,
  password?: string,
  avatar_url?: string,
  is_active?: boolean,
  role?: TAccountRole,
}

export default interface IUpdateAccountDTO {
  id: string,
  data: IUpdateAccount,
}