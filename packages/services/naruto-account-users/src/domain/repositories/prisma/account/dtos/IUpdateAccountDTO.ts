import { EAccountRole } from '@domain/enums/account/EAccountRole'

interface IUpdateAccount {
  name?: string,
  email?: string,
  cpf?: string,
  phone_number?: string,
  password?: string,
  avatar_url?: string,
  is_active?: boolean,
  role?: EAccountRole,
}

export default interface IUpdateAccountDTO {
  id: string,
  data: IUpdateAccount,
}