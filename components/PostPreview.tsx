import Image from "next/image";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      
      <Link href={`/posts/${props.slug}`}>
        <Image src={props.image} width="200" height={200} alt={props.title} />
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
        
         <p className="text-sm text-slate-400">{props.date}</p>
      </Link>
    

    </div>
  );
};

export default PostPreview;