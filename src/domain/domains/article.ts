import { User } from './user';
import { Comment } from './comment';

export class Article {
  id: any;

  title: string;

  slug: string;

  description: string;

  body: string;

  tags?: string[];

  createdAt: Date;

  updatedAt: Date;

  author?: User;

  favoritors?: User[];

  comments?: Comment[];

  constructor(articleValue: {
    id: any,
    slug?: string,
    title: string,
    description: string,
    body: string,
    createdAt: Date,
    updatedAt: Date,
    author?: User,
    favoritors?: User[],
    tags?: string[],
    comments?: Comment[],
  }) {
    this.id = articleValue.id;
    this.title = articleValue.title;
    this.slug = articleValue.slug ?? Article.createSlug(articleValue.title);
    this.description = articleValue.description;
    this.body = articleValue.body;
    this.createdAt = articleValue.createdAt;
    this.updatedAt = articleValue.updatedAt;
    this.author = articleValue.author;
    this.favoritors = articleValue.favoritors;
    this.tags = articleValue.tags;
    this.comments = articleValue.comments;
  }

  static createSlug(text: string): string {
    return text.split(' ').join('-');
  }
}