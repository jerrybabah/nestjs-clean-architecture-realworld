import { Module } from '@nestjs/common';

import * as controllers from '@/interface/controllers';
import {
  ArticleQueryService,
  CommentQueryService,
  UserQueryService,
} from '@/domain/services';
import {
  ArticleQueryRepository,
  CommentQueryRepository,
  UserQueryRepository,
} from '@/infra/repositories';

@Module({
  controllers: [
    ...Object.values(controllers),
  ],
  providers: [
    {
      provide: 'ArticleQueryService',
      useClass: ArticleQueryService,
    },
    {
      provide: 'CommentQueryService',
      useClass: CommentQueryService,
    },
    {
      provide: 'UserQueryService',
      useClass: UserQueryService,
    },
    {
      provide: 'ArticleQueryRepository',
      useClass: ArticleQueryRepository,
    },
    {
      provide: 'CommentQueryRepository',
      useClass: CommentQueryRepository,
    },
    {
      provide: 'UserQueryRepository',
      useClass: UserQueryRepository,
    },
  ],
})
export class AppModule {}
