import { FC } from "react";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <li>
      <Link
        href={post.url}
        className="flex border-2 border-black w-[600px] p-2"
      >
        <div>
          <Image
            src={`/images/${post.thumbnail ? post.thumbnail : "owl.png"}`}
            alt={post.title}
            width={128}
            height={128}
          />
        </div>
        <div className="ml-2 flex flex-col gap-4">
          <h2>{post.title}</h2>
          <time dateTime={post.date}>
            {format(parseISO(post.date), "yyyy년 M월 d일")}
          </time>
          <div>{post.description}</div>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
