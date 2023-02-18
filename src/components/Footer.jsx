import React from "react";
import logo from "../public/logo.png";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <img src={logo} alt="logo" width="50" height="50"></img>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://discord.gg/cXV9DjGSeF"
            className="text-6xl hover:text-blue-500 duration-300"
          >
            <FaDiscord />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
