import {
  Controller, Inject,
  Get,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IUserQueryService } from '@/domain/iservices';
import { SingleUser, SingleProfile } from '../dtos';

@ApiTags('User')
@Controller()
export class UserQueryController {
  constructor(
    @Inject('UserQueryService') private userQueryService: IUserQueryService,
  ) {}

  @Get('/user')
  async getCurrentUserCtrl(): Promise<SingleUser> {

    return '' as any;
  }

  @Get('/profiles/:username')
  async getProfileCtrl(
    @Param('username') username: string,
  ): Promise<SingleProfile> {
    console.log(username);

    return '' as any;
  }
}