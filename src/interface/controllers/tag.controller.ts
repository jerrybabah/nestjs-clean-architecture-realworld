import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MultipleTags } from '@/interface/dtos';

@ApiTags('Tag')
@Controller()
export class TagController {

  @Get('/tags')
  public getTagsCtrl(): Promise<MultipleTags> {
    return '' as any;
  }
}