import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CandidatContextProvider } from "./store/CandidatsContext";
import { LoginContextProvider } from "./store/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoginContextProvider>
      <CandidatContextProvider>
        <App />
      </CandidatContextProvider>
    </LoginContextProvider>
  </BrowserRouter>
);
