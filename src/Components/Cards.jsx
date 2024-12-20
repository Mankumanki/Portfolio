import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useViewport } from "react-viewport-hooks";
import aboutMeImg from "../../public/assets/AboutMeCard.webp";
import experience from "../../public/assets/experience.webm";
import projectImg from "../../public/assets/projects.webp";
import freelance from "../../public/assets/freelance.webm";
import "../../public/css/HomePage/card.css";

function Cards() {
  const [about, setAbout] = useState(true);
  const [exp, setExp] = useState(false);
  const [project, setProjects] = useState(false);
  const [FreeLance, setFreeLance] = useState(false);
  const [text, setText] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [idx, setIdx] = useState(0);
  const { vw } = useViewport();

  useEffect(() => {
    setIdx(0);
  }, [vw]);

  function moveNext() {
    if (vw <= 1200 && vw >= 992) {
      setIdx((idx) => (idx + 4 <= 4 ? idx + 1 : 0));
    } else if (vw < 992 && vw >= 600) {
      setIdx((idx) => (idx + 3 <= 4 ? idx + 1 : 0));
    } else if (vw < 600) {
      setIdx((idx) => (idx + 2 <= 4 ? idx + 1 : 0));
    }
  }

  return (
    <div
      className="w-full h-full bg-transparent"
      style={{ overflow: "hidden" }}
    >
      <div
        className="w-full relative"
        style={{
          height: "calc(100% - 8rem)",
        }}
      >
        <div
          className={
            vw <= 1200
              ? "w-12 h-12 flex justify-center z-30 absolute top-2/4 -translate-y-1.5 bg-opacity-40 bg-slate-400 p-3 rounded-full"
              : "hidden"
          }
          style={{ left: "calc(100% - 4rem)" }}
        >
          <a
            className="self-center"
            role="button"
            onClick={() => {
              moveNext();
            }}
          >
            <i className="my-auto text-center text-white text-2xl fa-solid fa-angle-right"></i>
          </a>
        </div>

        <div
          className={`h-full max-[1200px]:w-1.5xfull max-[992px]:w-2xfull max-[600px]:w-4xfull flex flex-row bg-transparent ${
            vw > 1200 ? "pl-10 pr-5" : ""
          }`}
        >
          <div
            className="w-full h-full relative z-20 max-[1200px]:px-2"
            style={{
              transition: "all 0.4s ease-in-out",
              transitionDelay: "0.1s",
              transform:
                vw <= 1200
                  ? `translate(${-idx * 100}%)`
                  : about
                  ? "scale(1)"
                  : "scale(0.9)",
            }}
          >
            <a href="#about-section" data-section="AboutMe">
              <img
                loading="lazy"
                className={`w-full h-full object-cover ${
                  vw > 992
                    ? ` hover:saturate-100 hover:brightness-75 ${
                        text ? "saturate-100 brightness-75" : "saturate-50"
                      }`
                    : ""
                }`}
                src={aboutMeImg}
                alt="Sarthak Mehta Photo"
              />
            </a>
            <div
              className={`w-2/3 absolute bottom-14 show-text-block ${
                about ? "" : "hide-text-block"
              }`}
              onMouseOverCapture={() => {
                setText(true);
              }}
              onMouseOutCapture={() => {
                setText(false);
              }}
              style={{
                left: "40px",
              }}
            >
              <p className="text-white text-base font-bold">ABOUT ME</p>
              <p className="text-white text-sm mt-1 font-semibold">
                Hi I am Sarthak Mehta........
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href="#about-section"
                  className="text-white text-xs font-semibold view-anchor"
                >
                  VIEW ABOUT ME
                </a>
                <i className="self-center text-white fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div
            className="w-full h-full relative z-20 max-[1200px]:px-2"
            style={{
              transition: "all 0.4s ease-in-out",
              transitionDelay: "0.1s",
              transform:
                vw <= 1200
                  ? `translate(${-idx * 100}%)`
                  : exp
                  ? "scale(1)"
                  : "scale(0.9)",
            }}
            onMouseOverCapture={() => {
              setAbout(false);
              setExp(true);
            }}
            onMouseOutCapture={() => {
              setExp(false);
              setAbout(true);
            }}
          >
            <a href="#experience-section" data-section="Experience">
              <video
                className={`w-full h-full object-cover ${
                  vw > 992
                    ? ` hover:saturate-100 hover:brightness-75 ${
                        text2 ? "saturate-100 brightness-75" : "saturate-50"
                      }`
                    : ""
                }`}
                loop
                autoPlay
                playsInline
                muted
              >
                <source src={experience}></source>
              </video>
            </a>
            <div
              className={`w-2/3 absolute bottom-14 show-text-block ${
                exp ? "" : "hide-text-block"
              }`}
              onMouseOverCapture={() => {
                setText2(true);
              }}
              onMouseOutCapture={() => {
                setText2(false);
              }}
              style={{
                left: "40px",
              }}
            >
              <p className="text-white text-base font-bold">EXPERIENCE</p>
              <p className="text-white text-sm mt-1 font-semibold">
                Want to know about my job journey?
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href="#experience-section"
                  className="text-white text-xs font-semibold view-anchor"
                >
                  VIEW EXPERIENCE
                </a>
                <i className="self-center text-white fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div
            className="w-full h-full relative z-20 max-[1200px]:px-2"
            style={{
              transition: "all 0.4s ease-in-out",
              transitionDelay: "0.1s",
              transform:
                vw <= 1200
                  ? `translate(${-idx * 100}%)`
                  : project
                  ? "scale(1)"
                  : "scale(0.9)",
            }}
            onMouseOverCapture={(e) => {
              setAbout(false);
              setProjects(true);
            }}
            onMouseOutCapture={(e) => {
              setAbout(true);
              setProjects(false);
            }}
          >
            <a href="#project-section" data-section="Projects">
              <img
                loading="lazy"
                className={`w-full h-full object-cover ${
                  vw > 992
                    ? ` hover:saturate-100 hover:brightness-75 ${
                        text3 ? "saturate-100 brightness-75" : "saturate-50"
                      }`
                    : ""
                }`}
                src={projectImg}
                alt="Projects Photo"
              />
            </a>
            <div
              className={`w-2/3 absolute bottom-14 show-text-block ${
                project ? "" : "hide-text-block"
              }`}
              onMouseOverCapture={() => {
                setText3(true);
              }}
              onMouseOutCapture={() => {
                setText3(false);
              }}
              style={{
                left: "40px",
              }}
            >
              <p className="text-white text-base font-bold">PROJECTS & WORK</p>
              <p className="text-white text-sm mt-1 font-semibold">
                List of projects I have made and worked on.....
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href="#project-section"
                  className="text-white text-xs font-semibold view-anchor"
                >
                  VIEW PROJECTS
                </a>
                <i className="self-center text-white fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div
            className="w-full h-full relative z-20 max-[1200px]:px-2"
            style={{
              transition: "all 0.4s ease-in-out",
              transitionDelay: "0.1s",
              transform:
                vw <= 1200
                  ? `translate(${-idx * 100}%)`
                  : FreeLance
                  ? "scale(1)"
                  : "scale(0.9)",
            }}
            onMouseOverCapture={(e) => {
              setAbout(false);
              setFreeLance(true);
            }}
            onMouseOutCapture={(e) => {
              setAbout(true);
              setFreeLance(false);
            }}
          >
            <Link to="/comingSoon" data-section="FreeLance">
              <video
                className={`w-full h-full object-cover ${
                  vw > 992
                    ? ` hover:saturate-100 hover:brightness-75 ${
                        text4 ? "saturate-100 brightness-75" : "saturate-50"
                      }`
                    : ""
                }`}
                loop
                autoPlay
                playsInline
                muted
              >
                <source src={freelance}></source>
              </video>
            </Link>
            <div
              className={`w-2/3 absolute bottom-14 show-text-block ${
                FreeLance ? "" : "hide-text-block"
              }`}
              onMouseOverCapture={() => {
                setText4(true);
              }}
              onMouseOutCapture={() => {
                setText4(false);
              }}
              style={{
                left: "40px",
              }}
            >
              <p className="text-white text-base font-bold">FREELANCING</p>
              <p className="text-white text-sm mt-1 font-semibold">
                My freelancing journey......
              </p>
              <div className="mt-5 flex gap-4">
                <Link
                  to="/comingSoon"
                  className="text-white text-xs font-semibold view-anchor"
                >
                  VIEW MY FREELANCE WORK
                </Link>
                <i className="self-center text-white fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-px h-20 bg-slate-600 ml-6 lg:ml-20 my-5 relative">
          <div className="w-px absolute bg-green-400 animate-fill"></div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
