export const deactivateAccountPath = {
  put: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['DeactivateAccount'],
    summary: 'API para desativar uma conta',
    description: 'Essa rota pode ser executada por **qualquer conta**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/deactivateAccountParams'
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
              $ref: '#/schemas/deactivateAccountResponse'
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