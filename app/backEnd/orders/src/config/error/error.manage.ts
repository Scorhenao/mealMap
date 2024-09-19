import { HttpException, HttpStatus } from '@nestjs/common';

export class errorManage extends Error {
  constructor({
    type,
    message,
  }: {
    type: keyof typeof HttpStatus;
    message: string;
  }) {
    super(`${type}:${message}`);
  }

  public static errorManageController(message: string) {
    const name = message.split(':')[0];
    if (name) {
      throw new HttpException(message, HttpStatus[name]);
    } else {
      throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
