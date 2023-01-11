import { apiKeyAuthSchema } from './schemas/auth'
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
} from './helpers/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
}