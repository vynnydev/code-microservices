import { EAccountRole } from '@domain/enums/account/EAccountRole'

export type TPublishAccountHandlerRequest = {
  topic: string,
  account: {
    id: string,
    alias_id: string,
    name: string,
    avatar_url: string,
    email: string,
    cpf: string,
    phone_number: string,
    password: string,
    role: EAccountRole,
    created_at: Date,
    updated_at: Date,
  }
}

export interface IPublishAccountHandler {
  handle(account: TPublishAccountHandlerRequest): Promise<void>
}