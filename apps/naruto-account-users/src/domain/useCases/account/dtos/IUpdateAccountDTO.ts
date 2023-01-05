interface IUpdateAccount {
  cpf: string,
  email: string,
  name: string,
  avatar_url: string,
  phone_number: string,
  password: string,
}

export default interface IUpdateAccountDTO {
  account_alias_id: string,
  data: IUpdateAccount,
}