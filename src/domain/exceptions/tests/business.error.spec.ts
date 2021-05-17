import BusinessError from '../business.error';

describe('BusinessError', () => {
  const error = {
    field: 'some field',
    code: 'some code',
  };

  const myBusinessError = new BusinessError([error]);

  it('getCode must be 422', () => {
    expect(myBusinessError.getCode()).toBe(422);
  });

  it('getErros must return errors properly', () => {
    expect(myBusinessError.getErrors()).toEqual([error]);
  });

  it('getMessage must return Business error', () => {
    expect(myBusinessError.getMessage()).toBe('Business error');
  });
});
