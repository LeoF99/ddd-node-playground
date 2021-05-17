export default class GeneralError extends Error {
  private readonly errors: [{ field: string; code: string }];

  constructor(message: string, errors: [{ field: string; code: string }]) {
    super();
    this.errors = errors;
    this.message = message;
  }

  getCode(): number {
    return 500;
  }

  getErrors(): [{ field: string; code: string }] {
    return this.errors;
  }

  getMessage(): string {
    return this.message;
  }
}
