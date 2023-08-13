"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Dahsboard() {
  const session = useSession();
  const route = useRouter();

  if (session.status === "Loading") {
    return <p>Loading ..... </p>;
  }
  if (session.status === "unauthenticated") {
    route?.push("/dashboard/login");
  }

  // console.log(session.data.user.name)
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({urlImg:"", content: "", desc: "" ,title:""});

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/cms',{
        author:session.data.user.name,
        urlImg:post.urlImg,
        title:post.title,
        content : post.content,
        desc:post.desc,
        
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // if (response.ok) {
      //   route.push("/blog");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

 if(session.status == "authenticated"){
  return (
    <>
      <div className="flex w-full bg-gray-500 rounded-md p-3 border-2">
        <h2 className="text-slate-350">CMS Blog</h2>
        <div className="w-[90%]  ">
          <form onSubmit={createPrompt} className="mt-10 w-full max-w-2xl p-3">
          
          <div className="mb-4">
              <label
                className="block text-sm font-medium leading-6"
              >
                Url Image
              </label>
              <div className="mt-2">
              <input
                value={post.urlImg}
                onChange={(e) => setPost({ ...post, urlImg: e.target.value })}
                type="text"
                placeholder="url Image"
                required
                className="block w-full h-[50px]  text-gray-900 px-2 font-bold rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
              </div>
            </div>
          <div className="mb-4">
              <label
                className="block text-sm font-medium leading-6"
              >
                Judul konten
              </label>
              <div className="mt-2">
              <input
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder=" Judul konten"
                required
                className="block w-full h-[50px]  text-gray-900 px-2 font-bold rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
              </div>
            </div>
          <div className="mb-4">
              <label
                className="block text-sm font-medium leading-6"
              >
                Deskripsi
              </label>
              <div className="mt-2">
              <input
                value={post.desc}
                onChange={(e) => setPost({ ...post, desc: e.target.value })}
                type="text"
                placeholder="Deskripsi"
                required
                className="block w-full h-[50px]  text-gray-900 px-2 font-bold rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6"
              >
                Tulis konten disini
              </label>
              <div className="mt-2">
                <textarea
                  value={post.content}
                  onChange={(e) => setPost({ ...post, content: e.target.value })}
                  placeholder="Write your post here"
                  required
                  className="block w-full h-[100px]  text-gray-900 px-2 font-bold rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div className="flex-end mx-3 mb-5 gap-4">
              <Link href="/dashboard" className="text-black text-sm">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              >
                {submitting ? `Creating...` : "Create"}
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
 }
}
