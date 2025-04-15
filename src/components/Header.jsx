import imgNico from "../assets/img_nico.jpeg";
import { PiHandWavingFill } from "react-icons/pi";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

function Header() {
  return (
    <div class="bg-indigo-500 my-20 mx-30 w-400 h-120 rounded-4xl flex">
      <img
        class="mx-40 my-10 inline-block w-100 h-100 top-20 rounded-full"
        alt="img_nico"
        src={imgNico}
      />
      <div class="my-50">
        <h1 class="mx-70 inline-block text-2xl italic">
          {" "}
          Hi !
          <PiHandWavingFill class="m-2 inline-block" />
          my name is Nico <br />I am Software Developer
        </h1>
        <div class="flex justify-around my-10">
          <IoLogoJavascript class="w-15 h-20 text-yellow-400" />
          <FaReact class="text-cyan-400 w-15 h-20"/>
          <FaNodeJs class="text-green-600 w-15 h-20" />
          <SiMysql class="text-blue-600 w-15 h-20" />
          <FaJava class="text-white w-15 h-20" />
          <SiSpringboot class="text-green-500 w-15 h-20" />
        </div>
      </div>
    </div>
  );
}

export default Header;
