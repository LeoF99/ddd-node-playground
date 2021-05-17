import GeneralError from '../general.error';

describe('GeneralError', () => {
  const error = {
    field: 'some field',
    code: 'some code',
  };

  const myError = new GeneralError('some error', [error]);

  it('getCode must be 500', () => {
    expect(myError.getCode()).toBe(500);
  });

  it('getErros must return errors properly', () => {
    expect(myError.getErrors()).toEqual([error]);
  });
});
