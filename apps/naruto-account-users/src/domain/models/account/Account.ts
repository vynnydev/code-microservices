import { TAccountRole } from '@domain/types/account/TAccountRole'

export default class Account {
  id: string;

  alias_id: string;

  name: string;
  
  avatar_url: string;
  
  email: string;

  cpf: string;

  phone_number: string;
  
  password: string;

  is_active: boolean;

  role: TAccountRole;

  created_at: Date;
  
  updated_at: Date;
}