import { gql } from 'apollo-server'

export default gql`
type Query {
  posts(search: String): PostsPayload
  post(id: ID!): Post
  comments: CommentsPayload
  comment(id: ID!): Comment
}

type PostsPayload {
  total: Int!
  items: [Post]
}

type CommentsPayload {
  total: Int!
  items: [Comment]
}

type Post {
  id: ID!
  title: String!
  body: String!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  postId: ID!
  message: String!
  timestamp: Int!
}
`
