import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="h-7 flex items-center justify-between py-7">
        <p>© 2023 Susila. All rights reserved.</p>
        <div className="flex p-1 gap-4 ">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className="opacity-60 cursor-pointer"
            alt="facebook Akun"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className="opacity-60 cursor-pointer"
            alt="instagram akun"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className="opacity-60 cursor-pointer"
            alt="Twitter Akun"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className="opacity-60 cursor-pointer"
            alt="Youtube Akun"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
