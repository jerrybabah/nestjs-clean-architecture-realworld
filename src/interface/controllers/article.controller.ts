import {
  Controller,
  Get, Post, Put, Delete,
  Query, Param, Body,
  ParseIntPipe, DefaultValuePipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SingleArticle, MultipleArticles, ArticleCreation, ArticleModification } from '@/interface/dtos';

@ApiTags('Article')
@Controller()
export class ArticleController {

  @Get('/articles')
  async getArticlesCtrl(
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('tag') tag?: string,
    @Query('author') author?: string,
    @Query('favorited') favorited?: string,
  ): Promise<MultipleArticles> {
    console.log(tag, author, favorited, limit, offset);

    return '' as any;
  }

  @Get('/articles/feed')
  async getArticleFeedCtrl(
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
  ): Promise<MultipleArticles> {
    console.log(limit, offset);

    return '' as any;
  }

  @Get('/articles/:slug')
  async getArticleCtrl(
    @Param('slug') slug: string,
  ): Promise<SingleArticle> {
    console.log(slug);

    return '' as any;
  }

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
