import pino from 'pino'
import { logger } from '@main/config/environment'

export default pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  },
  enabled: logger.enabled,
  level: logger.level
})