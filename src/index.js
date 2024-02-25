import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { registerLicense } from "@syncfusion/ej2-base";

const syncfusionLicense = process.env.REACT_APP_SYNCFUSION;

// Registering Syncfusion license key
registerLicense(syncfusionLicense);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
