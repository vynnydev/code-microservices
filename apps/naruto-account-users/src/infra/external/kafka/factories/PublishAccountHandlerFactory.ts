import { IPublishAccountHandler } from "../protocols/IPublishAccountHandler";

import kafkaMessagingHandlerAdapterFactory from "./adapters/KafkaHandlerAdapterFactory";

import PublishAccountHandler from '@infra/external/kafka/handlers/PublishAccountHandler'

export const makePublishAccountHandler = (): IPublishAccountHandler => {
  const kafkaMessagingHandlerAdapter = 
    kafkaMessagingHandlerAdapterFactory.makeKafkaMessagingHandlerAdapter()

  const publishAccountHandler = new PublishAccountHandler(
    kafkaMessagingHandlerAdapter
  )

  return publishAccountHandler
}

export default { makePublishAccountHandler }