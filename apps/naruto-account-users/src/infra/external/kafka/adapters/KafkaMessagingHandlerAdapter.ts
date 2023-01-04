import IKafkaMessagingAdapter from "@presentation/protocols/IKafkaMessagingAdapter";
import { producer } from "@infra/external/kafka/producer"
import { kafka } from "@infra/external/kafka/client"

export default class KafkaMessagingHandlerAdapter implements IKafkaMessagingAdapter {
  async sendMessage(topic: string, message: any) {
    console.log(`[Accounts] New message on topic "${topic}"`);
    console.log(JSON.stringify(message, null, 2))

    const admin = kafka.admin()
    await admin.connect()

    await admin.createTopics({
      waitForLeaders: true,
      topics: [
        { topic: 'accounts.new-account' },
      ],
    })

    await producer.send({
      topic: 'accounts.new-account',
      messages: [
        { value: JSON.stringify(message) }
      ]
    })
  }
}