"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

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
        <NavLink href="/login">login</NavLink>
        <NavLink href="/register">register</NavLink>
        <NavLink href="/stories">stories</NavLink>
        <NavLink href="/tutorials">tutorials</NavLink>
        <NavLink href="/about">about</NavLink>
      </nav>
    </header>
  );
};

export default Header;
