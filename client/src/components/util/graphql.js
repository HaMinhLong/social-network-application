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
