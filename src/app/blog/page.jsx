"use client";
import { NotFound } from "@/Components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";


function Blog() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  console.log(fetcher)
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/contents",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // if (data) return <div>{JSON.stringify(data)}</div>;
  return (
    
    <div className="mb-96 p-[100px]">
 <div>
 {data.length !== 0 ? data?.data.map((item) => (
        <Link
          href={`/blog/${item.id}`}
          className="hover:opacity-75 "
          key={item.id}>
          <div className="flex gap-[50px] items-center border-b-2 hover:border-green-500 border-green-700 py-3">
            <div className="mb-5">
              <Image
                src={item.img}
                alt="website"
                width={300}
                height={250}
                className="rounded-md shadow-md"
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
      )):(<>
      <div className="">
        <NotFound/>
      </div>
      </>)}
 </div>
    </div>
  );
}

export default Blog;


