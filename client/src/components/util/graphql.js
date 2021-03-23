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


export const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
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

export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $content: String!
    $tags: [String]!
    $selectedFile: String!
  ) {
    createPost(
      title: $title
      content: $content
      tags: $tags
      selectedFile: $selectedFile
    ) {
      id
      title
      content
      tags
      selectedFile
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;


export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

