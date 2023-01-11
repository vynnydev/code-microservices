import FakeAvatarUrlValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeAvatarUrlValidatorAdapter'

import AvatarUrlValidation from '@utils/validation/validators/common/AvatarUrlValidation'

let avatarUrlValidation: AvatarUrlValidation

let fakeAvatarUrlValidatorAdapter: FakeAvatarUrlValidatorAdapter

describe('AvatarUrlValidation', () => {
  beforeAll(() => {
    fakeAvatarUrlValidatorAdapter = new FakeAvatarUrlValidatorAdapter()

    avatarUrlValidation = new AvatarUrlValidation('avatar_url', fakeAvatarUrlValidatorAdapter)
  })

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeAvatarUrlValidatorAdapter, 'isValid')

    avatarUrlValidation.validate({ avatar_url: 'any_avatar_url' })

    expect(isValidSpy).toHaveBeenCalledWith('any_avatar_url')
  })

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeAvatarUrlValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error()
    })

    expect(() => {
      avatarUrlValidation.validate({ avatar_url: 'any_avatar_url' })
    }).toThrow()
  })

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeAvatarUrlValidatorAdapter, 'isValid').mockImplementationOnce(() => false)

    expect(() => {
      avatarUrlValidation.validate({ avatar_url: 'any_avatar_url' })
    }).toThrow()
  })

  it('should be able to validate', () => {
    const error = avatarUrlValidation.validate({ avatar_url: 'any_avatar_url' })

    expect(error).toBeFalsy()
  })
})