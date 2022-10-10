import { Author } from './user.dto';

export class Article {
  slug!: string;

  title!: string;

  description!: string;

  body!: string;

  tagList!: string[];

  createdAt!: string;

  updatedAt!: string;

  favorited!: boolean;

  favoritesCount!: number;

  author!: Author;
}

export class SingleArticle {
  article!: Article;
}

export class MultipleArticles {
  articles!: Article[];

  articlesCount!: number;
}

export class ArticleCreation {
  article!: {
    title: string,
    description: string,
    body: string,
    tagList?: string[] | null,
  };
}

export class ArticleModification {
  article!: {
    title?: string | null,
    description?: string | null,
    body?: string | null,
  };
}
