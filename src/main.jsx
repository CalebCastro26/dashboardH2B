import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents-react/dist/Assets";
import "@ui5/webcomponents-icons/dist/AllIcons";

setTheme("sap_horizon");
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
