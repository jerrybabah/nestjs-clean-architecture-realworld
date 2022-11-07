import {
  Controller, Inject,
  Get,
  Query, Param,
  ParseIntPipe, DefaultValuePipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IArticleQueryService } from '@/domain/iservices';
import { SingleArticle, MultipleArticles } from '../dtos';

@ApiTags('Article')
@Controller()
export class ArticleQueryController {
  constructor(
    @Inject('ArticleQueryService') private articleQueryService: IArticleQueryService,
  ) {}

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
}
