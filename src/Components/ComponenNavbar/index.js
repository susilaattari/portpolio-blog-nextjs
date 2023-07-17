"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import DarkMode from "../DarkMode";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const links = [
  {
    id: "1",
    title: "Home",
    url: "/",
  },
  {
    id: "2",
    title: "About",
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
    title: "Contact",
    url: "/contact",
  },
  {
    id: "6",
    title: "Dashboard",
    url: "/dashboard",
  },
];
function index() {
  const session = useSession()
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="flex justify-between items-center p-5 h-[70px]">
      <Link href="/">SILAdev</Link>
      <div className="flex gap-2 items-center">
        <DarkMode />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`mr-5 hover:text-emerald-400 ${
              pathname === link.url ? "text-emerald-400" : ""
            }`}>
            {link.title}
          </Link>
        ))}
       {session.status == "authenticated" && (
         <button
         className="p-1 bg-emerald-400 rounded"
         onClick={() => signOut()}>
         Keluar
       </button>
       )}
       {/* {pathname !== "/dashboard/login" && session.status == 'unauthenticated' && (
        <button
        className="p-1 bg-emerald-400 rounded">
        <Link href="/dashboard/login">Masuk</Link>
      </button>
       )}
       {pathname == "/dashboard/login" && session.status == 'unauthenticated' && (
        <button
        className="p-1 bg-emerald-400 rounded">
        <Link href="/dashboard/register">Daftar</Link>
      </button>
       )} */}
      </div>
    </div>
  );
}

export default index;
