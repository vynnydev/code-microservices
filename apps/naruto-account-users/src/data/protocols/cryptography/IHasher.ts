export default interface IHasher {
  hash(plaintext: string): Promise<string>
}