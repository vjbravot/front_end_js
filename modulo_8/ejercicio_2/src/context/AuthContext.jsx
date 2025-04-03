import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPWA, setIsPWA] = useState(null); 

  useEffect(() => {
    const checkIfPWA = () => {
      return (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone ||
        document.referrer.startsWith("android-app://")
      );
    };

    const pwaStatus = checkIfPWA();
    setIsPWA(pwaStatus); 
  }, []);


  useEffect(() => {
    if (isPWA === null) return;

    console.log("PWA Mode:", isPWA);
    const storage = isPWA ? localStorage : sessionStorage;
    console.log("Storage Method:", storage);

    const storedToken = storage.getItem("token");
    if (storedToken) {
      try {
        console.log("Stored Token:", storedToken);
        const decoded = jwtDecode(storedToken, {header: true});
        setUser({ username: decoded.username, role: decoded.role });
      } catch (error) {
        console.error("Invalid token:", error);
        storage.removeItem("token");
      }
    }

    setLoading(false);
  }, [isPWA]); 

  const login = (username, password) => {
    if (isPWA === null) {
      console.error("PWA mode not detected yet. Try again.");
      return;
    }

    const token = btoa(JSON.stringify({ username, role: "user" }));
    const storage = isPWA ? localStorage : sessionStorage;
    storage.setItem("token", token);
    setUser({ username, role: "user" });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isPWA }}>
      {!loading ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);