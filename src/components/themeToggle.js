import React from "react";
// 
import Sun from "./Sun";
import Moon from "./Moon";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          className="ml-2 cursor-pointer flex items-center"
        >
          <Sun />
          <Moon />
        </div>
      )}
    </ThemeToggler>
  );
}
