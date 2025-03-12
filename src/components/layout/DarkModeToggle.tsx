"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
      {resolvedTheme === "dark" ? (
        <Moon className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <Sun className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
      )}
    </Button>
  );
};
