import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      title
      content
      tags
      selectedFile
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      fullName
      username
      createdAt
      token
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation register(
    $email: String!
    $fullName: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        email: $email
        fullName: $fullName
        username: $username
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      fullName
      username
      createdAt
      token
    }
  }
`;

