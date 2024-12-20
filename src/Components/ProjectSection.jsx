import { useRef } from "react";
import PW1 from "../../public/assets/Projects/PW_1.webp";
import PW2 from "../../public/assets/Projects/PW_2.webp";
import PW3 from "../../public/assets/Projects/PW_3.webp";
import PW4 from "../../public/assets/Projects/PW_4.webp";
import InView from "../hooks/inView";

function ProjectSection() {
  const projectHeading = useRef(null);
  const isPHVisible = InView(projectHeading);
  const p1 = useRef(null);
  const isP1Visible = InView(p1);
  const p2 = useRef(null);
  const isP2Visible = InView(p2);
  const p3 = useRef(null);
  const isP3Visible = InView(p3);

  return (
    <div className="mt-24 w-full ">
      <div className="px-6 lg:px-20 pb-5" ref={projectHeading}>
        <p className=" text-white w-full text-lg font-semibold">
          PROJECTS & WORK
        </p>
      </div>
      <div
        className={`${
          isPHVisible
            ? "w-full flex mx-auto px-6 lg:px-20 pb-10 max-[768px]:flex-col animate-pop"
            : "invisible"
        }`}
        ref={p1}
      >
        <div className="z-20 hover:bg-slate-800/50 hover:rounded-md hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group">
          <a
            href="https://computergeeksintown.com/"
            className="flex max-[768px]:flex-col"
            target="_blank"
          >
            <div className="w-1/4 max-[768px]:w-full p-3">
              <img
                src={PW1}
                alt="ComputerGeeksInTown Website"
                loading="lazy"
                className="mx-auto w-full max-[768px]:w-64 max-[768px]:mx-0 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              ></img>
            </div>
            <div className="flex flex-col gap-5 w-3/4 max-[768px]:w-full max-[768px]:mt-2 p-3">
              <div className="flex w-full gap-3">
                <p className="text-white group-hover:text-green-400">
                  EyeMax Computer Geeks In Town
                </p>
                <i className="self-center text-white fa-solid fa-arrow-up-right-from-square transition-transform group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </div>
              <p className="text-slate-400 w-full text-sm">
                Developed a fully responsive and user-friendly website for the
                client using HTML, CSS, React, Bootstrap, and JavaScript,
                ensuring seamless performance across various devices and screen
                sizes. Integrated React lazy loading techniques to optimize page
                load times and improve overall website speed, enhancing the user
                experience. Implemented best practices for front-end
                development, ensuring the site is both visually appealing and
                highly functional
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    HTML/CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    BootStrap
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Rest API
                  </div>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/*LiveLink Unreal*/}
      <div
        className={`${
          isP1Visible
            ? "w-full flex mx-auto px-6 lg:px-20 pb-10 max-[768px]:flex-col animate-pop"
            : "invisible"
        }`}
        ref={p2}
      >
        <div className="z-20 hover:bg-slate-800/50 hover:rounded-md hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group">
          <a
            href="https://www.fab.com/listings/1eb467d0-7d77-4720-b485-896fd37834a9"
            className="flex max-[768px]:flex-col"
            target="_blank"
          >
            <div className="w-1/4 max-[768px]:w-full p-3">
              <img
                src={PW2}
                alt="LiveLink for Blender Unreal Engine Plugin"
                loading="lazy"
                className="mx-auto w-full max-[768px]:w-64 max-[768px]:mx-0 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              ></img>
            </div>
            <div className="flex flex-col gap-5 w-3/4 max-[768px]:w-full max-[768px]:mt-2 p-3">
              <div className="flex w-full gap-3">
                <p className="text-white group-hover:text-green-400">
                  Livelink for Blender
                </p>
                <i className="self-center text-white fa-solid fa-arrow-up-right-from-square transition-transform group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </div>
              <p className="text-slate-400 w-full text-sm">
                Contributed to the development of a marketplace-listed Live-Link
                plugin for seamless integration between Unreal Engine and
                Blender. Added new features to support multiple rigs and meshes,
                both individually and simultaneously. Additionally, developed
                the Blender add-on to transfer data to the Unreal Engine
                LiveLink counterpart.
              </p>
              <div className="flex w-full gap-3">
                <a
                  href="https://github.com/Viga-Entertainment-Technology/Unreal-LiveLink-for-Blender"
                  className="text-white hover:text-blue-500 peer text-sm"
                  target="_blank"
                >
                  Blender Extension
                </a>
                <i className="self-center text-white fa-solid fa-arrow-up-right-from-square transition-transform peer-hover:text-blue-500 peer-hover:translate-x-1 peer-hover:-translate-y-1"></i>
              </div>
              <div className="flex w-full gap-3">
                <p className="text-white text-sm">3.8</p>
                <i
                  className="fa-solid fa-star text-sm self-center"
                  style={{ color: "#FFD43B" }}
                ></i>
              </div>

              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    C++
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Unreal Engine
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    WebSockets
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Python
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Blender
                  </div>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/*Simon Game*/}
      <div
        className={`${
          isP2Visible
            ? "w-full flex mx-auto px-6 lg:px-20 pb-10 max-[768px]:flex-col animate-pop"
            : "invisible"
        }`}
        ref={p3}
      >
        <div className="z-20 hover:bg-slate-800/50 hover:rounded-md hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group">
          <a
            href="https://github.com/Mankumanki/Simon_Game"
            className="flex max-[768px]:flex-col"
            target="_blank"
          >
            <div className="w-1/4 max-[768px]:w-full p-3">
              <img
                src={PW3}
                alt="Simon Game"
                loading="lazy"
                className="mx-auto w-full max-[768px]:w-64 max-[768px]:mx-0 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              ></img>
            </div>
            <div className="flex flex-col gap-5 w-3/4 max-[768px]:w-full max-[768px]:mt-2 p-3">
              <div className="flex w-full gap-3">
                <p className="text-white group-hover:text-green-400">
                  Simon Game
                </p>
                <i className="self-center text-white fa-solid fa-arrow-up-right-from-square transition-transform group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </div>
              <p className="text-slate-400 w-full text-sm">
                A game where the player must follow a pattern of lights and
                sounds. The objective is to memorize the sequence in which the
                buttons light up and then click the buttons in the correct
                order.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    HTML/CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    BootStrap
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    JQuery
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Canvas
                  </div>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/*Login/SignUp*/}
      <div
        className={`${
          isP3Visible
            ? "w-full flex mx-auto px-6 lg:px-20 pb-10 max-[768px]:flex-col animate-pop"
            : "invisible"
        }`}
      >
        <div className="z-20 hover:bg-slate-800/50 hover:rounded-md hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group">
          <a
            href="https://github.com/Mankumanki/Login-Signup-Component"
            className="flex max-[768px]:flex-col"
            target="_blank"
          >
            <div className="w-1/4 max-[768px]:w-full p-3">
              <img
                src={PW4}
                alt="Login/Singup React component with backend"
                loading="lazy"
                className="mx-auto w-full max-[768px]:w-64 max-[768px]:mx-0 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              ></img>
            </div>
            <div className="flex flex-col gap-5 w-3/4 max-[768px]:w-full max-[768px]:mt-2 p-3">
              <div className="flex w-full gap-3">
                <p className="text-white group-hover:text-green-400">
                  Login / SignUp Component
                </p>
                <i className="self-center text-white fa-solid fa-arrow-up-right-from-square transition-transform group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </div>
              <p className="text-slate-400 w-full text-sm">
                A full-stack Login/Signup component with JWT-based
                authentication implemented using two different approaches:
                Storing the access token in session storage and the refresh
                token in an HTTPS-only cookie. Using React context to store the
                access token and an HTTPS-only cookie for the refresh token.
                Additionally, implemented persistent login, ensuring that the
                access token is refreshed on page reload based on the refresh
                token's validity.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    HTML/CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    TailWind CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Node.js
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    Express
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                    PostgreSQL
                  </div>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
