import React, { useContext } from "react";

import { useQuery } from "@apollo/client";

import { FETCH_POSTS_QUERY } from "../util/graphql";

import Post from "./Post/Post";

import { AuthContext } from "../context/auth";

const Posts = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <div className="posts-container">
      <div className="posts">
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          data.getPosts &&
          data.getPosts.map((post) => (
            <div key={post.id} style={{ marginBottom: 20 }}>
              <Post post={post} user={user} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
