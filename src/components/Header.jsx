import React from "react";
import logo from "../public/logo.png";

function Header() {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content justify-between">
        <a className="btn btn-ghost normal-case text-2xl text-white rounded-sm">
          <img
            src={logo}
            width="50"
            height="50"
            className="mr-5 relative bottom-[2px]"
          />
          <span className="relative bottom-[2px]">Simplistic Servers</span>
        </a>
        <ul className="text-white text-lg font-bold cursor-pointer gap-5 mr-2">
          <li className="hover:text-blue-500 duration-300 hover:bg-none">
            <a>Servers</a>
          </li>
          <li className="hover:text-purple-500 duration-300">
            <a>Installation Guide</a>
          </li>
          <li className="hover:text-cyan-500 duration-300">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
