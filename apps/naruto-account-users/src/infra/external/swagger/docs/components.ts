import { apiKeyAuthSchema } from './schemas/auth'
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
} from './components/'

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