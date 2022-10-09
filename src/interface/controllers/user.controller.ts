import {
  Controller,
  Get, Put,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User, UpdateUser } from '@/interface/dtos';

@ApiTags('User')
@Controller()
export class UserController {

  @Get('/user')
  async getCurrentUserCtrl(): Promise<User> {

    return '' as any;
  }

  @Put('/user')
  async updateUserCtrl(
    @Body() updateUser: UpdateUser,
  ): Promise<User> {
    console.log(updateUser);

    return '' as any;
  }
}