import {
  Controller,
  Post, Get, Delete,
  Param, Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SingleComment, MultipleComments, CommentCreation } from '@/interface/dtos';

@ApiTags('Comment')
@Controller()
export class CommentController {

  @Post('/articles/:slug/comments')
  async addCommentCtrl(
    @Param('slug') slug: string,
    @Body() commentCreation: CommentCreation,
  ): Promise<SingleComment> {
    console.log(slug, commentCreation);

    return '' as any;
  }

  @Get('/articles/:slug/comments')
  async getCommentsCtrl(
    @Param('slug') slug: string,
  ): Promise<MultipleComments> {
    console.log(slug);

    return '' as any;
  }

  @Delete('/articles/:slug/comments/:id')
  async deleteCommentCtrl(
    @Param('slug') slug: string,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    console.log(slug, id);
  }
}