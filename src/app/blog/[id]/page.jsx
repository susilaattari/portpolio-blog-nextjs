"use client";
import React, { useEffect, useRef } from "react";
import useSWR from "swr";
import Image from "next/image";
import { marked } from "marked";
import hljs from "highlight.js";

import "highlight.js/styles/atom-one-dark-reasonable.css";

function BlogPost({ params }) {
  const contentRef = useRef(null);

  useEffect(() => {
    hljs.highlightAll();
  });

  const { id } = params;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/contents/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const handleCopyHighlightedCode = () => {
    const highlightedCode = contentRef.current.querySelectorAll(
      ".hljs:not(.hljs .hljs)"
    );
    const codeText = Array.from(highlightedCode)
      .map((element) => element.textContent)
      .join("\n\n");

    navigator.clipboard.writeText(codeText).then(() => {
      alert("Highlighted code copied to clipboard!");
    });
  };

  return (
    <>
      <div className="mt-12">
        <div className="">
          <div className="mb-5">
            <Image
              src={data.data.img}
              alt="website"
              width={300}
              height={250}
            />
          </div>
          <div>{data.data.author}</div>
          <div>
            <h1 className="text-3xl opacity-80 font-bold mb-4">
              {data.data.title}
            </h1>
            <p className="opacity-80 text-[18px]">{data.desc}</p>
          </div>
          <div className="whitespace-pre-wrap relative">
            <div
              className="text-[18px]"
              dangerouslySetInnerHTML={{
                __html: marked(data.data.conten),
              }}
              ref={contentRef}
            ></div>
            <button className="absolute bg-black top-[80px] right-0"  onClick={handleCopyHighlightedCode}>
            Copy Code
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default BlogPost;
