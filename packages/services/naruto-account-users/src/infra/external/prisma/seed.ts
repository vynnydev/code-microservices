import { v4 } from 'uuid'

import { prisma } from './client'

async function main() {
  const user = await prisma.user.create({
    data: {
      id: v4(),
      first_name: 'John',
      last_name: 'Martin Doe',
      avatar_url: 'https://github.com/vynnydev.png',
      cpf: '523.168.490-24',
      phone_number: '11987438503',
      email: 'john@doe.com',
      password: '123456',
    }
  })

  await prisma.account.create({
    data: {
      id: v4(),
      account_type: 'ONLY_CUSTOMER',
      user_ecom_experience: 'BEGINNER',
      user_id: user.id
    },
  })
}

main()
