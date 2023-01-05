export const findAccountPath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['FindAccount'],
    summary: 'API para encontrar uma conta',
    description: 'Essa rota pode ser executada por **qualquer conta**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/findAccountParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/findAccountResponse'
            }
          }
        }
      },
      400: {
        $ref: '#/helpers/badRequest'
      },
      401: {
        $ref: '#/helpers/unauthorized'
      },
      404: {
        $ref: '#/helpers/notFound'
      },
      500: {
        $ref: '#/helpers/serverError'
      }
    }
  }
}