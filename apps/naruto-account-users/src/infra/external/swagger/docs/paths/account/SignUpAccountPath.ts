export const signUpAccountPath = {
  post: {
    tags: ['SignUp'],
    summary: 'API para criar conta de um usuário',
    description: 'Essa rota pode ser executada por **qualquer conta**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/signUpAccountParams'
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
              $ref: '#/schemas/signUpAccountResponse'
            }
          }
        }
      },
      400: {
        $ref: '#/helpers/badRequest'
      },
      403: {
        $ref: '#/helpers/forbidden'
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