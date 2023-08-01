interface IError {
  status: number;
  message: string
}

export class CustomError extends Error {
  private _status: number;

  constructor({ message, status }: IError) {
    super(message);

    this._status = status;
  }

  public get status(): number {
    return this._status;
  }
}