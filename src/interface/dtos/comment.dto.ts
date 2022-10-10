import { Author } from './user.dto';

export class Comment {
  id!: number;
  
  createdAt!: string;
  
  updatedAt!: string;
  
  body!: string;
  
  author!: Author;
}

export class SingleComment {
  comment!: Comment;
}

export class MultipleComments {
  comments!: Comment[];
}

export class CommentCreation {
  comment!: {
    body: string,
  };
}