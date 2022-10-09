import {
  Controller,
  Get, Post, Delete,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Profile } from '@/interface/dtos';

@ApiTags('Profile')
@Controller()
export class ProfileController {

  @Get('/profiles/:username')
  async getProfileCtrl(
    @Param('username') username: string,
  ): Promise<Profile> {
    console.log(username);

    return '' as any;
  }

  @Post('/profiles/:username/follow')
  async followUserCtrl(
    @Param('username') username: string,
  ): Promise<Profile> {
    console.log(username);

    return '' as any;
  }

  @Delete('/profiles/:username/follow')
  async unfollowUserCtrl(
    @Param('username') username: string,
  ): Promise<Profile> {
    console.log(username);

    return '' as any;
  }
}