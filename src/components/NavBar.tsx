import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>FinFlow</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;