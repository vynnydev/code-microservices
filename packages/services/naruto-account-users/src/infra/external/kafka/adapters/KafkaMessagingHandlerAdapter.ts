import IKafkaMessagingAdapter from '@presentation/protocols/IKafkaMessagingAdapter';
import { producer } from '@infra/external/kafka/producer'
import { kafka } from '@infra/external/kafka/client'
import logger from '@infra/external/logger/pino/logger'

export default class KafkaMessagingHandlerAdapter implements IKafkaMessagingAdapter {
  async sendMessage(topic: string, message: any) {
    logger.info(`[Accounts] New message on topic '${topic}'`);
    logger.info(JSON.stringify(message, null, 2))

    const admin = kafka.admin()
    await admin.connect()

    await admin.createTopics({
      waitForLeaders: true,
      topics: [
        { topic: 'accounts.new-account' },
        { topic: 'accounts.change-account' },
        { topic: 'accounts.deactivate-account' },
      ],
    })

    await producer.send({
      topic,
      messages: [
        { value: JSON.stringify(message) }
      ]
    })
  }
}