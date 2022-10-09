import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ListOfTags } from '@/interface/dtos';

@ApiTags('Tag')
@Controller()
export class TagController {

  @Get('/tags')
  public getTagsCtrl(): Promise<ListOfTags> {
    return '' as any;
  }
}