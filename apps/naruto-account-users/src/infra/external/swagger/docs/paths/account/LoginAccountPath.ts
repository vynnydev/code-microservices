export const loginAccountPath = {
  post: {
    tags: ['Login'],
    summary: 'API para autenticar uma conta',
    description: 'Essa rota pode ser executada por **qualquer conta**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginAccountParams'
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
              $ref: '#/schemas/loginAccountResponse'
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
