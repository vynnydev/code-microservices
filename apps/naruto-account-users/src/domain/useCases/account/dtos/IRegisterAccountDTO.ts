import { TAccountRole } from '@domain/types/account/TAccountRole'

export default interface IRegisterAccountDTO {
  name: string,
  email: string, 
  avatar_url: string, 
  cpf: string, 
  phone_number: string, 
  password: string,
  role: TAccountRole,
}