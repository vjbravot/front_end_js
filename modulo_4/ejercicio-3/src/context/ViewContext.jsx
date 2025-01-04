import { createContext, useState } from "react";

const ViewContext = createContext();

function ViewProvider({ children }) {
  const [currentView, setCurrentView] = useState(["home"]);

    return (
      <ViewContext.Provider value={{ currentView, setCurrentView}}>
        {children}
      </ViewContext.Provider>
    );
  }
  export { ViewContext, ViewProvider };