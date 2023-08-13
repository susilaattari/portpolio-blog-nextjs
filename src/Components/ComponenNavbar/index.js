"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import DarkMode from "../DarkMode";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ThemeContext } from "@/context/ThemaContext";
import Image from "next/image";
const links = [
  {
    id: "1",
    title: "Beranda",
    url: "/",
  },
  {
    id: "2",
    title: "Tentang",
    url: "/about",
  },
  {
    id: "3",
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: "4",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "5",
    title: "Kontak",
    url: "/contact",
  },
  {
    id: "6",
    title: "Dashboard",
    url: "/dashboard",
  },
];
function index() {
  const { state, dispatch } = useContext(ThemeContext);
  const session = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [navbarTransparent, setNavbarTransparent] = React.useState(true);

  // Fungsi untuk menangani perubahan posisi scroll
  const handleScroll = () => {
    // Tentukan nilai scroll threshold (misalnya 100px) untuk mengubah tampilan navbar
    const scrollThreshold = 250;
    if (window.scrollY > scrollThreshold) {
      setNavbarTransparent(false);
    } else {
      setNavbarTransparent(true);
    }
    // console.log(window.scrollY)
  };
  const theme = () => {
    return state.theme == "dark" ? "bg-slate-600" : "bg-white";
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);
  React.useEffect(() => {
    // Tambahkan event listener saat komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen akan di-unmount
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>

    <div
      className={`flex justify-between px-7 fixed w-screen z-10  items-center py-[10px] h-[70px] ${
        navbarTransparent ? "bg-transparent backdrop-blur-lg" : theme()
      }`}
      >
      <Link href="/">
        <Image src="/logo.png" width={150} height={50} alt="logo" />
      </Link>
      <div className="flex gap-1 items-center justify-center">
       
        <div className=" p-2 md:hidden justify-end right-0 absolute">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  />
              </svg>
            ) : (
              <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen
              ? `block mt-[527px] w-[340px] h-screen transition duration-300 ml-0 absolute px-[30px] left-0 bg-slate-800  rounded-md ${theme()}`
              : "hidden"
            } md:flex  md:space-x-0 md:mt-0 md:w-full md:h-auto md:relative md:p-4 md:bg-transparent transition  duration-300`}
            >
          {
            <div className="py-[20px] text-green-300 text-3xl font-bold mb-2 px-[50px] md:hidden">
              {" "}
              <Image src="/logo.png" width={150} height={50} alt="logo" />
            </div>
          }
          {links.map((link) => (
            <Link
            key={link.id}
            href={link.url}
            className={`mr-5 hover:text-emerald-400 md:p-[10px] lg:ml-3 ${
              pathname === link.url ? "text-emerald-400" : ""
            }`}
              >
              <li className="py-2 md:py-0 ">
                  {link.title}
              </li>
              </Link>
          ))}
          {session.status == "authenticated" && (
          <button
          className="p-1 bg-emerald-400 flex md:hidden rounded"
          onClick={signOut}
            >
            Keluar
          </button>
        )}
        {pathname !== "/dashboard/login" &&
          session.status == "unauthenticated" && (
            <button className="p-1 bg-emerald-400 rounded  flex md:hidden">
              <Link href="/dashboard/login">Masuk</Link>
            </button>
          )}
        {pathname == "/dashboard/login" &&
          session.status == "unauthenticated" && (
            <button className="p-1 bg-emerald-400 rounded  flex md:hidden">
              <Link href="/dashboard/register">Daftar</Link>
            </button>
          )}
        </ul>
       
      </div>
      <div className="md:flex gap-2">
      <DarkMode />
      {session.status == "authenticated" && (
          <button
          className="p-1 bg-emerald-400 md:flex hidden rounded"
          onClick={signOut}
            >
            Keluar
          </button>
        )}
        {pathname !== "/dashboard/login" &&
          session.status == "unauthenticated" && (
            <button className="p-1 bg-emerald-400 rounded  md:flex hidden">
              <Link href="/dashboard/login">Masuk</Link>
            </button>
          )}
        {pathname == "/dashboard/login" &&
          session.status == "unauthenticated" && (
            <button className="p-1 bg-emerald-400 rounded  md:flex hidden">
              <Link href="/dashboard/register">Daftar</Link>
            </button>
          )}
      </div>
    </div>
          </>
  );
}

export default index;
