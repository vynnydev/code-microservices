import Joi from 'joi';

import IAvatarUrlValidator from '@utils/validation/protocols/common/IAvatarUrlValidator';

export default class AvatarUrlValidatorAdapter implements IAvatarUrlValidator {
  public isValid(avatar_url: any): boolean {
    const schema = Joi.object().keys({
      avatar_url: Joi.string().required(),
    });

    const { error } = schema.validate({ avatar_url });

    if (error) return false;

    const isValid = 
      avatar_url.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi) as boolean

    if (!isValid) return false

    return isValid;
  }
}