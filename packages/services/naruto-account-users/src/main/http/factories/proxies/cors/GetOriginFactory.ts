import IGetOrigin from '@domain/proxies/useCases/cors/IGetOrigin'

import GetOrigin from '@data/proxies/useCases/cors/GetOrigin'

const makeGetOrigin = (): IGetOrigin => {
  const getOrigin = new GetOrigin()

  return getOrigin
}

export default { makeGetOrigin }
