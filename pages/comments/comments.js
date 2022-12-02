const Comments = (props) => {
  const { comments } = props;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto p-6">
        {comments.map((comment, index) => (
          <h1 key={index}>{comment.body}</h1>
        ))}
      </div>
    </div>
  );
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=40'
  );
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};
