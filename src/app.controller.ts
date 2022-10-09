import {
  Controller,
  Get,
} from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  public healthCheckCtrl(): string {
    return 'I am healty!';
  }
}