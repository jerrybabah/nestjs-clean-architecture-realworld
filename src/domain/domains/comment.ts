import { Article } from './article';
import { User } from './user';

export class Comment {
  id: any;

  body: string;

  createdAt: Date;

  updatedAt: Date;

  commenter?: User;

  article?: Article;

  constructor(commentValue: {
    id: any,
    body: string,
    createdAt: Date,
    updatedAt: Date,
    commenter?: User,
    article?: Article,
  }) {
    this.body = commentValue.body;
    this.createdAt = commentValue.createdAt;
    this.updatedAt = commentValue.updatedAt;
    this.commenter = commentValue.commenter;
    this.article = commentValue.article;
  }
}