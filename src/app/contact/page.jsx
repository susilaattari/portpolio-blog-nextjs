"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from 'react-toastify';
export default function Contact() {
  const route = useRouter()
  async function hendleMessage(e){
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value

    try {
      const response = await axios.post('/api/messages',{
        name : name,
        email:email,
        message:message
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(response.data.code == 200){
        toast.success(response.data.data);
        route.push('/contact')
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
      }else{
        toast.warn(response.data.data);
      }
    } catch (error) {
      setErr(true)
      throw new Error();
    }
  }
  return (
    <div>
      <h1 className="text-center mx-10 text-4xl font-semibold">
        Let's Keep in Touch
      </h1>
      <div className="flex gap-[100px] items-center mt-20 ">
        <div className="flex-1 relative w-[400px] h-[400px]">
          <Image src="/contact.png" fill={true} alt="contact" />
        </div>
        <form className="flex flex-1 flex-col gap-[20px]" onSubmit={hendleMessage}>
          <input type="text" placeholder="name" className="style_input " />
          <input type="text" placeholder="email" className="style_input " />
          <textarea
            className="style_input "
            placeholder="message"
            cols="30"
            type="text"
            rows="10"></textarea>
           <button
                type="submit"
                className="flex w-full h-[40px] justify-center rounded-md bg-green-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 p-2"
              >
                Pesan
              </button>
        </form>
      </div>
    </div>
  );
}
