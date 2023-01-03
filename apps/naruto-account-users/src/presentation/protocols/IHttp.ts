export type IHttpResponse = {
  status_code: number,
  body: any,
}

export interface IHttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  api_gateway?: any;
}

export function success<T>(dto?: T): IHttpResponse {
  return {
    status_code: 200,
    body: dto,
  }
}

export function created(): IHttpResponse {
  return {
    status_code: 201,
    body: undefined,
  }
}

export function clientError(error: Error): IHttpResponse {
  return {
    status_code: 400,
    body: {
      error: error.message
    },
  }
}

export function unauthorized(error: Error): IHttpResponse {
  return {
    status_code: 401,
    body: {
      error: error.message,
    },
  }
}

export function forbidden(error: Error): IHttpResponse {
  return {
    status_code: 403,
    body: {
      error: error.message,
    },
  }
}

export function notFound(error: Error): IHttpResponse {
  return {
    status_code: 404,
    body: {
      error: error.message,
    },
  }
}

export function conflict(error: Error): IHttpResponse {
  return {
    status_code: 409,
    body: {
      error: error.message,
    },
  }
}

export function tooMany(error: Error): IHttpResponse {
  return {
    status_code: 429,
    body: {
      error: error.message,
    },
  }
}

export function fail(error: Error) {
  console.log(error)

  return {
    status_code: 500,
    body: {
      error: error.message,
    },
  }
}