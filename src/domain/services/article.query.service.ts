import {
  Injectable, Inject,
} from '@nestjs/common';

import { IArticleQueryService } from '../iservices';
import { IArticleQueryRepository } from '../irepositories';

@Injectable()
export class ArticleQueryService implements IArticleQueryService {
  constructor(
    @Inject('ArticleQueryRepository') private articleQueryRepo: IArticleQueryRepository,
  ) {}
}