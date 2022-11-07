import {
  Injectable, Inject,
} from '@nestjs/common';

import { IUserQueryService } from '../iservices';
import { IUserQueryRepository } from '../irepositories';

@Injectable()
export class UserQueryService implements IUserQueryService {
  constructor(
    @Inject('UserQueryRepository') private userQueryRepo: IUserQueryRepository,
  ) {}
}