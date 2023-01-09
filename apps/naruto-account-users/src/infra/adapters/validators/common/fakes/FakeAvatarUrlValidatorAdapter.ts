import IAvatarUrlValidator from '@utils/validation/protocols/common/IAvatarUrlValidator'

export default class FakeAvatarUrlValidatorAdapter implements IAvatarUrlValidator {
  public isValid(avatar_url: string): boolean {
    return true
  }
}