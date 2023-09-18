import Image from "next/image";
import Link from "next/link";
import React from "react";

function PostCard({ post }: any) {
  const { post_id, heading, subHeading, textContent, bannerImage } = post;

  return (
    <Link href={`/${post_id}`} className="border-1 bg-red-200">
      <div
        className="container rounded-md bg-gray-100
        p-10 mb-10  object-contain relative space-y-2"
        key={post_id}
      >
        <div className="border border-red-200">
          <Image src={bannerImage} alt={heading} height={1000} width={500} />
        </div>
        <div className=" border-red-50 border-2 rounded p-2  ">
          <h1 className="text-xl font-bold">{heading}</h1>
          <h2 className="underline">Read more...</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
