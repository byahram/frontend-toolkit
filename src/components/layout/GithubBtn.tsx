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
      <ImGithub size={24} className="cursor-pointer" />
    </Button>
  );
};

export default GithubBtn;
