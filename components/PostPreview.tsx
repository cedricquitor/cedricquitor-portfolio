import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`blog/posts/${props.slug}`}>
        <h2 className="font-bold text-blue-900 hover:underline">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="text-slate-600">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
