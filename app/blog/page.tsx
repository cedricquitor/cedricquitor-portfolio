import Link from "next/link";
import { getPostMetadata } from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />);

  return <div className={postMetadata.length === 1 ? "grid grid-cols-1" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>{postPreviews}</div>;
};

export default BlogPage;
