import InView from "../hooks/inView";
import { useRef } from "react";

function ExperienceSection() {
  const experienceBlock = useRef(null);
  const firstJobBlock = useRef(null);
  const isVisible = InView(experienceBlock);
  const isJobVisible = InView(firstJobBlock);

  return (
    <div className="mt-24 w-full ">
      <div className="px-6 lg:px-20 pb-5" ref={experienceBlock}>
        <p className=" text-white w-full text-lg font-semibold">EXPERIENCE</p>
      </div>
      <div className="w-full flex mx-auto px-6 lg:px-20 pb-5 max-[768px]:flex-col">
        <div
          className={`flex max-[768px]:flex-col z-20 hover:bg-slate-800/50 hover:rounded-md hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group ${
            isVisible ? "animate-slide" : ""
          }`}
          ref={firstJobBlock}
        >
          <div className="w-1/4 max-[768px]:w-full p-3">
            <p className="w-full font-semibold text-xs text-slate-500">
              OCT 2023 - PRESENT
            </p>
          </div>
          <div className="flex flex-col gap-5 w-3/4 max-[768px]:w-full max-[768px]:mt-2 p-3">
            <p className="text-white w-full group-hover:text-green-400">
              Analyst . Deloitte
            </p>
            <p className="text-slate-400 w-full text-sm">
              Worked on ServiceNow modules like HR Service Delivery (HRSD) and
              Workspace Service Delivery (WSD), designing and managing
              workflows, including a complete offboarding process with three
              workflows. Developed a mobile app for WSD using ServiceNow's
              mobile development tool. Contributed to module development with
              JavaScript and REST API integration.
            </p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  JavaScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  ServiceNow
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  ServiceNow - HRSD
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  ServiceNow - WSD
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  ServiceNow - Platform
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*Internship*/}
      <div className="w-full flex mx-auto px-6 lg:px-20 pb-5 max-[768px]:flex-col ">
        <div
          className={`flex max-[768px]:flex-col z-20 hover:bg-slate-800/50 hover:rounded-md hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg group ${
            isJobVisible ? "animate-slide" : "invisible"
          }`}
        >
          <div className="w-1/4 max-[768px]:w-full p-3">
            <p className="w-full font-semibold text-xs text-slate-500">
              FEB - SEPT 2022
            </p>
          </div>
          <div className="flex flex-col gap-5 w-3/4 max-[768px]:w-full max-[768px]:mt-2 p-3">
            <p className="text-white w-full group-hover:text-green-400">
              SDE . Viga Entertainment Tech.
            </p>
            <p className="text-slate-400 w-full text-sm">
              Created a marketplace-listed Live-Link plugin for Unreal and
              Blender integration, available as 'Livelink for Blender.'
              Developed a face motion capture plugin for Unreal Engine. Created
              plugins to connect Adobe products (Photoshop, Illustrator) and
              Blender/Maya with the 'MovieColab' website for real-time project
              collaboration.
            </p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  JavaScript
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
                  Bootstrap
                </div>
              </li>
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
                  Python
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400 ">
                  HTML/CSS
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
