import { useState } from "react";

function AnimatedBody() {
  const [pos, setPos] = useState({ xPos: 0, yPos: 0 });
  function createPointer(evt) {
    setPos({ xPos: evt.pageX, yPos: evt.pageY });
  }
  return (
    <div
      className="inset-0 absolute z-10"
      style={{
        background: `radial-gradient(600px at ${pos.xPos}px ${pos.yPos}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
      onMouseMoveCapture={(e) => {
        createPointer(e);
      }}
    ></div>
  );
}

export default AnimatedBody;
