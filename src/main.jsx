import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-day-picker/dist/style.css";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
