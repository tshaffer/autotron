export enum BsAutotronErrorType {
  unknownError,
  unexpectedError,
  invalidParameters,
  invalidOperation,
  apiError,
  invalidModel,
}

const bsAutotronErrorMessage: {[type: number]: string} = {
  [BsAutotronErrorType.unknownError]: 'Unknown error',
  [BsAutotronErrorType.unexpectedError]: 'Unexpected error',
  [BsAutotronErrorType.invalidParameters]: 'Invalid parameters',
  [BsAutotronErrorType.invalidOperation]: 'Invalid operation attempt',
  [BsAutotronErrorType.apiError]: 'API error',
  [BsAutotronErrorType.invalidModel]: 'Invalid model',
};

export class BsAutotronError extends Error {
  name = 'BsAutotronError';
  type: BsAutotronErrorType;

  constructor(type: BsAutotronErrorType, reason?: string) {
    super();
    this.type = type;
    if (reason) {
      this.message = bsAutotronErrorMessage[type] + ': ' + reason;
    } else {
      this.message = bsAutotronErrorMessage[type];
    }
    Object.setPrototypeOf(this, BsAutotronError.prototype);
  }
}

export function isBsAutotronError(error: Error): error is BsAutotronError {
  return error instanceof BsAutotronError;
}
