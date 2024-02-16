import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-gray-800 flex justify-around items-center">
      <div className="text-white text-3xl p-2">Todo APP!</div>
      <div className="text-white text-3xl p-2">
        <a
          href="https://www.github.com/dhakerbh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Header;
