"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql `
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
`;
