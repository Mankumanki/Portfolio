import { useEffect, useState } from "react";
import { useVisibleContext } from "../hooks/visibleContext";

function LoadingScreen() {
  const text = [
    "Bonjour",
    "Hola",
    "Salve",
    "こんにちわ",
    "Hallo",
    "Hej",
    "안녕하세요",
    "नमस्ते",
    "कस छा",
  ];
  const [idx, setIdx] = useState(0);
  const [greet, setGreet] = useState("Hello !");
  const visibleContext = useVisibleContext();

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx < text.length) {
        setGreet(text[idx]);
        setIdx((idx) => idx + 1);
      } else if (idx == text.length) {
        visibleContext.setVisibility(true);
      }
    }, 700 - idx * 50);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [greet]);

  return (
    <div
      className={`w-full h-screen bg-charcoal absolute z-40 transition-transform duration-1000 delay-500 ${
        idx == text.length ? "-translate-y-full" : ""
      }`}
    >
      <div className="w-full h-full flex flex-col justify-center">
        <p className="text-white text-6xl self-center max-[576px]:text-4xl max-[300px]:text-3xl flex gap-2 animate-show">
          <span className="text-2xl self-center max-[576px]:text-xl">
            &#9673;
          </span>
          {greet}
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
