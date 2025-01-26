import { useState, useEffect, useContext } from "react";
import AppRoutes from "./routes/AppRoutes"
import { useAuth } from "./context/AuthContext";
function App() {
  return (
      <AppRoutes />
  );
}

export default App;