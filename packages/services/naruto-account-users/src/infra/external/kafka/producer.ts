import { config } from 'dotenv-flow'
import { kafka } from './client'
import logger from '@infra/external/logger/pino/logger'

config({ silent: true })

export const producer = kafka.producer({
  allowAutoTopicCreation: true,
})

producer.connect().then(() => {
  logger.info('[MicroAccounts] Kafka producer connected');
})
