import { TAccountRole } from '@domain/types/account/TAccountRole'

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
  role?: TAccountRole,
  created_at?: Date,
  updated_at?: Date,
}
