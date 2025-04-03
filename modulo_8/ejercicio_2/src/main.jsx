import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Main() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Detect if the app is running as a PWA
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    setIsPWA(isStandalone);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        console.log("Service Worker registered");

        // Check if there's a waiting service worker (new version available)
        if (registration.waiting) {
          setUpdateAvailable(true);
        }

        // Listen for service worker updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          newWorker?.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
            }
          });
        });
      });

      // Ensure we reload only once per update
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          console.log("New version available. Please refresh.");
        }
      });
    }
  }, []);

  return (
    <StrictMode>
      {updateAvailable && isPWA && ( // Show update message only in installed PWA
        <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "blue", color: "white", textAlign: "center", padding: "10px" }}>
          A new version is available. <button onClick={() => window.location.reload()}>Update</button>
        </div>
      )}
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
