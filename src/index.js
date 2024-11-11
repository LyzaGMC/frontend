// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./Routes/AppRouter";
import { TokenProvider } from "./context/TokenContext"; // Import TokenProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TokenProvider> {/* Wrap the entire app in TokenProvider */}
      <AppRouter />
    </TokenProvider>
  </React.StrictMode>
);
