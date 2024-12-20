import { createContext, useContext, useState } from "react";

const visibleContext = createContext(null);

function useVisibleContext() {
  return useContext(visibleContext);
}

function VisibilityContextProvider({ children }) {
  const [visible, setVisibility] = useState(false);

  return (
    <visibleContext.Provider value={{ visible, setVisibility }}>
      {children}
    </visibleContext.Provider>
  );
}

export { useVisibleContext, VisibilityContextProvider };
