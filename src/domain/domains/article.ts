import { User } from './user';

export class Article {
  private title: string;

  private slug: string;

  private description: string;

  private body: string;

  private tags?: string[];

  private createdAt?: Date;

  private updatedAt?: Date;

  private author?: User;

  private favoritors?: User[];

  constructor(articleValue: {
    slug?: string,
    title: string,
    description: string,
    body: string,
    createdAt?: Date,
    updatedAt?: Date,
    author?: User,
    favoritors?: User[],
    tags?: string[],
  }) {
    this.title = articleValue.title;
    this.slug = articleValue.slug ?? Article.getSlug(articleValue.title);
    this.description = articleValue.description;
    this.body = articleValue.body;
    this.createdAt = articleValue.createdAt;
    this.updatedAt = articleValue.updatedAt;
    this.author = articleValue.author;
    this.favoritors = articleValue.favoritors;
    this.tags = articleValue.tags;
  }

  private static getSlug(text: string): string {
    return text.split(' ').join('-');
  }

  private updateTitle(title: string) {
    this.title = title;
    this.slug = Article.getSlug(title);
  }

  isFavoritedByUser(user: User): boolean {
    if (this.favoritors === undefined) {
      throw new Error();
    }

    return this.favoritors.some((favoritor) => favoritor.isEqual(user));
  }

  getFavoritesCount(): number {
    if (this.favoritors === undefined) {
      throw new Error();
    }

    return this.favoritors.length;
  }
}