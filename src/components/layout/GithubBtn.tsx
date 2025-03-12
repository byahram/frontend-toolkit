"use client";

import { ImGithub } from "react-icons/im";
import { Button } from "../ui/Button";

const GithubBtn = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/byahram/frontend-toolkit",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <ImGithub className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
    </Button>
  );
};

export default GithubBtn;
