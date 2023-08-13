import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className=" py-8 md:w-[970px] m-auto">
        <div className="flex flex-col md:flex-row justify-between px-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Hubungi Kami</h3>
            <p>Email: info@contohcompany.com</p>
            <p>Telepon: (123) 456-7890</p>
            <p>Alamat: Jalan Inspirasi No. 456, Kota Kreatif</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Ikuti Kami</h3>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://www.facebook.com/contohcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src="/1.png"
                    width={15}
                    height={15}
                    className="opacity-60 cursor-pointer"
                    alt="facebook Akun"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com/contohcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/3.png"
                    width={15}
                    height={15}
                    className="opacity-60 cursor-pointer"
                    alt="Twitter Akun"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/contohcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src="/2.png"
                    width={15}
                    height={15}
                    className="opacity-60 cursor-pointer"
                    alt="instagram akun"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/contohcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <Image
                    src="/4.png"
                    width={15}
                    height={15}
                    className="opacity-60 cursor-pointer"
                    alt="Youtube Akun"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className= "border-t-2 border-white py-4 text-center md:w-[970px] m-auto">
        <p className="text-sm text-gray-500">
          Hak Cipta © 2023 Contoh Company. All rights reserved.
        </p>
      </div>
    </footer>

  );
}

export default Footer;
