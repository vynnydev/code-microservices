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
        $ref: '#/components/badRequest'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}