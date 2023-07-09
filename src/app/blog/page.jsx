"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
function Blog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/contents",
    fetcher
  );
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // if (data) return <div>{JSON.stringify(data)}</div>;
  return (
    <div className="mt-12">
      {data?.data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className="hover:opacity-75 "
          key={item.id}>
          <div className="flex gap-[50px] items-center">
            <div className="mb-5">
              <Image
                src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                alt="website"
                width={300}
                height={250}
              />
            </div>
            <div>
              <h1 className="text-3xl opacity-80 font-bold mb-4">
                {item.title}
              </h1>
              <p className="opacity-80 text-[18px]">{item.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
