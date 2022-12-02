import React from 'react';

const Post = ({ post }) => {
  const { title, body } = post;

  return (
    <div>
      <div className="card  bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title h-16">{title.slice(0, 30)}</h2>
          <p>{body.slice(0, 30)}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
