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

  author!: {
    username: string,
    bio: string,
    image: string,
    following: boolean,
  };
}

export class SingleArticle {
  article!: Article;
}

export class MultipleArticles {
  articles!: Article[];

  articlesCount!: number;
}

export class CreateArticle {
  article!: {
    title: string,
    description: string,
    body: string,
    tagList?: string[] | null,
  };
}

export class UpdateArticle {
  article!: {
    title?: string | null,
    description?: string | null,
    body?: string | null,
  };
}
