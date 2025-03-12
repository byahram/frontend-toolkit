import { config } from "@/utils/config";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-12 mb-10">
      <div className="flex items-center justify-center">
        <div className="text-md text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
