const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    tags: [String]!
    comments: [Comment]!
    likes: [Like]!
    createdAt: String!
    selectedFile: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    username: String!
    fullName: String!
    token: String!
    createdAt: String!
    # selectedFile: String!
  }
  type Comment {
    id: ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type Like {
    id: ID!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    email: String!
    fullName: String!
    username: String!
    password: String!
    confirmPassword: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(
      title: String!
      content: String!
      tags: [String!]
      selectedFile: String!
    ): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
  }
`;
