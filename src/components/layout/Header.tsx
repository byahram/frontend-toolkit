import { config } from "@/utils/config";
import Link from "next/link";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import GithubBtn from "./GithubBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-auto max-w-5xl mt-8 md:mt-16 mb-12">
      <Link href="/">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
          {config.blog.name}
        </h1>
      </Link>
      <div className="flex items-center justify-between gap-3">
        <DarkModeToggle />
        <GithubBtn />
      </div>
    </header>
  );
};

export default Header;
