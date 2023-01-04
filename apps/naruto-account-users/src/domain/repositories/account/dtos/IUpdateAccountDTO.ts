interface IUpdateAccount {
  name?: string,
  email?: string,
  cpf?: string,
  phone_number?: string,
  password?: string,
  is_active?: boolean
}

export default interface IUpdateAccountDTO {
  id: string,
  data: IUpdateAccount,
}