import { config } from "@/utils/config";
import Link from "next/link";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import GithubBtn from "./GithubBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-auto mt-8 md:mt-12 mb-10">
      <Link href="/">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
          {config.blog.name}
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-1.5 md:gap-3">
        <DarkModeToggle />
        <GithubBtn />
      </div>
    </header>
  );
};

export default Header;
