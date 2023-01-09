import { EAccountRole } from '@domain/enums/account/EAccountRole'

export default interface IMockAccountModelDTO {
  id?: string,
  alias_id?: string,
  name?: string,
  email?: string,
  phone_number?: string,
  avatar_url?: string,
  cpf?: string,
  password?: string,
  is_active?: boolean,
  role?: EAccountRole,
  created_at?: Date,
  updated_at?: Date,
}
