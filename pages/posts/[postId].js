import { useRouter } from 'next/router';

const PostDetails = ({ post }) => {
  const { id, title, body } = post;

  const router = useRouter();

  const handleBack = () => {
    router.push('/posts');
  };

  return (
    <div className="card  w-3/5 mx-auto bg-primary text-primary-content">
      <div className="card-body">
        <h1>Post id: {id}</h1>
        <h2 className="card-title">Title: {title}</h2>
        <p>{body}</p>

        <div className="card-actions justify-center pb-4">
          <button onClick={handleBack} className="btn">
            Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts?.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
