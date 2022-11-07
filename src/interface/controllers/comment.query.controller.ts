import {
  Controller, Inject,
  Get,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ICommentQueryService } from '@/domain/iservices';
import { MultipleComments } from '../dtos';

@ApiTags('Comment')
@Controller()
export class CommentQueryController {
  constructor(
    @Inject('CommentQueryService') private commentQueryService: ICommentQueryService,
  ) {}

  @Get('/articles/:slug/comments')
  async getCommentsCtrl(
    @Param('slug') slug: string,
  ): Promise<MultipleComments> {
    console.log(slug);

    return '' as any;
  }
}