import ISignEncrypter from '@data/protocols/cryptography/ISignEncrypter'
import IDecrypter from '@data/protocols/cryptography/IDecrypter'

import jwt from 'jsonwebtoken'
import { auth } from '@infra/config/Auth'

export class JwtAdapter implements ISignEncrypter, IDecrypter {
  constructor (private readonly secret: string) {}

  async signAndEncrypt (account_id: string): Promise<string> {
    const token = jwt.sign({}, auth.secretKey, {
      subject: account_id,
      expiresIn: auth.expiresIn,
    })

    return token
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
