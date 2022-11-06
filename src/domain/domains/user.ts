export class User {
  private email: string;

  private username: string;

  private bio: string | null;

  private image: string | null;

  private followers?: User[];

  constructor(userValue: {
    email: string,
    username: string,
    bio?: string | null,
    image?: string | null,
    followers?: User[],
  }) {
    this.email = userValue.email;
    this.username = userValue.username;
    this.bio = userValue.bio ?? null;
    this.image = userValue.image ?? null;
    this.followers = userValue.followers;
  }
}