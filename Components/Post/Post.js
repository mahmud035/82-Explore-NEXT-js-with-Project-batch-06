import Link from 'next/link';
import React from 'react';

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div>
      <div className="card  bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title.slice(0, 30)}</h2>
          <p>{body.slice(0, 30)}</p>
        </div>
        <div className="card-actions justify-center pb-4">
          <Link href={`/posts/${id}`}>
            <button className="btn">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
