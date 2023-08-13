import { Button } from "@/Components";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className=" object-cover grayscale"
        />
        <div className="absolute bottom-[20px] left-[20px] bg-emerald-500 px-8">
          <h1 className="text-lg text-orange-700 font-bold">
            Digital Storytellers
          </h1>
          <h2> Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="md:flex md:gap-[100px]">
        <div className="flex-1 flex flex-col gap-[30px] mt-[50px]">
          <h1 className="text-3x1 font-bold">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-[30px] mt-[50px]">
          <h1 className="text-3x1 font-bold">What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="contact" text="Contact" color="bg-emerald-600" />
        </div>
      </div>
    </div>
  );
}
