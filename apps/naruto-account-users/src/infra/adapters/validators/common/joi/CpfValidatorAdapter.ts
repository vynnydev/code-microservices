import Joi from 'joi';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

import ICpfValidator from '@utils/validation/protocols/common/ICpfValidator';

export default class CpfValidatorAdapter implements ICpfValidator {
  public isValid(cpf: any): boolean {
    const schema = Joi.object().keys({
      cpf: Joi.string().required(),
    });

    const { error } = schema.validate({ cpf });

    if (error) return false;

    const isValid = cpfValidator.isValid(cpf);

    return isValid;
  }
}
