import {
  Injectable, Inject,
} from '@nestjs/common';

import { ICommentQueryService } from '../iservices';
import { ICommentQueryRepository } from '../irepositories';

@Injectable()
export class CommentQueryService implements ICommentQueryService {
  constructor(
    @Inject('CommentQueryRepository') private commentQueryRepo: ICommentQueryRepository,
  ) {}
}