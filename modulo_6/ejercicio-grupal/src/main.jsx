import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered");

      // Check if there's an already installed SW waiting to activate
      if (registration.waiting) {
        notifyUser(registration);
      }

      // Detect new service worker installation
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        newWorker?.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            notifyUser(registration);
          }
        });
      });
    })
    .catch((error) => console.error("Service Worker registration failed:", error));

  // Prevent infinite reload loop
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshing) {
      refreshing = true;
      console.log("New service worker activated. Reloading...");
      window.location.reload();
    }
  });
}

// Show update banner when a new version is available
function notifyUser(registration) {
  console.log("New version available. Showing update button...");

  if (document.getElementById("update-banner")) return; // Avoid duplicates

  const updateBanner = document.createElement("div");
  updateBanner.id = "update-banner";
  updateBanner.innerHTML = `
    <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #007bff; color: white; text-align: center; padding: 10px;">
      A new version is available. <button id="refresh-btn">Update</button>
    </div>
  `;
  document.body.appendChild(updateBanner);

  document.getElementById("refresh-btn").addEventListener("click", () => {
    registration.waiting?.postMessage({ type: "SKIP_WAITING" });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
