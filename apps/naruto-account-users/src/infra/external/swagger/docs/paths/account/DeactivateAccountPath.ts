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