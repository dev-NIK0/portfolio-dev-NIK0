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
    <div class="bg-indigo-500 sm:my-10 md:my-15 lg:my-20 sm:mx-auto md:mx-auto lg:mx-auto sm:w-120 md:w-200 lg:w-400 sm:h-150 lg:h-120 rounded-4xl lg:flex">
      <img
        class="sm:mx-40 md:mx-70 lg:mx-40 sm:my-10 lg:my-15 inline-block sm:w-40 md:w-70 lg:w-80 sm:h-40 md:h-70 lg:h-80 sm:top-7 md:top-13 lg:top-20 rounded-full"
        alt="img_nico"
        src={imgNico}
      />
      <div class="text-center sm:mx-auto md:mx-auto lg:mx-auto sm:my-auto md:my-auto lg:my-auto">
        <h1 class="sm:inline md:inline-block lg:inline-block sm:text-md md:text-xl lg:text-2xl italic">
          Hi !
          <PiHandWavingFill class="m-2 inline-block" />
          my name is Nico <br />I am Software Developer
        </h1>
        <div class="sm:grid md:flex lg:flex sm:grid-flow-col sm:grid-rows-2 sm:mx-45 sm:my-10">
          <IoLogoJavascript class="text-yellow-400 sm:w-10 sm:h-15 md:w-15 md:h-20 lg:w-20 lg:h-20 sm:mr-2 md:mr-5 lg:mr-5" />
          <FaReact class="text-cyan-400 sm:w-10 sm:h-15 md:w-15 md:h-20 lg:w-20 lg:h-20 sm:mr-2 md:mr-5 lg:mr-5"/>
          <FaNodeJs class="text-green-600 sm:w-10 sm:h-15 md:w-15 md:h-20 lg:w-20 lg:h-20 sm:mr-2 md:mr-5 lg:mr-5" />
          <SiMysql class="text-blue-600 sm:w-10 sm:h-15 md:w-15 md:h-20 lg:w-20 lg:h-20 sm:mr-2 md:mr-5 lg:mr-5" />
          <FaJava class="text-white sm:w-10 sm:h-15 md:w-15 md:h-20 lg:w-20 lg:h-20 sm:mr-2 md:mr-5 lg:mr-5" />
          <SiSpringboot class="text-green-500 sm:w-10 sm:h-15 md:w-15 md:h-20 lg:w-20 lg:h-20 sm:mr-2 md:mr-5 lg:mr-5" />
        </div>
      </div>
    </div>
  );
}

export default Header;
