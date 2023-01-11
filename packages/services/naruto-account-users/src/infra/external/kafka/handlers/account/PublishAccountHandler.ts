import IKafkaMessagingAdapter from '@presentation/protocols/IKafkaMessagingAdapter';
import { IPublishAccountHandler, TPublishAccountHandlerRequest } from '../../protocols/IPublishAccountHandler';

export default class PublishAccountHandler implements IPublishAccountHandler {
  constructor(
    private readonly messagingAdapter: IKafkaMessagingAdapter
  ) {}

  async handle({ topic, account }: TPublishAccountHandlerRequest): Promise<void> {
    await this.messagingAdapter.sendMessage(topic, {
      account: {
        id: account.id,
        name: account.name,
        avatar_url: account.avatar_url,
        email: account.email,
        cpf: account.cpf,
        phone_number: account.phone_number,
        password: account.password,
        role: account.role,
        created_at: account.created_at,
        updated_at: account.updated_at,
      }
    })
  }
}
