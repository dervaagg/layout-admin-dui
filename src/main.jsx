import React from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

axios.defaults.withCredentials = true;

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
