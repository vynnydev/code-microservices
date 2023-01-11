export default interface ISignEncrypter {
  signAndEncrypt(account_id: string): Promise<string>
}
