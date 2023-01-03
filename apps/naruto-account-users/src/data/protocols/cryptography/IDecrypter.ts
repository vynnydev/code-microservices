export default interface IDecrypter {
  decrypt(ciphertext: string): Promise<string>
}
