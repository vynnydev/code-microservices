import IKafkaMessagingAdapter from '@presentation/protocols/IKafkaMessagingAdapter';

import KafkaMessagingHandlerAdapter from '@infra/external/kafka/adapters/KafkaMessagingHandlerAdapter'

const makeKafkaMessagingHandlerAdapter = (): IKafkaMessagingAdapter => {
  const kafkaMessagingHandlerAdapter = new KafkaMessagingHandlerAdapter()

  return kafkaMessagingHandlerAdapter
}

export default { makeKafkaMessagingHandlerAdapter }