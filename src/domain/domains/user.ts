import { Article } from './article';
import { Comment } from './comment';

export class User {
  id: any;

  email: string;

  username: string;

  bio: string | null;

  image: string | null;

  followers?: User[];

  followings?: User[];

  myArticles?: Article[];

  favoriteArticles?: Article[];

  comments?: Comment[];

  constructor(userValue: {
    id: any,
    email: string,
    username: string,
    bio?: string | null,
    image?: string | null,
    followers?: User[],
    followings?: User[],
    myArticles?: Article[],
    favoriteArticles?: Article[],
    comments?: Comment[],
  }) {
    this.id = userValue.id;
    this.email = userValue.email;
    this.username = userValue.username;
    this.bio = userValue.bio ?? null;
    this.image = userValue.image ?? null;
    this.followers = userValue.followers;
    this.followings = userValue.followings;
    this.myArticles = userValue.myArticles;
    this.favoriteArticles = userValue.favoriteArticles;
    this.comments = userValue.comments;
  }
}