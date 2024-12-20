import React from "react";
import { userList } from "../../context/UserContext";

const Post = () => {
  const { posts } = userList();

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid", margin: "10px", padding: "10px" }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
