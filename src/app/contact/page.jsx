import { Button } from "@/Components";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="text-center mx-10 text-4xl font-semibold">
        Let's Keep in Touch
      </h1>
      <div className="flex gap-[100px] items-center mt-20 ">
        <div className="flex-1 relative w-[400px] h-[400px]">
          <Image src="/contact.png" fill={true} alt="contact" />
        </div>
        <form className="flex flex-1 flex-col gap-[20px]">
          <input type="text" placeholder="name" className="style_input " />
          <input type="text" placeholder="email" className="style_input " />
          <textarea
            className="style_input "
            placeholder="message"
            cols="30"
            rows="10"></textarea>
          <Button url="#" text="Send" color="bg-green-400" />
        </form>
      </div>
    </div>
  );
}
