import ElasticApmNode from 'elastic-apm-node'

import IApmServiceProvider from '../protocols/IApmServiceProvider'

import {
  ELASTIC_URL
} from '@main/config/environment'

import logger from '@infra/external/logger/pino/logger'

export default class ApmProvider implements IApmServiceProvider {
  public startElasticService(): void {
    try {
      ElasticApmNode.start({
        serviceName: 'naruto-account-users',
        serverUrl: ELASTIC_URL,
        environment: 'local'
      })
    } catch (error) {
      logger.error(error)
    }
  }
}