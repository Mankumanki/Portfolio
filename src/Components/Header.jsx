import logo from "../../public/assets/logo_sarthak.png";

import { Link } from "react-router";
import { useState } from "react";

function Header() {
  const [gitState, setGitState] = useState(false);
  const [inState, setInState] = useState(false);
  const [mailState, setMailState] = useState(false);

  function changeFontStyle(e) {
    if (e.target.dataset.link == "github") {
      setGitState(true);
    } else if (e.target.dataset.link == "linkedIn") {
      setInState(true);
    } else {
      setMailState(true);
    }
  }

  function changeFontOnLeaveStyle(e) {
    if (e.target.dataset.link == "github") {
      setGitState(false);
    } else if (e.target.dataset.link == "linkedIn") {
      setInState(false);
    } else {
      setMailState(false);
    }
  }
  return (
    <header className="z-0">
      <div className="pt-2 px-10 pb-2 flex flex-row justify-between max-md:px-5">
        <div className="w-24 max-[576px]:w-16 z-20">
          <Link to="/">
            <img className="w-full" src={logo} alt="My logo" />
          </Link>
        </div>
        <div className="self-center flex flex-row gap-10 max-[576px]:gap-4 z-20">
          <a href="https://github.com/Mankumanki" target="_blank">
            <i
              className={
                gitState
                  ? "text-2xl fa-brands fa-github max-[576px]:text-lg fa-bounce"
                  : "text-2xl fa-brands fa-github max-[576px]:text-lg"
              }
              data-link="github"
              style={{ color: gitState ? "#6e5494" : "white" }}
              onMouseOverCapture={(e) => {
                changeFontStyle(e);
              }}
              onMouseOutCapture={(e) => {
                changeFontOnLeaveStyle(e);
              }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/smehta26/"
            data-link="linkedIn"
            target="_blank"
          >
            <i
              className={
                inState
                  ? "text-2xl fa-brands fa-linkedin-in max-[576px]:text-lg fa-bounce"
                  : "text-2xl fa-brands fa-linkedin-in max-[576px]:text-lg"
              }
              data-link="linkedIn"
              style={{ color: inState ? "#0077B5" : "white" }}
              onMouseOverCapture={(e) => {
                changeFontStyle(e);
              }}
              onMouseOutCapture={(e) => {
                changeFontOnLeaveStyle(e);
              }}
            ></i>
          </a>
          <a
            href="mailto:sarthakmehta20100@gmail.com"
            data-link="email"
            target="_blank"
          >
            <i
              className={
                mailState
                  ? "text-2xl fa-solid fa-envelope max-[576px]:text-lg fa-bounce"
                  : "text-2xl fa-solid fa-envelope max-[576px]:text-lg"
              }
              data-link="email"
              style={{ color: mailState ? "#90EE90" : "white" }}
              onMouseOverCapture={(e) => {
                changeFontStyle(e);
              }}
              onMouseOutCapture={(e) => {
                changeFontOnLeaveStyle(e);
              }}
            ></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
