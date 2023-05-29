import React from "react";
import { FaGithub, FaGlobe, FaLinkedin, } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full mb-10 flex flex-col justify-center items-center  md:justify-between  md:flex-row">
        <img
          src="src/assets/STS-logo-1.png"
          alt="sumTheSize_logo"
          className="w-64 object-contain md:m-0"
        />
        <div className="sm-link__container w-[20rem] flex justify-center items-center selection:items-center">
          <p className="inline-block text-sm md:mr-1 ">par <strong>Greg Bluwell</strong></p>
          <div
            onClick={() =>
              window.open("https://gregbluwell.dev", "_blank")
            }
            className="sum_btn m-1 cursor-pointer"
          >
            <FaGlobe />
          </div>
          <div
            onClick={() =>
              window.open("https://github.com/GregBluwell", "_blank")
            }
            className="sum_btn m-1 cursor-pointer"
          >
            <FaGithub />
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/greg-fouetillou-a2047a266/", "_blank")
            }
            className="sum_btn m-1 cursor-pointer"
          >
            <FaLinkedin />
          </div>
        </div>
      </nav>

      <h1 className="head_text">
        <span className="md:text-6xl">Résumez vos Articles avec</span>{" "}
        <br className="max-md:hidden" />
        <span className="md:text-6xl orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifiez vous la lecture avec <strong>SumTheSize</strong>, un outil
        qui transforme les longs articles en résumés clairs et concis grâce à
        l'IA.
      </h2>
    </header>
  );
};

export default Hero;
