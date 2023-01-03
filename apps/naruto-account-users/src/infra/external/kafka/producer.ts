import { config } from 'dotenv-flow'
import { kafka } from "./client"

config({ silent: true })

export const producer = kafka.producer({
  allowAutoTopicCreation: true,
})

producer.connect().then(() => {
  console.log('[Accounts] Kafka producer connected');
})
