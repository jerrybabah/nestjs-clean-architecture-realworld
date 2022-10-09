export class Comment {
  id!: number;
  
  createdAt!: string;
  
  updatedAt!: string;
  
  body!: string;
  
  author!: {
    username: string,
    bio: string,
    image: string,
    following: boolean,
  };
}

export class SingleComment {
  comment!: Comment;
}

export class MultipleComments {
  comments!: Comment[];
}

export class AddComment {
  comment!: {
    body: string,
  };
}