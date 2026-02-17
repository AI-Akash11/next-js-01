"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname)
  if(pathname.startsWith("/dashboard")) return <></>
  return (
    <header className="flex text-center font-semibold text-2xl py-4 px-8 bg-green-600 justify-between items-center flex-wrap">
      <Link href="/">
        ☯️ Dev-story
      </Link>

      <nav className="flex justify-center items-center space-x-5">
        <Link href="/login">login</Link>
        <Link href="/register">register</Link>
        <Link href="/stories">stories</Link>
        <Link href="/tutorials">tutorials</Link>
        <Link href="/about">about</Link>
      </nav>
    </header>
  );
};

export default Header;
