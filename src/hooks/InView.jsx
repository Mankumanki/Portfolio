import { useEffect, useState } from "react";

function InView(target) {
  const options = { rootMargin: "0px", threshold: 0.7 };
  const [intersect, setIntersect] = useState(false);
  const observer = new IntersectionObserver(callBack, options);

  function callBack(entries) {
    entries.forEach((val) => {
      if (val.isIntersecting) {
        setIntersect(true);
        observer.unobserve(target.current);
      }
    });
  }

  useEffect(() => {
    if (target && observer) {
      observer.observe(target.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return intersect;
}

export default InView;
