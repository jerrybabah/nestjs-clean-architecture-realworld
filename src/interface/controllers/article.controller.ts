import {
  Controller,
  Get, Post, Put, Delete,
  Query, Param, Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SingleArticle, MultipleArticles, CreateArticle, UpdateArticle } from '@/interface/dtos';

@ApiTags('Article')
@Controller()
export class ArticleController {

  @Get('/articles')
  async getArticlesCtrl(
    @Query('tag') tag: string,
    @Query('author') author: string,
    @Query('favorited') favorited: string,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ): Promise<MultipleArticles> {
    console.log(tag, author, favorited, limit, offset);

    return '' as any;
  }

  @Get('/articles/feed')
  async getArticleFeedCtrl(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
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
    @Body() createArticle: CreateArticle,
  ): Promise<SingleArticle> {
    console.log(createArticle);

    return '' as any;
  }

  @Put('/articles/:slug')
  async updateArticleCtrl(
    @Body() updateArticle: UpdateArticle,
  ): Promise<SingleArticle> {
    console.log(updateArticle);

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
