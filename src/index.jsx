import React from "react";
import reactDom from "react-dom/client";
import App from "./Components/App";

const domNode = document.getElementById("root");
const root = reactDom.createRoot(domNode);

root.render(<App />);
