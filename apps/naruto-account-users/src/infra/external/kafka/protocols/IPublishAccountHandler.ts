export type TPublishAccountHandlerRequest = {
  account: {
    id: string,
    alias_id: string,
    name: string,
    avatar_url: string,
    email: string,
    cpf: string,
    phone_number: string,
    password: string,
    created_at: Date,
    updated_at: Date,
  }
}

export interface IPublishAccountHandler {
  handle(account: TPublishAccountHandlerRequest): Promise<void>
}