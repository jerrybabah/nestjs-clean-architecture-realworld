export class User {
  user!: {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string,
  };
}

export class UpdateUser {
  user!: {
    email: string,
    bio: string,
    image: string,
  };
}
