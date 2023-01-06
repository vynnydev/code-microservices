import * as dotenv from 'dotenv';

// diretorio do arquivo env
const path = `${__dirname}../../../.env`

dotenv.config({ path });

export default {
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}

// App
export const {
  NODE_ENV,
  PORT
} = process.env

// Database
export const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASS,
  DATABASE_NAME,
} = process.env

// Redis
export const {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASS,
  REDIS_DB,
} = process.env

// Kafka
export const {
  KAFKA_CLIENT_ID,
  KAFKA_BROKER,
  KAFKA_CONSUMER_GROUP_ID,
  KAFKA_MECHANISM,
  KAFKA_SASL_USERNAME,
  KAFKA_SASL_PASSWORD,
} = process.env