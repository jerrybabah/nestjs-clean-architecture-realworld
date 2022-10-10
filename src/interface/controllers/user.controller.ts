import {
  Controller,
  Get, Put, Post, Delete,
  Body, Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SingleUser, UserModification, SingleProfile, UserLogin, UserRegistration } from '@/interface/dtos';

@ApiTags('User')
@Controller()
export class UserController {

  @Post('/users/login')
  async loginUser(
    @Body() userLogin: UserLogin,
  ): Promise<SingleUser> {
    console.log(userLogin);

    return '' as any;
  }

  @Post('/users')
  async registerUser(
    @Body() userRegistration: UserRegistration,
  ): Promise<SingleUser> {
    console.log(userRegistration);

    return '' as any;
  }

  @Get('/user')
  async getCurrentUserCtrl(): Promise<SingleUser> {

    return '' as any;
  }

  @Put('/user')
  async updateUserCtrl(
    @Body() userModification: UserModification,
  ): Promise<SingleUser> {
    console.log(userModification);

    return '' as any;
  }

  @Get('/profiles/:username')
  async getProfileCtrl(
    @Param('username') username: string,
  ): Promise<SingleProfile> {
    console.log(username);

    return '' as any;
  }

  @Post('/profiles/:username/follow')
  async followUserCtrl(
    @Param('username') username: string,
  ): Promise<SingleProfile> {
    console.log(username);

    return '' as any;
  }

  @Delete('/profiles/:username/follow')
  async unfollowUserCtrl(
    @Param('username') username: string,
  ): Promise<SingleProfile> {
    console.log(username);

    return '' as any;
  }
}