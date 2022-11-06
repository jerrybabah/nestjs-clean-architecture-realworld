import {
  Controller,
  Get,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MultipleTags } from '../dtos';

@ApiTags('Tag')
@Controller()
export class TagQueryController {

  @Get('/tags')
  public getTagsCtrl(): Promise<MultipleTags> {
    return '' as any;
  }
}