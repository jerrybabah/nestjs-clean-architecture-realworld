import {
  Controller,
  Post, Put, Delete,
  Param, Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SingleArticle, ArticleCreation, ArticleModification } from '../dtos';

@ApiTags('Article')
@Controller()
export class ArticleCommandController {

  @Post('/articles')
  async createArticleCtrl(
    @Body() articleCreation: ArticleCreation,
  ): Promise<SingleArticle> {
    console.log(articleCreation);

    return '' as any;
  }

  @Put('/articles/:slug')
  async updateArticleCtrl(
    @Body() articleModification: ArticleModification,
  ): Promise<SingleArticle> {
    console.log(articleModification);

    return '' as any;
  }

  @Delete('/articles/:slug')
  async deleteArticleCtrl(
    @Param('slug') slug: string,
  ): Promise<void> {
    console.log(slug);
  }

  @Post('/articles/:slug/favorite')
  async favoriteArticleCtrl(
    @Param('slug') slug: string,
  ): Promise<SingleArticle> {
    console.log(slug);

    return '' as any;
  }

  @Delete('/articles/:slug/favorite')
  async unfavoriteArticleCtrl(
    @Param('slug') slug: string,
  ): Promise<SingleArticle> {
    console.log(slug);

    return '' as any;
  }
}