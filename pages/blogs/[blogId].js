import { useRouter } from 'next/router';

const blogId = () => {
  const router = useRouter();
  const id = router.query.blogId;

  return (
    <div>
      <h1>This is a dynamic Blog Page: {id} </h1>
    </div>
  );
};

export default blogId;
