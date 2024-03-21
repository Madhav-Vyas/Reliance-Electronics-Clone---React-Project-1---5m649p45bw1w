import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { DataProvider } from "./Providers/AllcategoryData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider> <App />
  </DataProvider>

);
