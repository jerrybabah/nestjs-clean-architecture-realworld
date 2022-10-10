export class User {
  email!: string;

  token!: string;

  username!: string;

  bio!: string;

  image!: string | null;
}

export class Profile {
  username!: string;

  bio!: string;

  image!: string | null;

  following!: boolean;
}

// INFO: 현재는 Profile과 생긴 게 같지만 변경되는 방향이 다르기 때문에 분리
export class Author {
  username!: string;

  bio!: string;

  image!: string | null;

  following!: boolean;
}

export class SingleUser {
  user!: User;
}

export class SingleProfile {
  profile!: Profile;
}

export class UserModification {
  user!: {
    email?: string | null,
    username?: string | null,
    password?: string | null,
    image?: string | null,
    bio?: string | null,
  };
}

export class UserLogin {
  user!: {
    email: string,
    password: string,
  };
}

export class UserRegistration {
  user!: {
    username: string;
    email: string,
    password: string,
  };
}
