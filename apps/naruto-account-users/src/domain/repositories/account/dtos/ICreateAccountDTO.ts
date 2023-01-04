export default interface ICreateAccountDTO {
  alias_id: string,
  name: string,
  avatar_url: string,
  cpf: string,
  email: string,
  phone_number: string,
  password: string,
  is_active: boolean,
}