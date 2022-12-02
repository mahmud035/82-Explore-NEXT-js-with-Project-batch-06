import React from 'react';
import Post from '../../Components/Post/Post';

const Posts = (props) => {
  const { posts } = props;
  console.log(posts);

  return (
    <div>
      <h1 className="text-3xl text-center py-6">
        Number of posts: {posts.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto p-6">
        {posts.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
