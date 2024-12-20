import React, { useEffect, useState } from "react";
import LoadingScreen from "../Components/LoadingScreen";
const MainSection = React.lazy(() => import("../Components/MainSection"));
import { VisibilityContextProvider } from "../hooks/visibleContext";

function HomePage() {
  return (
    <div className="relative min-h-fit w-full">
      <VisibilityContextProvider>
        <LoadingScreen />
        <MainSection />
      </VisibilityContextProvider>
    </div>
  );
}
export default HomePage;
