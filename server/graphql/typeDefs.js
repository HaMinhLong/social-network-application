const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    tags: [String!]
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
  }
`;
