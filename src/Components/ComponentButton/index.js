import Link from "next/link";
import React from "react";

function Button({ url, text, color }) {
  return (
    <Link href={url}>
      <button
        className={`px-[20px] py-[10px] cursor-pointer rounded border-none text-white ${color} `}>
        {text}
      </button>
    </Link>
  );
}

export default Button;
