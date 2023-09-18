import React from "react";
import PostCard from "./PostCard";

function BlogList({ posts }: any) {
  return (
    <main className="w-full md:w-1/2 items-center min-h-screen overflow-hidden mt-40">
      {posts.map((post: any) => (
        <PostCard post={post} key={post.post_id} />
      ))}
    </main>
  );
}

export default BlogList;
