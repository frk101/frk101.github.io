import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
