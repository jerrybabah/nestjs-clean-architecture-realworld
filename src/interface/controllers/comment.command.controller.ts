import {
  Controller,
  Post, Delete,
  Param, Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SingleComment, CommentCreation } from '../dtos';

@ApiTags('Comment')
@Controller()
export class CommentCommandController {

  @Post('/articles/:slug/comments')
  async addCommentCtrl(
    @Param('slug') slug: string,
    @Body() commentCreation: CommentCreation,
  ): Promise<SingleComment> {
    console.log(slug, commentCreation);

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