import InView from "../hooks/inView";
import { useRef } from "react";

function Footer() {
  const copyRightBlock = useRef(null);
  const isVisible = InView(copyRightBlock);
  return (
    <footer className="w-full h-fit mt-5">
      <div className="w-full flex flex-col px-6 lg:px-20">
        <div className="w-full flex justify-between py-10" ref={copyRightBlock}>
          <p className="text-white self-center font-semibold">
            © {new Date().getFullYear()}
          </p>
          <div className="z-20">
            <button
              className="flex items-center gap-4 group"
              onClick={() => {
                scrollTo({ top: 0 });
              }}
            >
              <div className="bg-green-400 md:p-3 rounded-full transition-transform group-hover:-translate-y-5">
                <svg
                  width="34"
                  height="34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-200 ease-in-out group-hover:animate-over-bounce-reverse"
                >
                  <g clipPath="url(#up-arrow_svg__a)">
                    <path
                      d="M17 24.071V9.93m0 0L9.929 17M17 9.929 24.071 17"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="pt-32 pb-20  max-[768px]:pb-5 max-[992px]:pt-24 max-[400px]:pt-10 group">
          <p
            className={
              isVisible
                ? "max-[768px]:text-center group-hover:text-green-400 text-slate-400 font-bold max-[400px]:text-4xl max-md:text-6xl max-[992px]:text-7xl text-8xl xl:text-9xl relative z-20 animate-pop"
                : "invisible"
            }
          >
            LET'S CONNECT
          </p>
        </div>

        <div
          className={
            isVisible
              ? "flex mt-10 mb-10 justify-between max-[768px]:flex-col max-[768px]:gap-5 animate-slide"
              : "invisible"
          }
        >
          <a
            href="mailto:sarthakmehta20100@gmail.com"
            className="max-[768px]:self-center text-white font-semibold rounded-md relative z-20 border border-green-300 py-3 px-5 transition-transform hover:text-green-400 hover:-translate-y-2 hover:translate-x-2 hover:shadow-md hover:shadow-green-300"
          >
            SAY HELLO !
          </a>

          <div className="flex gap-4 max-[768px]:pt-20 max-[400px]:flex-col max-[768px]:self-center">
            <p className="self-center text-white font-semibold max-[576px]:text-sm text-center">
              Designed & Built by Sarthak Mehta
            </p>
            <a href="/" className="z-20 w-fit self-center">
              <i className="text-xl text-white fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
