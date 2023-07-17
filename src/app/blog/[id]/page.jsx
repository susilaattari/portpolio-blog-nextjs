'use client'
import React from "react";
import useSWR from "swr";
import Image from "next/image";
function BlogPost({ params }) {
  const {id}=params;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/contents/${id}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return(
    <>
     <div className="mt-12">
      {
          <div className="">
            <div className="mb-5">
              <Image
                src={data.data.img}
                alt="website"
                width={300}
                height={250}
              />
            </div>
            <div>
              <h1 className="text-3xl opacity-80 font-bold mb-4">
                {data.data.title}
              </h1>
              <p className="opacity-80 text-[18px]">{data.desc}</p>
            </div>
         <div className="w-100">
           <p>
              {data.data.conten}
            </p>
         </div>
          </div>
    }
    </div>
    </>
  )
}

export default BlogPost;
