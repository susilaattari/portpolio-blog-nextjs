import { Button } from "@/Components";
import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cut) => {
  const data = items[cut];
  if (data) {
    return data;
  }
  return notFound();
};

function Category({ params }) {
  const data = getData(params.category);
  return (
    <div>
      <h3 className="text-lg font-bold text-green-400">{params.category}</h3>
      {data.map((item) => (
        <div className="flex items-center gap-5 my-7">
          <div>
            <h3 className="text-3xl py-3 font-bold opacity-80">{item.title}</h3>
            <p className="pb-3">{item.desc}</p>
            <Button url="#" text="See More" color="bg-green-400" />
          </div>
          <Image src={item.image} width={250} height={250} />
        </div>
      ))}
    </div>
  );
}

export default Category;
