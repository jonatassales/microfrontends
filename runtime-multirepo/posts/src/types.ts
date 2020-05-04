export type PostsPayload = {
  total: number;
  items: Post[];
}

export type CommentsPayload = {
  total: number;
  items: Comment[];
}

export type Post = {
  id: string;
  title: string;
  body: string;
  comments: Comment[];
}

export type Comment = {
  id: string;
  message: string;
  timestamp: number;
}