import IApmServiceProvider from '../protocols/IApmServiceProvider'
import ApmServiceProvider from '../services/ApmServiceProvider'

export const makeApmServiceProvider = (): IApmServiceProvider => {
  const apmServiceProvider = new ApmServiceProvider()

  return apmServiceProvider
}