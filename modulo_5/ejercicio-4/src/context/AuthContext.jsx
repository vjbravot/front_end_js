import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const users = [
    { username: "user", password: "password", role: "user" },
    { username: "admin", password: "password", role: "admin" },
  ];

  const generateToken = (payload) => {
    // Simulate a token by encoding the payload as a JSON string (not secure, but works for simulation)
    return btoa(JSON.stringify(payload));
  };

  const decodeToken = (token) => {
    try {
      return jwtDecode(token); // Decode the base64 token
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    const initializeAuth = () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        const decoded = decodeToken(storedToken);

        if (decoded) {
          setUser({ username: decoded.username, role: decoded.role });
        } else {
          localStorage.removeItem("token");
        }
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (username, password) => {
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      const token = generateToken({
        username: matchedUser.username,
        role: matchedUser.role,
      });

      localStorage.setItem("token", token);
      setUser({ username: matchedUser.username, role: matchedUser.role });
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <p>Loading...</p>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);