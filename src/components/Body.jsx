import React from "react";
import Img1 from "../public/img1.png";

import step1 from "../instructions/step1.png";
import step2 from "../instructions/step2.png";
import step3 from "../instructions/step3.png";
import step4 from "../instructions/step4.png";

function Body() {
  return (
    <div className="bg-black/80 h-[500vh]">
      <div className="text-center">
        <h1 className="text-white text-5xl py-10 font-extrabold text-center">
          Simplistic Servers
        </h1>
        <p className="text-white text-xl font-bold text-center mx-5 font-mono">
          Premium and lag-free servers ready for you to join. Click{" "}
          <span className="text-blue-500 underline underline-offset-2">
            Join Now
          </span>{" "}
          to start playing your favorite mods!
        </p>
        <a href="https://discord.gg/cXV9DjGSeF">
          <button className="bg-blue-600 text-white text-2xl py-4 px-[100px] rounded-box mt-10 hover:bg-blue-500 duration-300">
            Join Now
          </button>
        </a>
      </div>
      <div className="relative top-11">
        <h1 className="text-white text-3xl pt-10 pb-3 font-bold text-center">
          Installation
        </h1>
        <div className="bg-gray-700 mx-10 rounded-box">
          <h1 className="text-xl text-center text-white font-extrabold">
            1. Install the Curseforge Desktop App.
          </h1>
          <p className="text-lg text-white p-2 font-semibold">
            1. Go to{" "}
            <a
              href="https://www.curseforge.com/"
              className="text-cyan-500 underline underline-offset-2"
            >
              Curseforge
            </a>{" "}
            and look for the CurseForge App at the top. <br /> 2. Click on
            Desktop App and start the download. If you're not running Windows
            then click{" "}
            <span className="text-blue-500">More download options</span> under
            the download button. <br /> 3. Wait for CurseForge to complete the
            installation.
          </p>
          <img
            src={step1}
            alt="step1"
            className="p-3 rounded-box mx-auto"
          ></img>
          <div className="text-center p-3">
            <ul className="steps">
              <li className="step step-primary">CurseForge</li>
              <li className="step">Download Modpack</li>
              <li className="step">Memory</li>
              <li className="step">Play</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-700 mx-10 mt-10 rounded-box">
          <h1 className="text-xl text-center text-white font-extrabold">
            2. Download the modpack.
          </h1>
          <p className="text-lg text-white p-2 font-semibold">
            1. Once installed, navigate to{" "}
            <span className="text-blue-500">Browse Modpacks</span> and type the
            modpack you want to download in the searchbar.
            <br /> 2. Modpacks are usually sorted by popularity/downloads so if
            you don't see your modpack just scroll down until you you find it.{" "}
            <br /> 3. Once you found your modpack click the{" "}
            <span className="text-blue-500">Install</span> button on the right
            side. The Modpack will begin installing.
          </p>
          <img
            src={step2}
            alt="step2"
            className="p-3 rounded-box mx-auto"
          ></img>
          <div className="text-center p-3">
            <ul className="steps">
              <li className="step step-primary">CurseForge</li>
              <li className="step step-primary">Download Modpack</li>
              <li className="step">Memory</li>
              <li className="step">Play</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-700 mx-10 mt-10 rounded-box">
          <h1 className="text-xl text-center text-white font-extrabold">
            3. Allocate Enough Memory.
          </h1>
          <p className="text-lg text-white p-2 font-semibold">
            1. While the modpack is installing its important to allocate enough
            memory.
            <br /> 2. Go to the bottom left section of the screen and click on
            the cogwheel icon to open the settings. <br /> 3. Click on Minecraft
            and scroll down until you see{" "}
            <span className="text-blue-500">Allocate Memory</span> under{" "}
            <span className="text-blue-500">Java Settings</span>.<br /> 4.
            Allocate enough memory for the modpack.
            <br /> <br />
            If you are unsure on how much memory you should allocate, then look
            at the description of a modpack. If you are still unsure, allocate
            half of your total RAM.
          </p>
          <img
            src={step3}
            alt="step3"
            className="p-3 rounded-box mx-auto"
          ></img>
          <div className="text-center p-3">
            <ul className="steps">
              <li className="step step-primary">CurseForge</li>
              <li className="step step-primary">Download Modpack</li>
              <li className="step step-primary">Memory</li>
              <li className="step">Play</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-700 mx-10 mt-10 rounded-box">
          <h1 className="text-xl text-center text-white font-extrabold">
            4. Start Playing!
          </h1>
          <p className="text-lg text-white p-2 font-semibold">
            1. Once your modpack is done downloading, click play. The default
            Minecraft Launcher will pop up.
            <br />
            2. If this is the first time launching a modpack, you might have to
            sign into your Minecraft Account.
            <br />
            3. If you did everything correctly, then you can click play and
            launch the modpack. Remember, modpacks take longer to load than
            vanilla.
            <br />
            <br />
            If you are still having problems you can try 1 more thing.
            <br />
            1. Install{" "}
            <a
              href="https://www.java.com/en/"
              className="text-cyan-500 underline underline-offset-2"
            >
              Java
            </a>
            .<br />
            2. Still having problems? Search for a solution online or join my{" "}
            <a
              href="https://discord.gg/cXV9DjGSeF"
              className="text-cyan-500 underline underline-offset-2"
            >
              Discord
            </a>
            .
          </p>
          <img
            src={step2}
            alt="step2"
            className="p-3 rounded-box mx-auto"
          ></img>
          <div className="text-center p-3">
            <ul className="steps">
              <li className="step step-primary">CurseForge</li>
              <li className="step step-primary">Download Modpack</li>
              <li className="step step-primary">Memory</li>
              <li className="step step-primary">Play</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative top-[100px] text-white text-2xl text-center">
        Website Still In Dev
      </div>
    </div>
  );
}

export default Body;
