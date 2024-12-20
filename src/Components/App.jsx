import React from "react";
const HomePage = React.lazy(() => import("../Pages/HomePage"));
const ComingSoonPage = React.lazy(() => import("../Pages/ComingSoonPage"));

import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/comingSoon" element={<ComingSoonPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
