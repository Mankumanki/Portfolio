import InView from "../hooks/inView";
import { useRef, useState } from "react";

function AboutSection() {
  const aboutText = useRef(null);
  const skillText = useRef(null);
  const isIntersecting = InView(aboutText);
  const skillIntersect = InView(skillText);

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto px-6 lg:px-20">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Sarthak Mehta
          </h2>
          <p
            className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8"
            ref={aboutText}
          >
            Software Developer
          </p>
          <p
            className={`mt-8 text-pretty text-sm font-medium text-slate-400 sm:text-base ${
              isIntersecting ? "animate-show" : "invisible"
            }`}
          >
            A highly motivated and adaptable Full Stack Web Developer and
            Software Developer with a strong foundation in both front-end and
            back-end development. Proficient in HTML, CSS, JavaScript, React,
            and Node.js, with experience in building responsive, dynamic web
            applications. Skilled in using databases like PostgreSQL and
            Firebase and familiar with version control tools such as Git.
            Additionally, well-versed in programming languages like C++ &
            JavaScript, with a keen interest in software development principles
            and practices. Eager to contribute to team projects, continuously
            learn new technologies, and develop efficient, scalable software
            solutions.
          </p>
        </div>
        <div className="mx-auto mt-10 lg:mx-0 lg:max-w-none">
          <p
            className=" text-pretty text-lg font-medium text-gray-300 sm:text-xl/8 mb-4"
            ref={skillText}
          >
            Skills :
          </p>
          <div
            className={`grid grid-cols-2 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10 max-[400px]:grid-cols-1 ${
              skillIntersect ? "animate-slide" : "invisible"
            } `}
          >
            <a>
              Full Stack{" "}
              <i
                className="ml-2 fa-solid fa-code fa-fade"
                style={{ color: " #ff0000" }}
              ></i>
            </a>
            <a>C++</a>
            <a>
              JS{" "}
              <i
                className="ml-2 fa-brands fa-js"
                style={{ color: "#FFD43B" }}
              ></i>
            </a>
            <a>
              React
              <i
                className=" ml-2 fa-brands fa-react fa-spin"
                style={{ color: "#74C0FC" }}
              ></i>
            </a>
            <a>
              Express
              <i className="ml-2 fab fa-node" style={{ color: "#63E6BE" }}></i>
            </a>
            <a>
              TailWind CSS
              <img
                className="ml-2 w-5 inline"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Tailwind CSS logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
