import GeneralError from './general.error';

export default class BusinessError extends GeneralError {
  constructor(errors: [{ field: string; code: string }]) {
    super('Business error', errors);
  }

  getCode(): number {
    return 422;
  }
}
